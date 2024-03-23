export const calculatorPythagorasSquare = (date, lifeNumbers) => {
  if (JSON.stringify(date) === '{}') {
    return;
  }

  const RESULT = {};

  const stringDate = `${date.day}${date.month}${date.year}${lifeNumbers.first}${lifeNumbers.second}${lifeNumbers.third}${lifeNumbers.fourth}`;

  let character = '';
  let health = '';
  let luck = '';
  let energy = '';
  let logic = '';
  let duty = '';
  let interest = '';
  let labour = '';
  let memory = '';

  for (let i = 0; i < stringDate.length; i++) {
    if (stringDate[i] === '1') {
      character += stringDate[i];
    }
    if (stringDate[i] === '2') {
      energy += stringDate[i];
    }
    if (stringDate[i] === '3') {
      interest += stringDate[i];
    }
    if (stringDate[i] === '4') {
      health += stringDate[i];
    }
    if (stringDate[i] === '5') {
      logic += stringDate[i];
    }
    if (stringDate[i] === '6') {
      labour += stringDate[i];
    }
    if (stringDate[i] === '7') {
      luck += stringDate[i];
    }
    if (stringDate[i] === '8') {
      duty += stringDate[i];
    }
    if (stringDate[i] === '9') {
      memory += stringDate[i];
    }
  }
  const defaultValue = '-';

  RESULT['character'] = character || defaultValue;
  RESULT['health'] = health || defaultValue;
  RESULT['luck'] = luck || defaultValue;
  RESULT['energy'] = energy || defaultValue;
  RESULT['logic'] = logic || defaultValue;
  RESULT['duty'] = duty || defaultValue;
  RESULT['interest'] = interest || defaultValue;
  RESULT['labour'] = labour || defaultValue;
  RESULT['memory'] = memory || defaultValue;

  RESULT['selfEsteem'] =
    (character + energy + interest).length.toString() || defaultValue;
  RESULT['work'] = (health + logic + labour).length.toString() || defaultValue;
  RESULT['talent'] = (luck + duty + memory).length.toString() || defaultValue;
  RESULT['purpose'] =
    (character + health + luck).length.toString() || defaultValue;
  RESULT['family'] = (energy + logic + duty).length.toString() || defaultValue;
  RESULT['habits'] =
    (interest + labour + memory).length.toString() || defaultValue;
  RESULT['spirit'] =
    (character + logic + memory).length.toString() || defaultValue;
  RESULT['temperament'] =
    (interest + logic + luck).length.toString() || defaultValue;

  return RESULT;
};

const sumPlus = arg => {
  return String(arg)
    .split('')
    .map(Number)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

export const converteDate = date => {
  const result = {};
  const dateArrey = `${date.day}${date.month}${date.year}`;

  const constanta = Number(dateArrey[0]);

  const first = sumPlus(dateArrey);
  const second = sumPlus(first);
  const third = first - 2 * constanta;
  const fourth = sumPlus(third);
  const fifth = sumPlus(second);

  result['first'] = first;
  result['second'] = second;
  result['third'] = third;
  result['fourth'] = fourth;
  result['fifth'] = fifth;

  return result;
};
