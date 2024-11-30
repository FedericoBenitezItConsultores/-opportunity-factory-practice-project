import React, { useState } from "react";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Poput from "../../components/organisms/poput/Poput";
import PoputReload from "../../components/molecules/poput-reload2/PoputReload";
import PoputWatingTime from "../../components/molecules/popup-wating-time/PoputWatingTime";
import WatingTime from "../../components/molecules/popup-wating-time/WatingTime";

const Home = () => {
  const [popup, setPopup] = useState(false);
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Navbar />
      {/* <Poput>
        <PoputReload continuarCotizacion={true} btnReintentar={true} />
      </Poput>{" "} */}
      <WatingTime />
    </div>
  );
};

export default Home;
