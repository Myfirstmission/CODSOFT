let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            let evalString = string.replace(/×/g, "*").replace(/÷/g, "/");
            try {
                string = eval(evalString);
            } catch {
                string = "Error";
            }
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});