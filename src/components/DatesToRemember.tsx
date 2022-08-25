import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { D2R } from "../../typings";
import { datesToRemember } from "../sharedData/datesToRemember";

function DatesToRemember() {
  const [dates, setDates] = useState<Array<D2R>>(datesToRemember);
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="bg-money-green-complimentary opacity-90 rounded-lg mx-1 sm:max-w-xl xl:max-w-7xl sm:mx-auto py-4 px-4  sm:px-6  ">
      <h1 className="text-center font-bold text-2xl ">Dates to Remember</h1>
      <dl className="border items-center my-3 divide-y divide-gray-200">
        {dates.map((day) => (
          <Disclosure
            as="div"
            key={day.entity}
            className="items-center py-4 px-1"
          >
            {({ open }) => (
              <>
                <dt className="text-lg">
                  <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                    <span className="font-semibold text-gray-900">
                      {day.entity}
                    </span>
                    <span className="ml-6 h-7 flex items-center">
                      <ChevronDownIcon
                        className={classNames(
                          open ? "-rotate-180" : "rotate-0",
                          "h-6 w-6 transform"
                        )}
                        aria-hidden="true"
                      />
                    </span>
                  </Disclosure.Button>
                </dt>
                <Disclosure.Panel as="div">
                  <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                          <table className="min-w-full divide-y divide-gray-300">
                            <thead className="bg-platinum">
                              <tr className="divide-x divide-gray-200">
                                <th
                                  scope="col"
                                  className="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                >
                                  Due Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Ext. Due Date
                                </th>
                                <th
                                  scope="col"
                                  className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                                >
                                  Form #
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 bg-white">
                              <tr className="divide-x divide-gray-200">
                                <td className="whitespace-nowrap p-4 text-sm text-complimentary-color-husband">
                                  {day.dueDate}
                                </td>
                                <td className="whitespace-nowrap p-4 text-sm text-complimentary-color-husband">
                                  {day.extendedDueDate}
                                </td>
                                <td className="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-complimentary-color-husband sm:pr-6">
                                  {day.form}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </dl>
    </div>
  );
}

export default DatesToRemember;
