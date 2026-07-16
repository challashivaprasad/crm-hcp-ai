import api from "./api";

export const saveInteraction = (data) =>
    api.post("/interaction/", data);