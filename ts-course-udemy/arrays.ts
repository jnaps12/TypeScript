const carMakers: string[] = ['ford', 'toyota', 'fiat'];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['Corola', 'Etios'], ['Toro']];

const myCar = carMakers.pop();

console.log(myCar);

carMakers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];

//Tuples
const drink1 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};
type Drink = [string, boolean, number];

const pepsi: Drink = ['black', true, 40];
const tea: Drink = ['brown', false, 0]
