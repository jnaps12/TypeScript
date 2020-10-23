class ClickHandler {
    constructor() {
        let main = document.getElementById("main");
        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        if (main !== null && btn1 !== null && btn2 !== null) {
            main.addEventListener("click", ClickHandler.alertEventMain);
            btn1.addEventListener("click", ClickHandler.alertEventBtn1, true);
            btn2.addEventListener("click", ClickHandler.alertEventBtn2, true);
        }
    }
    static alertEventMain(event) {
        alert("clickced over main");
        //event.stopPropagation(); //parando o capturing ou o bubbling.
    }
    static alertEventBtn1() {
        alert("clickced over btn1");
    }
    static alertEventBtn2() {
        alert("clickced over btn2");
    }
}
const clickHandler = new ClickHandler();
//# sourceMappingURL=event.js.map