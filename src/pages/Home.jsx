import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Action from '../components/Action/Action';
import BlogConsultation from '../components/BlogConsultation/BlogConsultation';
import SquareSection from '../components/SquareSection/SquareSection';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BlogConsultation />
      <SquareSection />
      <Hero />
      <Benefits />
      <Action />
    </>
  );
}
