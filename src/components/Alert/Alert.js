import React from "react";
import { XIcon } from "@heroicons/react/outline";

// Alert component takes 3 `alerTypes`: "success", "error", and info which outputs a blue, informative alert. It also takes `alertMessage' which is the message to be displayed by the alert. Finally, `alertVisibility` is drilled down to toggle the alert visibily, and a button to close the alert was added using the drilled down `alertToggle` method.
const Alert = (props) => {
  const { alertType, alertToggle, alertMessage, alertVisibility } = props;
  return (
    <>
      {alertType === "error" && alertVisibility ? (
        <>
          <div className="flex align-middle rounded-md bg-red-100 my-2 w-full h-full">
            <span className="p-3 inline-flex text-xs leading-5 font-semibold text-red-800">
              {alertMessage}
            </span>
            <button>
              <XIcon
                className="h-6 w-6 bg-red-200 text-white font-extrabold p-1 rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                aria-hidden="true"
                onClick={() => alertToggle()}
              />
            </button>
          </div>
        </>
      ) : alertType === "success" && alertVisibility ? (
        <div className="flex align-middle rounded-md bg-green-100 my-2 w-full h-full">
          <span className="p-3 inline-flex text-xs leading-5 font-semibold text-green-800">
            {alertMessage}
          </span>
          <button>
            <XIcon
              className="h-6 w-6 bg-green-200 text-white font-extrabold p-1 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
              aria-hidden="true"
              onClick={() => alertToggle()}
            />
          </button>
        </div>
      ) : alertType === "info" && alertVisibility ? (
        <>
          <div className="flex align-middle rounded-md bg-blue-100 my-2 w-full h-full">
            <span className="p-3 inline-flex text-xs leading-5 font-semibold text-blue-800">
              {alertMessage}
            </span>
            <button>
              <XIcon
                className="h-6 w-6 bg-blue-200 text-white font-extrabold p-1 rounded-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                aria-hidden="true"
                onClick={() => alertToggle()}
              />
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Alert;
