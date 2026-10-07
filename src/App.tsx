import { cn } from "@/lib/cn";
import { Navigation } from "./components/ui/navigation";
import { Home } from "./components/ui/home";
import { Team } from "./components/ui/team";
import { Services } from "./components/ui/services";
import { Carefoul } from "./components/ui/carefoul";
import { Philosophy } from "./components/ui/philosophy";
import { Process } from "./components/ui/process";
import { Events } from "./components/ui/events";
import { Gallery } from "./components/ui/gallery";
import { Petshop } from "./components/ui/petshop";
import { Pricing } from "./components/ui/pricing";
import { IntakeForm } from "./components/ui/intake-form";
import { Location } from "./components/ui/location";
import { Social } from "./components/ui/social";
import { Contact } from "./components/ui/contact";
import { Footer } from "./components/ui/footer";

function App() {
  return (
    <main
      className={cn(
        "site-shell grid min-h-svh w-full min-w-0 grid-cols-[minmax(0,1fr)] place-items-center overflow-x-clip",
      )}
    >
      <Navigation />
      <Home />
      <Team />
      <Services />
      <Carefoul />
      <Philosophy />
      <Process />
      <Events />
      <Gallery />
      <Petshop />
      <Pricing />
      <IntakeForm />
      <Location />
      <Social />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
