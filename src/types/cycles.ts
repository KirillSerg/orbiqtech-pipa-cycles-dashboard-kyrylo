export type Cycles = {
  id: string;
  brand: string;
  month: string;
  status: "done" | "in_progress" | "blocked";
  driveFolderUrl: string;
  metaPaid: boolean;
  metaOrganic: boolean;
}
export type CyclesRequest = {
  brand: string;
  month: string;
}
