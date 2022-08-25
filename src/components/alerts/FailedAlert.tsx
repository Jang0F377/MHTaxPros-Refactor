import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";

interface FailedAlertProps {
  open: boolean;
}

function FailedAlert({ open }: FailedAlertProps) {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <div className="relative z-30">
          <div className="fixed z-40 inset-x-0 top-6 ">
            <div className="flex z-30 items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div
                  className={classNames(
                    "rounded-md bg-red-300 p-4",
                    open ? "text-red-700" : ""
                  )}
                >
                  <div className="flex">
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-red-800">
                        Booking Unsuccessful!
                      </h3>

                      <div className="mt-2 text-sm text-red-700">
                        <p>
                          Something might have gone wrong, please give it
                          another try or give us a call. Our apologies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Transition.Root>
    </div>
  );
}

export default FailedAlert;
