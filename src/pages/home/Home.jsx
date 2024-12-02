import React from "react";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Poput from "../../components/organisms/poput/Poput";
import PoputReload from "../../components/molecules/poput-reload/PoputReload";
import Spinner from "../../components/molecules/pooput-spinner/pooput-spinner";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Navbar />

      {/* <Poput> */}
      {/* <PoputReload /> */}
      <Spinner />
      {/* </Poput> */}
    </div>
  );
};

export default Home;
