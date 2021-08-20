import styles from "../../styles/testimonials/client.module.scss";

const Client = ({ image, description, clientName, jobTitle }) => {
  return (
    <div className={styles.client}>
      <img src={image} />
      <p>{description}</p>
      <div className={styles.details}>
        <h2>{clientName}</h2>
        <h4>{jobTitle}</h4>
      </div>
    </div>
  );
};

export default Client;
