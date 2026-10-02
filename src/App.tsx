import { cn } from "@/lib/cn";
import { Navigation } from "./components/ui/navigation";
import { Home } from "./components/ui/home";
import { Team } from "./components/ui/team";
import { Services } from "./components/ui/services";

function App() {
  return (
    <main className={cn("grid min-h-svh place-items-center")}>
      <Navigation />
      <Home />
      <Team />
      <Services />
    </main>
  );
}

export default App;
