import React, { useState } from "react";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Poput from "../../components/organisms/poput/Poput";
import PoputWatingTime from "../../components/molecules/popup-wating-time/PoputWatingTime";
import WatingTime from "../../components/molecules/popup-wating-time/WatingTime";
import PoputReloadContainer from "../../components/molecules/poput-reload/PoputReloadContainer";

const Home = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Navbar />
      <Poput>
        <PoputReloadContainer />
      </Poput>
      {/* <WatingTime /> */}
    </div>
  );
};

export default Home;
