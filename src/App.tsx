import MenuExample from "./examples/MenuExample";
import SelectExample from "./examples/SelectExample";
import DialogExample from "./examples/DialogExample";
import SwitchExample from "./examples/SwitchExample";
import DisClosureExample from "./examples/DisClosureExample";
import PopoverExample from "./examples/PopoverExample";

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-300">
      <SelectExample />
      <div className="mt-3 text-right">
        <MenuExample />
      </div>
      <div className="mt-3">
      <DialogExample/>
      </div>
      <div className="mt-3">
      <SwitchExample/>
      </div>
      <div className="mt-3">
        <DisClosureExample/>
      </div>
      <div className="mt-3 text-right">
        <PopoverExample/>
      </div>
    </div>
  );
};

export default App;
