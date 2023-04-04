import MenuExample from "./components/custom-menu/MenuExample";
import SelectExample from "./components/custom-select/SelectExample";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <SelectExample />
      <div className="mt-3 text-right">
        <MenuExample />
      </div>
    </div>
  );
};

export default App;
