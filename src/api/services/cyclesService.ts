import { fakeAPI } from "../fakeApi";
import type { Cycles, CyclesRequest } from "../../types/cycles";

const getCyclesAll = async (params: CyclesRequest): Promise<Cycles[]> => {
  const res = await fakeAPI.get<Cycles[]>(params)

  return res.data;
};

export default {
  getCyclesAll,
}
