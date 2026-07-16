import { createContext, useContext, useState } from "react";

const CRMContext = createContext();

export function CRMProvider({ children }) {
  const [formData, setFormData] = useState({
    hcpName: "",
    interactionType: "Meeting",
    attendees: "",
    topics: "",
    outcome: "",
    followUp: "",
    priority: "Low",
    materials: "",
  });

  return (
    <CRMContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </CRMContext.Provider>
  );
}

export function useCRM() {
  return useContext(CRMContext);
}