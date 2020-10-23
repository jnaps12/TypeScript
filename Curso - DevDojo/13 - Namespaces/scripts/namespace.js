//criando um modulo
var Validation;
(function (Validation) {
    let emailRegex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    let urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    class EmailValidator {
        isValid(str) {
            return emailRegex.test(str);
        }
    }
    Validation.EmailValidator = EmailValidator;
    class UrlValidator {
        isVAlid(str) {
            return urlRegex.test(str);
        }
    }
    Validation.UrlValidator = UrlValidator;
})(Validation || (Validation = {}));
//# sourceMappingURL=namespace.js.map