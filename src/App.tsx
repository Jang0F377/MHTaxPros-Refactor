import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CallToAction from "./components/CallToAction";
import LandingImage from "./components/LandingImage";
import Contact from "./components/Contact";
import RecentNewsCards from "./components/RecentNewsCards";
import DatesToRemember from "./components/DatesToRemember";
import Calendar from "./components/CalendarComponent";
import { useAppSelector } from "./hooks/hooks";
import { getFailedState, getSuccessState } from "./slices/globalStateSlice";
import SuccessfulAlert from "./components/alerts/SuccessfulAlert";
import FailedAlert from "./components/alerts/FailedAlert";

function App() {
  const success = useAppSelector(getSuccessState);
  const failed = useAppSelector(getFailedState);

  return (
    <div className="flex flex-col ">
      <Parallax pages={5.3} style={{ top: "0", left: "0" }}>
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
          factor={2.5}
          speed={0.7}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          className="items-center"
        >
          <div className="space-y-24 lg:space-y-44 md:-my-96">
            <h1 className="text-center mx-auto text-black text-4xl lg:text-5xl mt-24  underline">
              Check my Refund/News/Dates to Remember
            </h1>
            <RecentNewsCards />
            <CallToAction />
            <DatesToRemember />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={3}
          factor={3.1}
          speed={0.75}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#5F8673",
          }}
        >
          <div className="first:space-y-32 space-y-16">
            <h1 className="text-center mx-auto text-black text-4xl lg:text-5xl xl:text-6xl  underline">
              Book an appointment or send me a message
            </h1>
            <Calendar />
            <Contact />
          </div>
        </ParallaxLayer>
      </Parallax>
      <SuccessfulAlert open={success} />
      <FailedAlert open={failed} />
    </div>
  );
}

export default App;
