import { PayBlock } from "./components/Pay";
import { VerifyBlock } from "./components/Verify";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3">
      <VerifyBlock />
      <PayBlock />
    </main>
  );
}
