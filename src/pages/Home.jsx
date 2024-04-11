import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import BlogConsultation from '../components/BlogConsultation/BlogConsultation';
import SquareSection from '../components/SquareSection/SquareSection';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import Form from '../components/Form/Form';

export default function Home() {
  const [square] = useAutoAnimate();

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BlogConsultation />
      <Hero />
      <div ref={square}>
        <Form />
        <SquareSection />
      </div>
      <Benefits />
    </>
  );
}
