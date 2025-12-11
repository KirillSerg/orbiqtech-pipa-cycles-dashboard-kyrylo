import type { CyclesStatus } from "../assets/data/constants";

export type Cycles = {
  id: string;
  brand: string;
  month: string;
  status: CyclesStatus;
  driveFolderUrl: string;
  metaPaid: boolean;
  metaOrganic: boolean;
}
export type CyclesRequest = {
  brand: string;
  month: string;
}
