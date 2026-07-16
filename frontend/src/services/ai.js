import api from "./api";

export const askAI = async (text) => {
  const res = await api.post("/ai/chat", {
    interaction_notes: text,
  });

  return res.data;
};