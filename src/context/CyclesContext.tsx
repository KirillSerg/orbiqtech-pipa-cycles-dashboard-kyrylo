import { createContext, useContext, useState } from "react";
import type { Cycles } from "../types/cycles";

type CyclesContextType = {
  cycles: Cycles[] | null;
  setCycles: React.Dispatch<React.SetStateAction<Cycles[] | null>>;
};

const CyclesContext = createContext<CyclesContextType | undefined>(undefined);

export const CyclesProvider = ({ children }: { children: React.ReactNode }) => {
  const [cycles, setCycles] = useState<Cycles[] | null>(null);

  return (
    <CyclesContext.Provider value={{ cycles, setCycles }}>
      {children}
    </CyclesContext.Provider>
  );
};

export const useCycles = () => {
  const context = useContext(CyclesContext);
  if (!context) {
    throw new Error("useCycles must be used inside CyclesProvider");
  }
  return context;
};
