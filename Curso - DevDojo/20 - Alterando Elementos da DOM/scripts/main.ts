let divMain = <HTMLDivElement> document.getElementById("main");
divMain.innerHTML = "<span> Irineu </span>";
divMain.textContent  = "Irineu doidão";

let newDiv = document.createElement("div");
newDiv.textContent = "Dj Azeitonaaa";

divMain.appendChild(newDiv); //o appendChild sempre adiviona na ultima posição, ele śempre p ultimo filho;
divMain.insertBefore(newDiv, divMain.firstChild);