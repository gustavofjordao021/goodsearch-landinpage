import React, { useState } from "react";

import CTA from "./components/CTA/CTA";
import Hero from "./components/Hero/Hero";
import Modal from "./components/Modal/Modal";
// import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import ModalForm from "./components/ModalForm/ModalForm";

const App = () => {
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

  const { isModalVisible } = modalVisibilityState;
  return (
    <div className="App flex flex-col items-center">
      <Header modalVisibilityToggler={toggleModalVisibility} />
      <Hero modalVisibilityToggler={toggleModalVisibility} />
      <Features />
      <CTA modalVisibilityToggler={toggleModalVisibility} />
      <Footer />
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

export default App;
