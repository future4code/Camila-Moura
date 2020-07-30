import { MemoryMeasurement } from "vm";

import moment, { relativeTimeRounding } from "moment";
moment.locale("pt-br");

type event = {
  name: string;
  description: string;
  start: moment.Moment;
  finish: moment.Moment;
};

const eventsList: event[] = [
  {
    name: "CCXP",
    description: "Viva o épico!",
    start: moment("05/12/2020 11:00", "DD/MM/YYYY HH:mm"),
    finish: moment("05/12/2020 21:00", "DD/MM/YYYY HH:mm"),
  },
  {
    name: "Festa da empresa",
    description: "Festa de fim de ano",
    start: moment("06/12/2020 20:00", "DD/MM/YYYY HH:mm"),
    finish: moment("07/12/2020 04:00", "DD/MM/YYYY HH:mm"),
  },
];

function eventInfo(list: event[]): void {
  list.forEach((item: event) => {
    const today = moment();

    //b.) Horário de Londres
    // today.utcOffset("0000").moment()

    const duration = item.finish.diff(item.start, "hours");
    const daysUntilEvent = item.start.diff(today, "days");

    console.log(`
        Nome: ${item.name}
        Horário de início: ${item.start.format(
          "dddd, DD [de] MMMM [de] YYYY, HH:mm"
        )}
        Horário de fim: ${item.finish.format("DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${item.description}
        Duração: ${duration} horas
        Dias até o evento: ${daysUntilEvent} dias
        `);
  });
}

eventInfo(eventsList);

const createEvent = (
  name: string,
  description: string,
  start: moment.Moment,
  finish: moment.Moment
): void => {
  if (!name || !description || !start || !finish) {
    console.log("Evento inválido");
    return;
  }

  const diffStartAndToday = start.diff(moment(), "seconds");
  const diffFinishAndToday = finish.diff(moment(), "seconds");

  if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
    console.log("Data não pode ser anterior ao dia de hoje");
    return;
  }
  eventsList.push({ name, description, start, finish });
};
