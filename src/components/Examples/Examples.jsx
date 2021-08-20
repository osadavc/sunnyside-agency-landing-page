import styles from "../../styles/examples/example.module.scss";
import SingleExample from "./SingleExample";

const Examples = () => {
  return (
    <div className={styles.examples}>
      <SingleExample image="/images/desktop/image-gallery-milkbottles.jpg" />

      <SingleExample image="/images/desktop/image-gallery-orange.jpg" />

      <SingleExample image="/images/desktop/image-gallery-cone.jpg" />

      <SingleExample image="/images/desktop/image-gallery-sugarcubes.jpg" />
    </div>
  );
};

export default Examples;
