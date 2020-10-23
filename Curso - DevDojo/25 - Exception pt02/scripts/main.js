function doSomenthingWithString(input) {
    if (input === undefined || input === "") {
        throw new StringNotValidError(`The string ${input} is not valid`);
    }
    return input;
}
//criando uma classe para lidar com erros gerais;
class ApplicationError {
    // message: string;
    constructor(message) {
        this.message = message;
        this.name = "ApplicationError";
        if (typeof console !== undefined) {
            console.log(`Error: ${message}`);
        }
    }
    toString() {
        return `${this.name} : ${this.message}`;
    }
}
//criando própria classe para lidar com erros da classe de cima.
class StringNotValidError extends ApplicationError {
}
try {
    let input = doSomenthingWithString("");
}
catch (err) {
    console.log(`No action`);
}
//# sourceMappingURL=main.js.map