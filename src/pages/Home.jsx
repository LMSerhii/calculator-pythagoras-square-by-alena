import { Helmet } from 'react-helmet-async';
import Title from '../components/Title/Title';
import Form from '../components/Form/Form';
import Hero from '../components/Hero/Hero';
import Benefits from '../components/Benefits/Benefits';
import Action from '../components/Action/Action';
import Square from '../components/Square/Square';
import { useSelector } from 'react-redux';
import { selectIsShow } from '../redux/selectors';
import LifeNumbers from '../components/LifeNumbers/LifeNumbers';
import StringResults from '../components/StringResults/StringResults';
import BlogConsultation from '../components/BlogConsultation/BlogConsultation';

export default function Home() {
  const isShow = useSelector(selectIsShow);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <BlogConsultation />
      <Title>Калькулятор Квадрат Пифагора</Title>
      <Form />
      {isShow && <LifeNumbers />}
      {isShow && <Square />}
      {isShow && <StringResults />}
      <Hero />
      <Benefits />
      <Action />
    </>
  );
}
