import { useSearchParams } from "react-router-dom";

const FilterBar = () => {
  const [params, setParams] = useSearchParams();
  const brand = params.get("brand") ?? "";
  const month = params.get("month") ?? "";

  const handlerOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const next = new URLSearchParams(params);
    next.set(e.target.id, e.target.value);
    setParams(next);
  };

  return (
    <div className="w-full pt-4">
      <h2 className="font-bold mb-4">FilterBar</h2>
      <label htmlFor="brand">brand</label>
      <input
        value={brand}
        type="text"
        id="brand"
        onChange={event => handlerOnChange(event)}
        className="border focus-visible:outline-amber-500 px-2 rounded-lg w-full"
      />
      <label htmlFor="month">month</label>
      <input
        value={month}
        type="text"
        id="month"
        onChange={event => handlerOnChange(event)}
        className="border focus-visible:outline-amber-500 px-2 rounded-lg w-full"
      />
    </div>
  );
};

export default FilterBar;
