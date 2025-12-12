import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cyclesService from "../api/services/cyclesService";
import { useCycles } from "../context/CyclesContext";
import Error from "./Error";
import CycleTableRow from "./CycleTableRow";
import CycleTableCard from "./CycleTableCard";

const Table = () => {
  const { allCycles, setAllCycles, filteredCycles, setFilteredCycles } =
    useCycles();
  const [fetchError, setFetchError] = useState<unknown>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [params] = useSearchParams();
  const brand = params.get("brand") ?? "";
  const month = params.get("month") ?? "";

  const handleFetchCycles = useCallback(async () => {
    try {
      setLoading(true);
      const data = await cyclesService.getCyclesAll({ brand, month });
      if ((!brand && !month) || !allCycles) setAllCycles(data);
      setFilteredCycles(data);
      setFetchError(null);
    } catch (err) {
      setFetchError(err);
      setFilteredCycles(null);
    } finally {
      setLoading(false);
    }
  }, [brand, month]);

  useEffect(() => {
    handleFetchCycles();
  }, [brand, month]);

  return (
    <div className="grow flex justify-start flex-col px-4 pt-4 md:ml-[25%]">
      {loading ? (
        <p className="text-green-900 grow px-4">Loading cycles...</p>
      ) : fetchError ? (
        <Error onFetchCycles={handleFetchCycles} />
      ) : !!filteredCycles?.length ? (
        <>
          {/* DESKTOP TABLE */}
          <table className="min-w-full border-collapse hidden md:table">
            <thead className="md:sticky md:top-20 bg-gray-100 z-10 shadow-sm">
              <tr>
                <th className="border px-4 py-2">Cycle ID</th>
                <th className="border px-4 py-2">Brand</th>
                <th className="border px-4 py-2">Month</th>
                <th className="border px-4 py-2">Status</th>
                <th className="border px-4 py-2">Meta</th>
                <th className="border px-4 py-2">Drive</th>
              </tr>
            </thead>

            <tbody>
              {filteredCycles.map(cycle => (
                <CycleTableRow key={cycle.id} cycle={cycle} />
              ))}
            </tbody>
          </table>

          {/* MOBILE CARDS */}
          <div className="md:hidden flex flex-col gap-4 mt-4">
            {filteredCycles.map(cycle => (
              <CycleTableCard key={cycle.id} cycle={cycle} />
            ))}
          </div>
        </>
      ) : (
        <p>No cycles for this selection</p>
      )}
    </div>
  );
};

export default Table;
