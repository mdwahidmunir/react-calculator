import styles from "./Display.module.css";
const Display = ({ displayText }) => {
  return (
    <input
      type="text"
      className={styles.display}
      value={displayText}
      readOnly
    />
  );
};

export default Display;
