import React, { useState } from "react";
import CardGame from "./components/cardGame";
import Header from "./components/header";
import Modal from "./components/modal";
import { useTimer } from "./util/customHooks";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [bestTime, setBestTime] = useState();
  const [previousTime, setPreviousTime] = useState();

  const {
    time,
    start: timerStart,
    stop: timerStop,
    reset: timerReset,
  } = useTimer();

  const cardTexts = [
    "Bunny 🐰",
    "Frog 🐸",
    // "Panda 🐼",
    // "Doggy 🐶",
    // "Kitty 😺",
    // "Duck 🦆",
  ];

  function whenGameEnd(){
    timerStop()
    setPreviousTime(time)
    timerReset()
  }

  return (
    <>
      <Header
        // add time, bestTime, previousTime props
        openModal={() => setShowModal(true)}
        time={time}
        bestTime={bestTime}
        previousTime={previousTime}
      />
      <CardGame
        // add onGameStart, onGameEnd props
        cardTexts={cardTexts}
        onGameStart={timerStart}
        onGameEnd={whenGameEnd}
        
      />
      <Modal isShown={showModal} close={() => setShowModal(false)} />
    </>
  );
}

