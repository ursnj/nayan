import {useState} from "react";
import {CustomSwitch} from "../components/CustomSwitch";

const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <CustomSwitch label="Enable Notifications" enabled={enabled} setEnabled={setEnabled} />
  );
};

export default SwitchExample;
