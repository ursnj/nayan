import MenuExample from "./components/custom-menu/MenuExample";
import SelectExample from "./components/custom-select/SelectExample";
import DialogExample from "./components/custom-doalog/DialogExample";
import SwitchExample from "./components/custom-switch/SwitchExample";
import DisClosureExample from "./components/custom-disclosure/DisClosureExample";
import PopoverExample from "./components/custom-popover/PopoverExample";

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
