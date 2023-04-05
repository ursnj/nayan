import CustomSwitch from "./CustomSwitch";
import {useState} from "react";

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <CustomSwitch label="Enable Notifications" enabled={enabled} setEnabled={setEnabled} />
  );
};

export default SwitchExample;
