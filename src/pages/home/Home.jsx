import React from "react";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Poput from "../../components/organisms/poput/Poput";
import PoputReload from "../../components/molecules/poput-reload/PoputReload";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Navbar />
      <Poput>
        <PoputReload />
      </Poput>
    </div>
  );
};

export default Home;
