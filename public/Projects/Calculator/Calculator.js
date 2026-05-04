
// Start Calculator 
let container = document.querySelector(".Calculator"),
    input = document.querySelector(".input");

    container.addEventListener('click', e => {
        if (e.target.nodeName === "BUTTON") {
            let number = e.target.textContent.trim();
            switch (number) {
                case "C":
                    FunClear();
                    break;

                case "DEL":
                    FunDelete();
                    break;

                case "=":
                    FunEqual();
                    break;

                default:
                    FunNumber(number);
            }

        } else {
            console.log("Not Button");
        }
    });

    function FunClear () {
        input.textContent = "";
    }

    function FunNumber (num) {
        input.textContent += num;
    }

    function FunDelete () {
        input.textContent = input.textContent.substring(0, input.textContent.length - 1);
    };

    function FunEqual () {
        try {
            let calculation = math.evaluate(input.textContent);
            input.textContent = calculation;
        } catch (error) {
            input.textContent = "Invalid Operation";
            console.error(error);
        }
    };