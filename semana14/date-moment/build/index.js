"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
moment_1.default.locale("pt-br");
const eventsList = [
    {
        name: "CCXP",
        description: "Viva o épico!",
        start: moment_1.default("05/12/2020 11:00", "DD/MM/YYYY HH:mm"),
        finish: moment_1.default("05/12/2020 21:00", "DD/MM/YYYY HH:mm"),
    },
    {
        name: "Festa da empresa",
        description: "Festa de fim de ano",
        start: moment_1.default("06/12/2020 20:00", "DD/MM/YYYY HH:mm"),
        finish: moment_1.default("07/12/2020 04:00", "DD/MM/YYYY HH:mm"),
    },
];
function eventInfo(list) {
    list.forEach((item) => {
        const today = moment_1.default();
        //b.) Horário de Londres
        // today.utcOffset("0000").moment()
        const duration = item.finish.diff(item.start, "hours");
        const daysUntilEvent = item.start.diff(today, "days");
        console.log(`
        Nome: ${item.name}
        Horário de início: ${item.start.format("dddd, DD [de] MMMM [de] YYYY, HH:mm")}
        Horário de fim: ${item.finish.format("DD [de] MMMM [de] YYYY, HH:mm")}
        Descrição: ${item.description}
        Duração: ${duration} horas
        Dias até o evento: ${daysUntilEvent} dias
        `);
    });
}
eventInfo(eventsList);
const createEvent = (name, description, start, finish) => {
    if (!name || !description || !start || !finish) {
        console.log("Evento inválido");
        return;
    }
    const diffStartAndToday = start.diff(moment_1.default(), "seconds");
    const diffFinishAndToday = finish.diff(moment_1.default(), "seconds");
    if (diffStartAndToday < 0 && diffFinishAndToday < 0) {
        console.log("Data não pode ser anterior ao dia de hoje");
        return;
    }
    eventsList.push({ name, description, start, finish });
};
