import styles from "../../styles/examples/singleExample.module.scss";

const SingleExample = ({ image }) => {
  return (
    <div className={styles.exampleContainer}>
      <img src={image} />
    </div>
  );
};

export default SingleExample;
