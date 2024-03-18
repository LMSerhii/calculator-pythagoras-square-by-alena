const RESULT = {
  character: '',
  health: '',
  luck: '',
  energy: '',
  logic: '',
  duty: '',
  interest: '',
  labour: '',
  memory: '',
  selfEsteem: '',
  work: '',
  talent: '',
  purpose: '',
  family: '',
  habits: '',
  spirit: '',
  temperament: '',
};

export const calculatorPythagorasSquare = date => {
  if (JSON.stringify(date) === '{}') {
    return RESULT;
  }
  const result = {
    ...RESULT,
    character: 1,
    health: '',
    luck: '',
    energy: '',
    logic: '',
    duty: '',
    interest: '',
    labour: '',
    memory: '',
    selfEsteem: '',
    work: '',
    talent: '',
    purpose: '',
    family: '',
    habits: '',
    spirit: '',
    temperament: '',
  };
  return result;
};

export const calculatorPythagorasSquareToString = (square, date) => {
  if (JSON.stringify(date) === '{}') {
    return '';
  }
};
