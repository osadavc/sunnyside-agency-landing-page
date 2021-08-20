import styles from "../../styles/testimonials/testimonials.module.scss";
import Client from "./Client";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <h1>Client Testimonials</h1>

      <div className={styles.clients}>
        <Client
          image="/images/image-emily.jpg"
          description="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          clientName="Emily R."
          jobTitle="Marketing Director"
        />

        <Client
          image="/images/image-thomas.jpg"
          description="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          clientName="Thomas S."
          jobTitle="Chief Operating Officer"
        />

        <Client
          image="/images/image-jennie.jpg"
          description="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          clientName="Emily R."
          jobTitle="Business Owner"
        />
      </div>
    </div>
  );
};

export default Testimonials;
