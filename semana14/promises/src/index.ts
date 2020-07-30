import axios from "axios";
const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenews";

// 1
// a. O endpoint a ser utilizado é o getSubscribers
// b. Ao tipar a função, é preciso colocar Promise<any>
// c.

async function getAllSubscribersEx1(): Promise<any> {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
}

// 2
/* a. Com a sintaxe de arrow function, o async vem depois do nome da 
função, assim como os parâmetros. A tipagem da função continua sendo 
determinada após os parâmetros. */
// b.
const getAllSubscribersEx2 = async (): Promise<any[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data;
};

// 3
type User = {
  id: string;
  name: string;
  email: string;
};

/* a e b. Sim, teremos erro de tipagem, porque o resultado da função será
uma Promise { <pending> } e não será igual ao type User. O map é usado para
garantirmos que os dados virão no formato que queremos*/
// c.
const getAllSubscribersEx3 = async (): Promise<User[]> => {
  const users = await axios.get(`${baseUrl}/subscribers/all`);
  return users.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
};

getAllSubscribersEx3();

// 4
// a. O tipo é void porque ela não irá retornar nada
// b.
const createNewsEx4 = async (
  title: string,
  content: string,
  date: number
): Promise<void> => {
  const body = {
    title: title,
    content: content,
    date: date,
  };
  const news = await axios.put(`${baseUrl}/news`, body);
};

// 5
/* a. Métodos de array (map, forEach, filter, etc.) não foram criados 
para serem usados em funções assíncronas, por isso podem dar problemas. 
Por isso é melhor usar for... of */
// b.

const sentMessageEx5 = async (
  users: User[],
  message: string
): Promise<void> => {
  const promiseArray: Promise<any>[] = [];

  for (const user of users) {
    await axios.post(`${baseUrl}/notifications/send`, {
      subscriberId: user.id,
      message: message,
    });
  }
};

// 6
/* a. O Promise.all() recebe várias promises em formato de array e retorna
as respostas de cada uma das promises depois que todas elas responderem */
/* b. Podemos enviar as notificações paralelamente, e o código vai esperar 
para todas elas serem chamadas */
// c.

const sentMessageEx6 = async (
  users: User[],
  message: string
): Promise<void> => {
  const promiseArray: Promise<any>[] = [];

  for (const user of users) {
    console.log("Enviando notificação para:", user.name);
    promiseArray.push(
      axios.post(`${baseUrl}/notifications/send`, {
        subscriberId: user.id,
        message: message,
      })
    );
  }

  await Promise.all(promiseArray);
};

// 7

// a.

const createSubscriberEx7 = async (
  name: string,
  email: string
): Promise<void> => {
  const body = {
    name: name,
    email: email,
  };
  const news = await axios.put(`${baseUrl}/subscribers`, body);
};

// b.

const createAndSendNotifications = async (): Promise<void> => {
  try {
    await createNewsEx4(
      "Cinemas abertos!",
      "Sessões voltarão em agosto",
      Date.now()
    );

    const users = await getAllSubscribersEx3();
    await sentMessageEx6(users, "Nova notícia!");
  } catch (e) {
    console.log("Erro: ", e.message);
  }
};

// c.

const getNotifications = async (): Promise<any> => {
  const users = await getAllSubscribersEx3();
  const notifications = [];
  for (const user of users) {
    notifications.push(
      axios.get(`${baseUrl}/subscribers/${user.id}/notifications/all`)
    );
  }

  const result = await Promise.all(notifications);
  const data = result.map((res) => res.data);
  return data;
};
