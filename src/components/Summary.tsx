import { CyclesStatus } from "../assets/data/constants";
import { useCycles } from "../context/CyclesContext";

const Summary = () => {
  const { filteredCycles } = useCycles();

  return (
    <section>
      <h2 className="mb-4 font-bold">Summary</h2>
      {filteredCycles ? (
        <>
          <p className="font-bold">Total cycles: {filteredCycles.length}</p>
          <p>
            Done:{" "}
            {filteredCycles.filter(c => c.status === CyclesStatus.Done).length}
          </p>
          <p>
            In progress:{" "}
            {
              filteredCycles.filter(c => c.status === CyclesStatus.in_progress)
                .length
            }
          </p>
          <p>
            Blocked:{" "}
            {
              filteredCycles.filter(c => c.status === CyclesStatus.blocked)
                .length
            }
          </p>
        </>
      ) : (
        <p>No data</p>
      )}
    </section>
  );
};

export default Summary;
