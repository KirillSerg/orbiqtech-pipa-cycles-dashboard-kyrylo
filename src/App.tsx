import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-between mt-8">
        <aside className="w-1/4 border border-blue-950 h-screen px-2">
          <FilterBar />
          <Summary />
        </aside>

        <Table />
      </main>
    </div>
  );
};

export default App;
