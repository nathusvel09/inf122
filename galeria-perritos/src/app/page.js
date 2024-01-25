import Image from "next/image";
import styles from "./page.module.css";
import Perrito from "./components/foto";

export default function Home() {
  return (
    <div className={styles.main}>
      <Perrito/>
      <Perrito/>
      <Perrito/>
      <Perrito/>
    </div>
  );
}
