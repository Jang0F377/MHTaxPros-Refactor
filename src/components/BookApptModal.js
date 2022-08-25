import React, { Fragment, useCallback, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { bookAppointmentEndpoint } from "./CalendarComponent";
import { useAppDispatch } from "../hooks/hooks";
import { resetState, setFailed, setSuccess } from "../slices/globalStateSlice";

function BookAppointmentModal(props) {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [newChosenDate, setNewChosenDate] = useState("");
  const [apptBooked, setApptBooked] = useState(false);
  const [errorBooking, setErrorBooking] = useState(false);

  const bookAppointment = async (firstName, lastName, email, phone, notes) => {
    console.log("Launching Booking Flow!");
    let raw = JSON.stringify({
      at: newChosenDate,
      services: [1],
      employee: 4351,
      client_with_creation: {
        first_name: `${firstName}`,
        last_name: `${lastName}`,
        phone_number: {
          number: `${phone}`,
          contact_type: "WORK",
        },
        email: `${email}`,
        birthday: "1980-09-12",
        no_automatic_email: false,
        no_sms: false,
        mass_email_opt_in: true,
        sms_reminder_consent: true,
        address: {
          street1: "",
          street2: "",
          city: "",
          state: "",
          postal_code: "",
        },
        time_zone: "Pacific Time (US & Canada)",
      },
      notes: `${notes}`,
    });
    // Headers
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer OnXUb9Y3WEfVqLpHhvtITVVWGVj8AvkoJ4MlEOXM853vDvAP4g`
    );
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Accept", "application/json");
    let postRequestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(bookAppointmentEndpoint, postRequestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "STATUS_BOOKED") {
          setApptBooked(true);
        } else {
          setErrorBooking(true);
        }
      })
      .catch((error) => {
        setErrorBooking(true);
      });
  };

  const onSubmit = async (data) => {
    await bookAppointment(
      data.first_name,
      data.last_name,
      data.email,
      data.tel,
      data.notes
    );
  };
  const clearState = useCallback(() => {
    setValue("firstName", "");
    setValue("lastName", "");
    setValue("email", "");
    setValue("tel", "");
    setValue("comment", "");
    setNewChosenDate("");
    setApptBooked(false);
    setErrorBooking(false);
    console.log("state cleared");
  }, [setValue]);
  const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  useEffect(() => {
    setNewChosenDate(props.chosenDate);
    if (apptBooked) {
      dispatch(setSuccess());
      sleep(2000)
        .then(() => dispatch(resetState()))
        .then(() => clearState())
        .then(() => props.toggle());
    }
    if (errorBooking) {
      dispatch(setFailed());
      sleep(2000)
        .then(() => dispatch(resetState()))
        .then(() => clearState())
        .then(() => props.toggle());
    }
  }, [apptBooked, clearState, dispatch, errorBooking, props, props.chosenDate]);

  return (
    <>
      <Transition.Root show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            clearState();
            props.toggle();
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-money-green rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6">
                  <h1 className=" justify-center text-center  w-full flex text-3xl mb-1 pb-1 ">
                    Book an Appointment!
                  </h1>
                  <section className="flex  w-full my-1 py-0.5">
                    <div className="flex flex-row w-full justify-evenly">
                      <div>
                        <h3 className="text-center underline text-lg">Date</h3>
                        {newChosenDate ? (
                          <h4 className="text-center mt-1.5 ">
                            {newChosenDate.split("T")[0]}
                          </h4>
                        ) : (
                          <h4 className="text-center mt-1.5 ">ERR</h4>
                        )}
                      </div>
                      <div>
                        <h3 className="text-center underline text-lg">Time</h3>
                        {newChosenDate ? (
                          <h4 className="text-center mt-1.5 ">
                            {newChosenDate.split("T")[1].substring(0, 5)}
                          </h4>
                        ) : (
                          <h4 className="text-center mt-1.5 ">ERR</h4>
                        )}
                      </div>
                    </div>
                  </section>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="flex flex-col block mb-5">
                      <span className="text-complimentary-color-wife">
                        First name
                      </span>
                      <input
                        {...register("firstName", {
                          required: true,
                          minLength: 2,
                          maxLength: 16,
                        })}
                        className="shadow border rounded py-2 px-3 mt-1 block focus:ring focus:ring-yellow-500"
                        placeholder="First name"
                        type="text"
                        autoComplete="given-name"
                      />
                    </label>
                    {errors.firstName && (
                      <span className="text-red-500">
                        - The Name field is required
                      </span>
                    )}
                    {errors.firstName?.type === "minLength" && (
                      <span className="text-red-500">
                        - 2 Character minimum please
                      </span>
                    )}
                    {errors.firstName?.type === "maxLength" && (
                      <span className="text-red-500">
                        - 16 Character maximum please
                      </span>
                    )}
                    <label className="flex flex-col block mb-5">
                      <span className="text-complimentary-color-wife">
                        Last name
                      </span>
                      <input
                        {...register("lastName", {
                          required: true,
                          minLength: 2,
                          maxLength: 20,
                        })}
                        className="shadow border rounded py-2 px-3 mt-1 block focus:ring focus:ring-yellow-500"
                        placeholder="Last name"
                        type="text"
                        autoComplete="given-name"
                      />
                    </label>
                    {errors.lastName && (
                      <span className="text-red-500">
                        - The Name field is required
                      </span>
                    )}
                    {errors.lastName?.type === "minLength" && (
                      <span className="text-red-500">
                        - 2 Character minimum please
                      </span>
                    )}
                    {errors.lastName?.type === "maxLength" && (
                      <span className="text-red-500">
                        - 16 Character maximum please
                      </span>
                    )}
                    <label className="flex flex-col block mb-5">
                      <span className="text-complimentary-color-wife">
                        Email
                      </span>
                      <input
                        {...register("email", {
                          required: true,
                          pattern:
                            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        })}
                        placeholder="you@youremail.com"
                        className="shadow border rounded py-2 px-3 mt-1 block focus:ring ring-yellow-500"
                        type="email"
                        autoComplete="email"
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          - The Email field is required
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="text-red-500">
                          - A valid email format is required
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col block mb-5">
                      <span className="text-complimentary-color-wife">
                        Phone #
                      </span>
                      <input
                        {...register("tel", {
                          required: true,
                          pattern:
                            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                        })}
                        placeholder="702-555-5555"
                        className="shadow border rounded py-2 px-3 mt-1 block focus:ring ring-yellow-500"
                        type="tel"
                        autoComplete="tel"
                      />
                      {errors.email && (
                        <span className="text-red-500">
                          - A telephone number is required
                        </span>
                      )}
                      {errors.tel?.type === "pattern" && (
                        <span className="text-red-500">
                          - A valid telephone number is required
                        </span>
                      )}
                    </label>
                    <label className="flex flex-col block mb-5">
                      <span className="text-complimentary-color-wife">
                        Notes
                      </span>
                      <textarea
                        {...register("comment", {
                          required: false,
                          maxLength: 150,
                        })}
                        rows={7}
                        className="shadow border rounded py-2 px-3 mt-1 block focus:ring focus:ring-yellow-500"
                      />
                    </label>
                    <div className="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                      <button
                        type={"submit"}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:col-start-2 sm:text-sm"
                      >
                        Book Appointment
                      </button>
                      <button
                        type="button"
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                        onClick={() => {
                          clearState();
                          props.toggle();
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

export default BookAppointmentModal;
