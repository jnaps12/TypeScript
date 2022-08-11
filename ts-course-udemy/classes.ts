class Vehicle {
  constructor(public color: string) {}

  /**
   * o código abaixo faz o mesmo que o de cima
   * color: string;
   * constructor(color:string){
   *  this.color = color;
   * }
   */

  honk(): void {
    console.log('beep beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle {

  constructor(public wheels: number, color: string){
    super(color);
  }
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void{
    this.drive();
  }
}

const car = new Car(4, 'red');
car.startDrivingProcess();




