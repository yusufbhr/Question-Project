var Question = {
    Elements: {
        previousQuestion: document.getElementById("previous"),
        radioButton1: document.getElementById("radioButton1"),
        radioButton2: document.getElementById("radioButton2"),
    },

    Actions: {
        init: () => {
            Question.Actions.changeLocale();
        },
        changeLocale: () => {
            let x = localStorage.getItem("Quesiton" + question);
            let answer = (x === "true");
            if (answer) {
                if (answer === true) {
                    Question.Elements.radioButton1.checked = true;
                }
            }
            let answer2 = (x === "false");
            if (answer2) {
                if (answer2 === true) {
                    Question.Elements.radioButton2.checked = true;
                }
            }
        },
        trueButton: () => {
            localStorage.setItem("Quesiton" + question, "true");
            Question.Elements.radioButton2.checked = "";
        },
        falseButton: () => {
            localStorage.setItem("Quesiton" + question, "false");
            Question.Elements.radioButton1.checked = "";

        },
        nextQuestion: () => {

            window.location.href = "Question" + (question + 1) + ".html";
        },
        previousQuestion: () => {
            window.location.href = "Question" + (question - 1) + ".html";
        },
    }
}
Question.Actions.init();