import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import cyclesService from "../api/services/cyclesService";
import type { Cycles } from "../types/cycles";

const Table = () => {
  const [fetchedCycles, setFetchedCycles] = useState<Cycles[] | null>(null);
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
        setFetchedCycles(data);
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

  if (loading)
    return <p className="text-green-900 grow px-4">Loading cycles...</p>;

  if (fetchError)
    return (
      <p className="text-red-700 grow px-4">
        Something went wrong while loading cycles.
      </p>
    );

  return (
    <div className="grow flex justify-start flex-col px-4">
      {/* <table>Table</table> */}

      {!!fetchedCycles?.length ? (
        fetchedCycles.map(cycle => (
          <p key={cycle.id}>{cycle.brand + " " + cycle.month}</p>
        ))
      ) : (
        <p>No cycles for this selection</p>
      )}
    </div>
  );
};

export default Table;
