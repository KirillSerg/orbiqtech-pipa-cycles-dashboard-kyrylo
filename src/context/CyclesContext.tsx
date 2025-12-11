import { createContext, useContext, useState } from "react";
import type { Cycles } from "../types/cycles";

type CyclesContextType = {
  allCycles: Cycles[] | null;
  setAllCycles: React.Dispatch<React.SetStateAction<Cycles[] | null>>;
  filteredCycles: Cycles[] | null;
  setFilteredCycles: React.Dispatch<React.SetStateAction<Cycles[] | null>>;
};

const CyclesContext = createContext<CyclesContextType | undefined>(undefined);

export const CyclesProvider = ({ children }: { children: React.ReactNode }) => {
  const [allCycles, setAllCycles] = useState<Cycles[] | null>(null);
  const [filteredCycles, setFilteredCycles] = useState<Cycles[] | null>(null);

  return (
    <CyclesContext.Provider
      value={{ allCycles, setAllCycles, filteredCycles, setFilteredCycles }}
    >
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
