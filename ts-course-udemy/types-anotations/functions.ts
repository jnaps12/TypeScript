//SEMPRE DER TIPO PARA OS PARÂMETROS
const add = (a: number, b: number) => {
  return a + b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

//Making destructuring in TS
const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const weatherLog = ({ date, weather }: { date: Date; weather: string }): void => {
  console.log(`${date} and ${weather}`);
};

weatherLog(todaysWeather);
