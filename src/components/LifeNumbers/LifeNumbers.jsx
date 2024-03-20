import { useSelector } from 'react-redux';
import PathNumber from '../PathNumber/PathNumber';
import WorkNumber from '../WorkNumber/WorkNumber';
import { selectDate } from '../../redux/selectors';
import { converteDate } from '../../helpers/calculator-pythagoras-square';

export default function LifeNumbers() {
  const date = useSelector(selectDate);

  const { first, second, third, fourth, fifth } = converteDate(date);

  return (
    <>
      <WorkNumber first={first} second={second} third={third} fourth={fourth} />
      <PathNumber number={fifth} />
    </>
  );
}
