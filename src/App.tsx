import MenuExample from "./components/custom-menu/MenuExample";
import SelectExample from "./components/custom-select/SelectExample";
import DialogExample from "./components/custom-doalog/DialogExample";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <SelectExample />
      <div className="mt-3 text-right">
        <MenuExample />
      </div>
      <DialogExample/>
    </div>
  );
};

export default App;
