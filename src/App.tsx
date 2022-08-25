import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import CallToAction from "./components/CallToAction";
import LandingImage from "./components/LandingImage";
import Contact from "./components/Contact";
import RecentNewsCards from "./components/RecentNewsCards";
import DatesToRemember from "./components/DatesToRemember";
import Calendar from "./components/CalendarComponent";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getFailedState, getSuccessState } from "./slices/globalStateSlice";
import SuccessfulAlert from "./components/alerts/SuccessfulAlert";

function App() {
  const dispatch = useAppDispatch();
  const success = useAppSelector(getSuccessState);
  const failed = useAppSelector(getFailedState);

  // const handleShow = (x: number) => {
  //   switch (x) {
  //     case 1: {
  //       dispatch(setSuccess());
  //       sleep(2000).then(() => dispatch(resetState()));
  //       break;
  //     }
  //     case 2: {
  //       dispatch(setFailed());
  //       sleep(2000).then(() => dispatch(resetState()));
  //       break;
  //     }
  //     default: {
  //       break;
  //     }
  //   }
  // };

  return (
    <div className="flex flex-col ">
      <Parallax pages={4.7} style={{ top: "0", left: "0" }}>
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
          factor={2.1}
          speed={1}
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
          offset={2.9}
          factor={3}
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
    </div>
  );
}

export default App;
