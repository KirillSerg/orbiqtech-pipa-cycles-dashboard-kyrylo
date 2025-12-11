import { CyclesStatus } from "../assets/data/constants";
import { useCycles } from "../context/CyclesContext";

const Summary = () => {
  const { cycles } = useCycles();

  if (!cycles) return <p>No data yet</p>;

  return (
    <section>
      <h2 className="mb-4 font-bold">Summary</h2>
      <p className="font-bold">Total cycles: {cycles.length}</p>
      <p>Done: {cycles.filter(c => c.status === CyclesStatus.Done).length}</p>
      <p>
        In progress:{" "}
        {cycles.filter(c => c.status === CyclesStatus.in_progress).length}
      </p>
      <p>
        Blocked: {cycles.filter(c => c.status === CyclesStatus.blocked).length}
      </p>
    </section>
  );
};

export default Summary;
