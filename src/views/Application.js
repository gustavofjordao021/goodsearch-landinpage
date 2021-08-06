import React from "react";

import ApplicationBody from "../components/ApplicationBody/ApplicationBody";
import ApplicationHeader from "../components/ApplicationHeader/ApplicationHeader";

const Application = (props) => {
  const handlePushToHome = () => {
    return props.history.push("/app");
  };

  return (
    <div className="App flex flex-col items-center w-full h-full">
      <ApplicationHeader pushToHome={handlePushToHome} />
      <ApplicationBody />
    </div>
  );
};

export default Application;
