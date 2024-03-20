export const calculatorPythagorasSquare = date => {
  if (JSON.stringify(date) === '{}') {
    return;
  }

  const RESULT = {};

  const stringDate = `${date.day}${date.month}${date.year}`;

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

  RESULT['selfEsteem'] = (character + energy + interest).length || defaultValue;
  RESULT['work'] = (health + logic + labour).length || defaultValue;
  RESULT['talent'] = (luck + duty + memory).length || defaultValue;
  RESULT['purpose'] = (character + health + luck).length || defaultValue;
  RESULT['family'] = (energy + logic + duty).length || defaultValue;
  RESULT['habits'] = (interest + labour + memory).length || defaultValue;
  RESULT['spirit'] = (character + logic + memory).length || defaultValue;
  RESULT['temperament'] = (interest + logic + luck).length || defaultValue;

  return RESULT;
};

// export const calculatorPythagorasSquare = date => {
//   if (Object.keys(date).length === 0) {
//     return;
//   }

//   const defaultValue = '-';
//   const RESULT = {
//     character: defaultValue,
//     health: defaultValue,
//     luck: defaultValue,
//     energy: defaultValue,
//     logic: defaultValue,
//     duty: defaultValue,
//     interest: defaultValue,
//     labour: defaultValue,
//     memory: defaultValue,
//     selfEsteem: defaultValue,
//     work: defaultValue,
//     talent: defaultValue,
//     purpose: defaultValue,
//     family: defaultValue,
//     habits: defaultValue,
//     spirit: defaultValue,
//     temperament: defaultValue,
//   };

//   const stringDate = `${date.day}${date.month}${date.year}`;

//   const categories = {
//     1: 'character',
//     2: 'energy',
//     3: 'interest',
//     4: 'health',
//     5: 'logic',
//     6: 'labour',
//     7: 'luck',
//     8: 'duty',
//     9: 'memory',
//   };

//   for (let i = 0; i < stringDate.length; i++) {
//     const category = categories[stringDate[i]];
//     if (category) {
//       RESULT[category] += stringDate[i];
//     }
//   }

//   const calculateLength = str =>
//     str.length > 0 ? str.length : defaultValue.length;

//   RESULT.selfEsteem = calculateLength(
//     RESULT.character + RESULT.energy + RESULT.interest
//   );
//   RESULT.work = calculateLength(RESULT.health + RESULT.logic + RESULT.labour);
//   RESULT.talent = calculateLength(RESULT.luck + RESULT.duty + RESULT.memory);
//   RESULT.purpose = calculateLength(
//     RESULT.character + RESULT.health + RESULT.luck
//   );
//   RESULT.family = calculateLength(RESULT.energy + RESULT.logic + RESULT.duty);
//   RESULT.habits = calculateLength(
//     RESULT.interest + RESULT.labour + RESULT.memory
//   );
//   RESULT.spirit = calculateLength(
//     RESULT.character + RESULT.logic + RESULT.memory
//   );
//   RESULT.temperament = calculateLength(
//     RESULT.interest + RESULT.logic + RESULT.luck
//   );

//   return RESULT;
// };

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
