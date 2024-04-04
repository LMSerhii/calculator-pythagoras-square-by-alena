import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import BlogConsultation from '../components/BlogConsultation/BlogConsultation';
import SquareSection from '../components/SquareSection/SquareSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BlogConsultation />
      <Hero />
      <SquareSection />
      <Benefits />
    </>
  );
}
