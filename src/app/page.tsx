import "./configure";
import { GatedAuthProvider } from "./amplifyUIComponents";
import AppSC from "./App";

export default function Home() {
  return (
    <GatedAuthProvider>
      <AppSC />
    </GatedAuthProvider>
  );
}
