import Head from "next/head";

import Banner from "../components/Banner";
import TwoColumn from "../components/TwoColumn";
import TwoColumnImages from "../components/TwoColumnImages";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer";
import Examples from "../components/Examples/Examples";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sunnyside Agency</title>
      </Head>

      <div>
        <Banner />

        <TwoColumn
          title="Transform your brand"
          description="We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you."
          image="/images/desktop/image-transform.jpg"
        />

        <TwoColumn
          title="Stand Out To The Right Audience"
          description="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
          image="/images/desktop/image-stand-out.jpg"
          reverse={true}
        />

        <TwoColumnImages />

        <Testimonials />

        <Examples />

        <Footer />
      </div>
    </div>
  );
}
