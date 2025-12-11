export const CyclesStatus = {
  Done: "done",
  in_progress: "in_progress",
  blocked: "blocked",
} as const;

export type CyclesStatus = typeof CyclesStatus[keyof typeof CyclesStatus];
