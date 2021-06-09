import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

import Alert from "../Alert/Alert";
import Button from "../Button/Button";

import VALIDATORS from "../../util/validators";
import SUBSCRIBE_SERVICE from "../../services/SubscribeService.js";

import moment from "moment";

const Form = (props) => {
  const [credentialsState, setCredentialsState] = useState({
    email: "",
  });

  const [lifecycleState, setLifecycleState] = useState({
    errors: [],
    isDone: false,
    isError: false,
    isLoading: false,
  });

  let handleSubmit = (event) => {
    event.preventDefault();
    if (
      !VALIDATORS.isEmpty(credentialsState.email) &&
      !VALIDATORS.isEmail(credentialsState.email)
    ) {
      setLifecycleState({
        errors: "Please confirm email adress before trying to subscribe.",
        isError: true,
        isLoading: false,
      });
    } else {
      setLifecycleState({ errors: [], isError: false, isLoading: true });
      SUBSCRIBE_SERVICE.subscribeUser({
        timestamp: moment().format("MM DD YY"),
        email: credentialsState.email,
      })
        .then(() => {
          setLifecycleState({
            ...lifecycleState,
            isLoading: false,
            isDone: true,
          });
        })
        .catch((error) => {
          console.log(process.env.SHEET_BEST_ID);
          setLifecycleState({
            errors: error.response.data.message,
            isError: true,
            isLoading: false,
          });
        });
    }
  };

  const { isDone, isError, isLoading } = lifecycleState;
  return (
    <>
      <div className="min-h-full flex flex-grow items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 border border-gray-300 p-8 rounded-xl shadow-md">
          {!isDone ? (
            <>
              <div>
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 lg:text-3xl">
                  Subscribe to{" "}
                  <span className="relative inline-block">
                    <span className="z-20 relative">Goodsearch!</span>
                    <div className="bg-green-300 absolute w-full h-2 bottom-0.5 z-10"></div>
                  </span>
                  <p className="mt-2 text-center text-lg font-normal text-gray-600">
                    Receive our updates right at your inbox and get ready to
                    earn tokens for your favorite projects.
                  </p>
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={(e) => e.preventDefault()}
              >
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
                      className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 mb-1 text-gray-900 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500 focus:z-10 sm:text-sm"
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
            </>
          ) : (
            <>
              <div className="flex flex-col items-center">
                <div>
                  <CheckCircleIcon
                    className="h-20 w-20 text-green-800"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-900 lg:text-3xl">
                  Thank you for subscribing to{" "}
                  <span className="relative inline-block">
                    <span className="z-20 relative">Goodsearch!</span>
                    <div className="bg-green-300 absolute w-full h-2 bottom-0.5 z-10"></div>
                  </span>
                  <p className="mt-2 text-center text-lg font-normal text-gray-600">
                    Look for our updates on your inbox and spread the word about
                    doing good.
                  </p>
                </h2>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Form;
