import EmailValidator = Validation.EmailValidator;
import UrlValidator = Validation.UrlValidator;
let emailExamples = ["lalal@", "irineu@lalla", "pedinmatador@gmail.com"];
let urlExmaples = ["google.com", "lalala.com.br", "irineu"];

emailExamples.forEach(email => {
  console.log(`${email} ${new EmailValidator().isValid(email)}`)
});

urlExmaples.forEach(url => {
  console.log(`${url} ${new UrlValidator().isVAlid(url)}`)
});
