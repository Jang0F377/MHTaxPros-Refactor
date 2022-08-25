import React, { Fragment, useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Transition, Dialog } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import BookAppointmentModal from "./BookApptModal";

const getApptProxy = "https://obscure-shelf-17700.herokuapp.com/";
const baseURL = "https://gcmtaxpros.fullslate.com/api/v2/";

const serviceArr = {
  inPerson: 1,
};
let userTypeArray = ["BUSINESS_USER", "CLIENT"];
let employees = {
  brad: "&employees=2",
  michael: "&employees=4351",
};
let fromDate = "from=2022-08-01";
let toDate = "to=2022-10-01";
let fromDate2 = "from=2022-10-02";
let toDate2 = "to=2022-11-16";

//Endpoints
export const bookAppointmentEndpoint = `${getApptProxy}${baseURL}appointments?user_type=${userTypeArray[1]}`;
const openingsEndpoint = `${baseURL}openings?services=${serviceArr.inPerson}${employees.michael}&user_type=${userTypeArray[0]}&${fromDate}&${toDate}`;
const openingsEndpoint2 = `${baseURL}openings?services=${serviceArr.inPerson}${employees.michael}&user_type=${userTypeArray[0]}&${fromDate2}&${toDate2}`;

// Headers
const myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  `Bearer OnXUb9Y3WEfVqLpHhvtITVVWGVj8AvkoJ4MlEOXM853vDvAP4g`
);
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Accept", "application/json");

//GET Req Options
const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

// Begin FunctionComponent Code//
function CalendarComponent() {
  const [showModal, setShowModal] = useState(false);
  const [dateString, setDateString] = useState("");
  const reload = () => window.location.reload();
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    // reload();
  };

  const [openAppt, setOpenAppt] = useState({});
  const [openAppt2, setOpenAppt2] = useState({});
  const eventsTest = { events: [], backgroundColor: "gold" };
  const returnEvents = (arr) => {
    let dataLen = arr.length;
    for (let i = 0; i < dataLen; i++) {
      eventsTest.events.push({
        title: "InPerson Appt",
        start: `${arr[i]}`,
        end: "",
      });
      //Time returns this: 2022-11-01T09:30:00-07:00
    }
  };

  function getOpeningsFlow() {
    fetch(getApptProxy + openingsEndpoint, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        let openings = res.openings;
        setOpenAppt(openings);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        throw err;
      });
  }
  function getOpeningsFlow2() {
    fetch(getApptProxy + openingsEndpoint2, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((res) => {
        let openings = res.openings;
        setOpenAppt2(openings);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
        throw err;
      });
  }

  useEffect(() => {
    getOpeningsFlow();
    getOpeningsFlow2();
  }, [showModal]);
  returnEvents(openAppt);
  returnEvents(openAppt2);

  return (
    <div>
      <div
        style={{ background: "#f7f7f7", padding: "2px", margin: "2px" }}
        id="apptCalendar"
      >
        <BookAppointmentModal
          isOpen={showModal}
          toggle={handleCloseModal}
          chosenDate={dateString}
        />
        <FullCalendar
          plugins={[dayGridPlugin]}
          timeZone="local"
          initialView="dayGridMonth"
          events={eventsTest}
          headerToolbar={{
            start: "",
            center: "title",
            end: "today prev,next",
          }}
          eventClick={function (info) {
            let start = info.event.startStr;
            setDateString(start);
            handleShowModal();
          }}
          eventClassNames="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default CalendarComponent;
