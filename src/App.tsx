import FilterBar from "./components/FilterBar";
import Header from "./components/Header";
import Summary from "./components/Summary";
import Table from "./components/Table";

const App = () => {
  return (
    <div>
      <Header />
      <main className="flex justify-between mt-20 relative flex-col md:flex-row">
        <aside className=" md:w-1/4 border flex-row border-blue-950 border-t-0 md:h-full px-2  md:fixed md:left-0 flex gap-10 md:flex-col">
          <FilterBar />
          <Summary />
        </aside>

        <Table />
      </main>
    </div>
  );
};

export default App;
