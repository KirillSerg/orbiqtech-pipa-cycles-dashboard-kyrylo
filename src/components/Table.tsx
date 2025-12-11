import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cyclesService from "../api/services/cyclesService";
import type { Cycles } from "../types/cycles";
import { useCycles } from "../context/CyclesContext";

const Table = () => {
  const { cycles, setCycles } = useCycles();
  const [fetchError, setFetchError] = useState<unknown>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [params] = useSearchParams();
  const brand = params.get("brand") ?? "";
  const month = params.get("month") ?? "";

  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      try {
        setLoading(true);
        const data = await cyclesService.getCyclesAll({ brand, month });
        setCycles(data);
        setFetchError(null);
      } catch (err) {
        setFetchError(err);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }, 700);

    return () => clearTimeout(timeoutId);
  }, [brand, month]);

  return (
    <div className="grow flex justify-start flex-col px-4 pt-4 ml-[25%]">
      {/* <table>Table</table> */}

      {loading ? (
        <p className="text-green-900 grow px-4">Loading cycles...</p>
      ) : fetchError ? (
        <p className="text-red-700 grow px-4">
          Something went wrong while loading cycles.
        </p>
      ) : !!cycles?.length ? (
        cycles.map(cycle => (
          <p key={cycle.id}>{cycle.brand + " " + cycle.month}</p>
        ))
      ) : (
        <p>No cycles for this selection</p>
      )}
    </div>
  );
};

export default Table;
