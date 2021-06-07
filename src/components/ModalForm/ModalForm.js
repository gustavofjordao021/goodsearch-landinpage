import React, { useState } from "react";

// Importing abstracted components
import Alert from "../Alert/Alert"
import Button from "../Button/Button";
import { XIcon } from '@heroicons/react/outline'

// Importing service with routes to authorization
import SUBSCRIBE_SERVICE from "../../services/SubscribeService.js";

const ModalForm = (props) => {
  // State to hold credentials on form
  const [credentialsState, setCredentialsState] = useState({
    email: "",
  });

  // State to handle lifecycle changes
  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isError: false,
    isLoading: false,
  });

  // Function to handle Login credentials submission
  let handleSubmit = (event) => {
    event.preventDefault();
    if (credentialsState.email.length === 0) {
      setLifecycleState({
        errors: "Please confirm email adress before trying to subscribe.",
        isError: true,
        isLoading: false,
      });
    } else {
      setLifecycleState({ errors: [], isError: false, isLoading: true });
      // SUBSCRIBE_SERVICE.login({
      //   email: credentialsState.email,
      // })
      SUBSCRIBE_SERVICE.runTest()
      .then((response) => {
        setLifecycleState({
          ...lifecycleState,
          isLoading: false,
        });
      })
      .catch((error) => {      
        setLifecycleState({
          errors: error.response.data.message,
          isError: true,
          isLoading: false,
        });
      });
    }
  };

  const { isError, isLoading } = lifecycleState;
  const { modalVisibilityToggler } = props;
  return (
    <>
      <div className="min-h-full flex flex-grow flex-col-reverse items-center justify-center px-2 sm:px-4 lg:px-6">
        <div className="order-2 flex flex-row w-full justify-end sm:order-3 sm:ml-3">
            <button
                type="button"
                className="-mr-1 flex p-2 rounded-md bg-indigo-500 hover:bg-indigo-300 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
                onClick={() => modalVisibilityToggler()}
            >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-4 w-4 text-white" aria-hidden="true" />
            </button>
        </div>
        <div className="max-w-md w-full space-y-8 px-8 my-10 rounded-xl">
          <div>
            <h2 className="mt-2 text-center text-2xl font-extrabold text-gray-900 lg:text-3xl">
              Subscribe to{" "}
              <span className="relative inline-block">
                <span className="z-20 relative">Goodsearch!</span>
                <div className="bg-indigo-300 absolute w-full h-2 bottom-0.5 z-10"></div>
              </span>
              <p className="mt-2 text-center text-lg font-normal text-gray-600">
                Receive our updates right at your inbox and get ready to earn tokens for your favorite projects.
              </p>
            </h2>            
          </div>
          <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="rounded-md -space-y-px">
              <div className="mb-2">
                {isError ? (
                  <Alert
                    alertMessage={lifecycleState.errors}
                    alertType={"error"}
                  />
                ) : (
                  ""
                )}
                <label
                  for="email-address"
                  className="block text-sm font-medium text-gray-700 mb-1 pl-3"
                >
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 mb-1 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setCredentialsState({
                      ...credentialsState,
                      email: e.target.value,
                    })
                  }
                />
              </div>              
            </div>
            <div>
              <Button
                clickAction={handleSubmit}
                clickEffect={isLoading}
                buttonType={"primary"}
                buttonCTA={"Subscribe"}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ModalForm;