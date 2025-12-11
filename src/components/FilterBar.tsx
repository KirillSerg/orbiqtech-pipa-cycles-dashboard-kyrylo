import { useSearchParams } from "react-router-dom";
import { useCycles } from "../context/CyclesContext";

const FilterBar = () => {
  const [params, setParams] = useSearchParams();
  const brand = params.get("brand") ?? "";
  const month = params.get("month") ?? "";

  const { allCycles } = useCycles();
  const uniqueBrands = Array.from(
    new Set(allCycles?.map(cycle => cycle.brand) || [])
  );
  const uniqueMonth = Array.from(
    new Set(allCycles?.map(cycle => cycle.month) || [])
  );

  const handlerOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const next = new URLSearchParams(params);
    next.set(e.target.id, e.target.value);
    setParams(next);
  };

  return (
    <div className="w-full pt-4 flex flex-col">
      <h2 className="font-bold mb-4">FilterBar</h2>
      <label htmlFor="brand">Brand: </label>
      <select
        id="brand"
        value={brand}
        onChange={handlerOnChange}
        className="border rounded-sm"
      >
        <option value="">All brands</option>
        {uniqueBrands.map(b => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <label htmlFor="month">Month: </label>
      <select
        id="month"
        value={month}
        onChange={handlerOnChange}
        className="border rounded-sm"
      >
        <option value="">All month</option>
        {uniqueMonth.map(m => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
