import Feature from "../components/Feature";
import Pricing from "../components/Pricing";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";
import SeoHead from "../components/SeoHead";
import HowItWorks from "../components/HowItWorks";
import WhyGimus from "../components/WhyGimus";
import Statistics from "../components/Statistics";

export default function Home() {
  return (
    <>
      <SeoHead title='Gimus - Mejora tus habilidades de entrevista con IA' />
      <Layout>
        <Hero />
        <Feature />
        <HowItWorks />
        <Statistics />
        <WhyGimus />
        <Pricing />
      </Layout>
    </>
  );
}
