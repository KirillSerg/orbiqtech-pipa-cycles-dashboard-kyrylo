import cyclesMockData from "../assets/data/mockCyclesData.json"
import type { CyclesRequest } from "../types/cycles";

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const fakeAPI = {
  get: async <T>(params: CyclesRequest): Promise<{ data: T }> => {
    // fake request delay
    await delay(1000);

    // 20% chance
    if (Math.random() < 0.2) {
      throw new Error("Fake error (20%)");
    }

    let cycles = [...cyclesMockData];

    if (params?.brand) {
      cycles = cycles.filter(cycle => cycle.brand.toLowerCase().includes(params.brand?.toLowerCase()));
    }

    if (params?.month) {
      cycles = cycles.filter(cycle => cycle.month.includes(params.month));
    }

    return { data: cycles as T };
  },
};
