import api from "./api";

export const getHCPs = () =>
    api.get("/hcp/");