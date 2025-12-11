type Props = {
  onFetchCycles: () => Promise<void>;
};

const Error: React.FC<Props> = ({ onFetchCycles }) => {
  return (
    <div className="w-fit flex flex-col items-center gap-2">
      <p className="text-red-700 grow px-4">
        Something went wrong while loading cycles.
      </p>
      <button
        onClick={onFetchCycles}
        className="bg-emerald-600 rounded-md text-white font-semibold p-2 w-fit"
      >
        Try again
      </button>
    </div>
  );
};

export default Error;
