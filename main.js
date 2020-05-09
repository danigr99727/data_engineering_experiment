var form = document.getElementById('optionForm');
var previous_question_button = document.getElementById("previousQ");
var next_question_button = document.getElementById("nextQ");
var submit_button = document.getElementById("submitAnswers");

class Question{
    constructor(statement, options){
        this.statement = statement;
        this.options = options;
        this.choice =  null
    }
    render(currentQuestion){
        document.getElementById('statement').innerHTML = "Q" + String(currentQuestion) + ": " + this.statement;
        document.getElementById('opt1').innerHTML = this.options[0];
        document.getElementById('opt2').innerHTML = this.options[1];
        document.getElementById('opt3').innerHTML = this.options[2];
        for(var i = 0; i<form.length; i++){
            if (this.choice==i+1){
                form[i].checked = true;
            }
            else{
                form[i].checked = false;
            }
        }
    }
    record_choice(){
        for(var i = 0; i<form.length; i++){
            if (form[i].checked){
                this.choice = form[i].value;
            }
        }
    }
}

class Quiz{
    constructor(questionArray){
        this.questions = questionArray;
        this.length = questionArray.length;
        this.currentQ = 1;
        this.questions[this.currentQ-1].render(this.currentQ);
    }

    go_to_previous_question(){
        if (this.currentQ == 2){
            previous_question_button.disabled = true;
        }
        else if(this.currentQ == this.length){
            next_question_button.disabled = false;
        }
        if(this.currentQ>1){
            this.currentQ --;
            this.questions[this.currentQ].record_choice();
            this.questions[this.currentQ-1].render(this.currentQ);
        }
    }

    go_to_next_question(){
        if(this.currentQ == this.length-1){
            next_question_button.disabled = true;
        }
        else if(this.currentQ == 1){
            previous_question_button.disabled = false;
        }
        if (this.currentQ<this.length){
            this.currentQ++;
            this.questions[this.currentQ-2].record_choice();
            this.questions[this.currentQ-1].render(this.currentQ);
        }
    }
    get answers(){
        return this.extractAnswers;
    }
    extractAnswers(){
        var answers = Array(this.length);
        for(var i = 0; i<this.length; i++){
            answers[i] = questions[i].choice;
        }
    }
}

var quiz = new Quiz([
    new Question("Lorem Ipsum?", ["Option 1.1", "Option 1.2", "Option 1.3"]),
    new Question("How u?", ["Option 2.1", "Option 2.2", "Option 2.3"]),
    new Question("Where u from?", ["Option 3.1", "Option 3.2", "Option 3.3"])
])

next_question_button.addEventListener("click", () => {quiz.go_to_next_question();});
previous_question_button.addEventListener("click", () => {quiz.go_to_previous_question();});
submit_button.addEventListener("click", () => {window.location.href = './submitted.html';});

