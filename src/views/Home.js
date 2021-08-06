import React, { useState } from "react";

import CTA from "../components/CTA/CTA";
import Hero from "../components/Hero/Hero";
import Modal from "../components/Modal/Modal";
import Header from "../components/Header/Header";
import Features from "../components/Features/Features";
import Explainer from "../components/Explainer/Explainer";
import ModalForm from "../components/ModalForm/ModalForm";

const Home = (props) => {
  const [modalVisibilityState, setModalVisibilityState] = useState({
    isModalVisible: false,
  });

  let toggleModalVisibility = () => {
    isModalVisible
      ? setModalVisibilityState({
          isModalVisible: false,
        })
      : setModalVisibilityState({
          isModalVisible: true,
        });
  };

  const handlePushToApplication = () => {
    return props.history.push("/app");
  };

  const { isModalVisible } = modalVisibilityState;
  return (
    <div className="App flex flex-col items-center w-full">
      <Header
        modalVisibilityToggler={toggleModalVisibility}
        pushToApplication={handlePushToApplication}
      />
      <Hero modalVisibilityToggler={toggleModalVisibility} />
      <Features />
      <Explainer />
      <CTA modalVisibilityToggler={toggleModalVisibility} />
      {isModalVisible ? (
        <Modal
          children={
            <ModalForm modalVisibilityToggler={toggleModalVisibility} />
          }
          modalVisibility={isModalVisible}
        />
      ) : (
        ""
      )}
      <script
        async
        defer
        src="https://apis.google.com/js/api.js"
        onload="this.onload=function(){};handleClientLoad()"
        onreadystatechange="if (this.readyState === 'complete') this.onload()"
      ></script>
    </div>
  );
};

export default Home;
