import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-between mt-20 relative">
        <aside className="w-1/4 border border-blue-950 border-t-0 h-full px-2  fixed left-0 flex gap-10 flex-col">
          <FilterBar />
          <Summary />
        </aside>

        <Table />
      </main>
    </div>
  );
};

export default App;
