import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainers";

function App() {
  return (
    <div className={styles.containers}>
      <Display />
      <ButtonContainer />
    </div>
  );
}

export default App;
