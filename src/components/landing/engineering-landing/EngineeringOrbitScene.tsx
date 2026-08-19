import Image from "next/image";
import styles from "./EngineeringOrbitScene.module.css";

export default function EngineeringOrbitScene() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.signalWash} />
      <Image
        className={styles.artwork}
        src="/engineering/orbit-system-restored.png"
        alt=""
        width={1351}
        height={1164}
        sizes="(max-width: 899px) 92vw, 48vw"
        priority
      />
    </div>
  );
}
