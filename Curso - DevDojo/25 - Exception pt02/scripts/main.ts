function doSomenthingWithString(input: string): string {
  if (input === undefined || input === "") {
    throw new StringNotValidError(`The string ${input} is not valid`);
  }
  return input;
}

//criando uma classe para lidar com erros gerais;
class ApplicationError implements Error {
  name: string = "ApplicationError";
  stack?: string | undefined;

  // message: string;
  constructor(public message: string) {
    if (typeof console !== undefined) {
      console.log(`Error: ${message}`);
    }
  }

  toString(): string {
    return `${this.name} : ${this.message}`;
  }
}

//criando própria classe para lidar com erros da classe de cima.
class StringNotValidError extends ApplicationError {}


try{
  let input = doSomenthingWithString("");

}catch(err){
  console.log(`No action`);
}