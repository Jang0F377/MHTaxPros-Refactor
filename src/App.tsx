import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CallToAction from "./components/CallToAction";
import LandingImage from "./components/LandingImage";
import Contact from "./components/Contact";
import RecentNewsCards from "./components/RecentNewsCards";
import DatesToRemember from "./components/DatesToRemember";
import Calendar from "./components/CalendarComponent";

function App() {
  return (
    <div className="flex flex-col ">
      <Parallax pages={5} style={{ top: "0", left: "0" }}>
        <ParallaxLayer
          offset={0}
          factor={1}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="flex ">
            <LandingImage />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={3}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="lg:items-center"
        >
          <div className="space-y-12 lg:space-y-24 lg:-my-96">
            <h1 className="text-center mx-auto text-black text-4xl mt-24  underline">
              Check my Refund/News/Dates to Remember
            </h1>
            <RecentNewsCards />
            <CallToAction />
            <DatesToRemember />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={3}
          speed={0.75}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5F8673",
          }}
        >
          <div>
            <Calendar />
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
