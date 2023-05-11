import "./configure";
import { GatedAuth } from "./amplifyUIComponents";
import AppSC from "./App";
import "@aws-amplify/ui-react/styles.css";

export default function Home() {
  return (
    <GatedAuth>
      <AppSC />
    </GatedAuth>
  );
}
