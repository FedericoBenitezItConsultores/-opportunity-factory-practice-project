import React, { useEffect, useState } from "react";
import PriceTemplate from "../../components/template/price-template/PriceTemplate";
import Navbar from "../../components/organisms/navbar-2/Navbar";
import Calificasion from "../../components/molecules/qualification/qualification";

import SessionTimeout from "../../components/molecules/Modal/SessionTimeout/SessionTimeout.jsx";

export default function PricePage() {

   const [isModalOpen, setIsModalOpen] = useState(false);
  const [userActive, setUserActive] = useState(true);
  const [sessionEnded, setSessionEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120);




   const handleLogoutClick = () => {
     setIsModalOpen(true);
   };

  //  const closeModal = () => {
  //    setIsModalOpen(false);
  //  };

   const handleLogout = () => {
     console.log("Sesión cerrada");
     setIsModalOpen(false);
   };



  //  useEffect(() => {
  //    let timer;
  //    let inactivityTimeout;

  //    const handleCountdown = () => {
  //      if (timeLeft > 0) {
  //        timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
  //      } else {
  //        setIsModalOpen(false);
  //        setSessionEnded(true);
  //      }
  //    };

  //    const resetInactivity = () => {
  //      setUserActive(true);
  //      setTimeLeft(120);
  //      setIsModalOpen(false);
  //      setSessionEnded(false);
  //      clearTimeout(inactivityTimeout);

  //      inactivityTimeout = setTimeout(() => {
  //        setUserActive(false);
  //        setIsModalOpen(true);
  //      }, 1000);
  //    };

  //    // window.addEventListener("mousemove", resetInactivity);

  //    if (!userActive) {
  //      handleCountdown();
  //    }

  //    return () => {
  //      clearTimeout(timer);
  //      clearTimeout(inactivityTimeout);
  //      window.removeEventListener("mousemove", resetInactivity);
  //    };
  //  }, [timeLeft, userActive]);



   useEffect(() => {
     let inactivityTimeout;
     let countdownTimer;

     const startCountdown = () => {
       countdownTimer = setInterval(() => {
         setTimeLeft((prevTime) => {
           if (prevTime <= 1) {
             clearInterval(countdownTimer);
             setSessionEnded(true);
             setIsModalOpen(false);
             return 0;
           }
           return prevTime - 1;
         });
       }, 1000);
     };

     const resetInactivity = () => {
       setUserActive(true);
       setTimeLeft(120);
       setIsModalOpen(false);
       setSessionEnded(false);
       clearTimeout(inactivityTimeout);

       inactivityTimeout = setTimeout(() => {
         setUserActive(false);
         setIsModalOpen(true);
         startCountdown();
       }, 1000); // 15 segundos de inactividad
     };

     // Escucha eventos de actividad del usuario
    //  window.addEventListener("mousemove", resetInactivity);
     window.addEventListener("keypress", resetInactivity);

     resetInactivity(); // Inicializar el tiempo de inactividad

     return () => {
       clearTimeout(inactivityTimeout);
       clearInterval(countdownTimer);
      //  window.removeEventListener("mousemove", resetInactivity);
       window.removeEventListener("keypress", resetInactivity);
     };
   }, []);

   const closeModal = () => {
     setIsModalOpen(false);
   };
  return (
    <div>
      <Calificasion />
      <Navbar />
      <PriceTemplate />
      <SessionTimeout
        show={isModalOpen}
        onClose={closeModal}
        setTimeLeft={setTimeLeft}
        setUserActive={setUserActive}
        setSessionEnded={setSessionEnded}
        sessionEnded={sessionEnded}
        timeLeft={timeLeft}
      />
    </div>
  );
}
