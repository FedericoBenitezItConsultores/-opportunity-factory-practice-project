import styles from "./styles.module.css";
export default function Poput({ children }) {
  return (
    <>
      <div className={styles.poput_root}></div>
      <div style={{ zIndex: 20, opacity: 1 }}>{children}</div>
    </>
  );
}
