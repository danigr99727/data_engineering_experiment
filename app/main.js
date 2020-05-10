var form = document.getElementById('optionForm');
var previous_question_button = document.getElementById("previousQ");
var next_question_button = document.getElementById("nextQ");
var submit_button = document.getElementById("submitAnswers");
var username = "John_Smith1999";
document.getElementById('username').innerHTML = username;

function record_choice(question){
    for(var i = 0; i<form.length; i++){
        if (form[i].checked){
            question.choice = form[i].value;
        }
    }
}

class Question{
    constructor(statement, options){
        this.statement = statement;
        this.options = options;
        this.choice =  null;
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
        form.onchange = () => {record_choice(this)};
    }
}

class Quiz{
    constructor(questionArray){
        this.start_time = new Date();
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
            this.questions[this.currentQ-1].render(this.currentQ);
        }
    }

    get answers(){
        var answers = Array(this.length);
        for(var i = 0; i<this.length; i++){
            answers[i] = this.questions[i].choice;
        }
        return answers;    
    }

    get time_taken(){
        var current_time = new Date();
        return current_time - this.start_time;
    }

}

var quiz = new Quiz([
    new Question("What's the capital of Greece?", ["Athens", "Bucharest", "Crete"]),
    new Question("What's the capital of the US", ["New York", "Boston", "Washington DC"]),
    new Question("What's the capital of Japan?", ["Kyoto", "Canberra", "Tokyo"]),
    new Question("What's the capital of Spain?", ["Barcelona", "Milan", "Madrid"]),
    new Question("What's the capital of the UK?", ["Birmingham", "London", "Croydon"])
])

next_question_button.addEventListener("click", () => {quiz.go_to_next_question();});
previous_question_button.addEventListener("click", () => {quiz.go_to_previous_question();});
submit_button.addEventListener("click", () => { 
    window.location.href = './submitted.html';
});
