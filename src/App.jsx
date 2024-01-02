import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainers";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleKeyPress = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newVal = calVal + buttonText;
      setCalVal(newVal);
    }
  };

  return (
    <div className={styles.containers}>
      <Display displayText={calVal} />
      <ButtonContainer onButtonClick={handleKeyPress} />
    </div>
  );
}

export default App;
