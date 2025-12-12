import type { Cycles } from "../types/cycles";

const statusClasses: Record<string, string> = {
  done: "bg-green-100 text-green-700 border border-green-300",
  in_progress: "bg-yellow-100 text-yellow-700 border border-yellow-300",
  blocked: "bg-red-100 text-red-700 border border-red-300",
};

type Props = {
  cycle: Cycles;
};

const CycleTableRow = ({ cycle }: Props) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="border px-4 py-2">{cycle.id}</td>
      <td className="border px-4 py-2">{cycle.brand}</td>
      <td className="border px-4 py-2">{cycle.month}</td>

      <td className="border px-4 py-2">
        <span
          className={`px-2 py-1 rounded text-xs font-medium capitalize ${
            statusClasses[cycle.status]
          }`}
        >
          {cycle.status.replace("_", " ")}
        </span>
      </td>

      <td className="border px-4 py-2 space-x-1">
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
      </td>

      <td className="border px-4 py-2">
        <a
          href={cycle.driveFolderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          Open in Drive
        </a>
      </td>
    </tr>
  );
};

export default CycleTableRow;
