import type { Cycles } from "../types/cycles";

const statusClasses: Record<string, string> = {
  done: "bg-green-100 text-green-700 border border-green-300",
  in_progress: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  blocked: "bg-red-100 text-red-700 border border-red-300",
};

type Props = {
  cycle: Cycles;
};

const CycleTableCard = ({ cycle }: Props) => {
  return (
    <div className="border rounded-md p-4 shadow-sm bg-white">
      <div className="flex justify-between">
        <span className="text-gray-500 text-sm">Cycle ID</span>
        <span className="font-semibold">{cycle.id}</span>
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-gray-500 text-sm">Brand</span>
        <span className="font-semibold">{cycle.brand}</span>
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-gray-500 text-sm">Month</span>
        <span className="font-semibold">{cycle.month}</span>
      </div>

      <div className="flex justify-between mt-2">
        <span className="text-gray-500 text-sm">Status</span>
        <span
          className={`px-2 py-1 rounded text-xs font-medium capitalize ${
            statusClasses[cycle.status]
          }`}
        >
          {cycle.status.replace("_", " ")}
        </span>
      </div>

      <div className="mt-3 flex gap-2 flex-wrap">
        {cycle.metaPaid && (
          <span className="bg-blue-100 text-blue-700 border border-blue-300 px-2 py-1 rounded text-xs font-medium">
            Meta Paid
          </span>
        )}

        {cycle.metaOrganic && (
          <span className="bg-purple-100 text-purple-700 border border-purple-300 px-2 py-1 rounded text-xs font-medium">
            Meta Organic
          </span>
        )}
      </div>

      <div className="mt-3">
        <a
          href={cycle.driveFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline text-sm"
        >
          Open in Drive
        </a>
      </div>
    </div>
  );
};

export default CycleTableCard;
