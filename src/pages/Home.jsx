import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
import Form from '../components/Form/Form';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Action from '../components/Action/Action';
import Square from '../components/Square/Square';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Title>Калькулятор Квадрат Пифагора</Title>
      <Form />
      <Square />
      <Hero />
      <Benefits />
      <Action />
    </>
  );
}
