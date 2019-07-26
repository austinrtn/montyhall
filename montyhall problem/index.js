function name(){
  return document.getElementById("name").value;
}
var cons = document.getElementById("console");
var itterations = document.getElementById("itterations");
var action = document.getElementById("action");

var totalItterations = 0;
var correct = 0;
var incorrect = 0;
var timesSwitched = 0;
var timesStatic = 0;

function percentage(){
  let per = (correct/totalItterations) *100;
  return per;
}


function run(){
  var string = "";
  totalItterations += +itterations.value;
  for (var i = 0; i < itterations.value; i++) {
    string += round();
  }

  string += "Total Itterations: " + totalItterations +
   "\nCorrect: " + correct + "\nIncorrect: " + incorrect +
  "\nTimes Switched: " + timesSwitched + "\nTimes not switched: " +
  timesStatic +"\nPercent Correct: " + percentage() + "%";

  cons.innerHTML = string;
}

function select(){
  return Math.floor((Math.random() * 3) + 1);
}

function round(){
  var act = 0;
  let correctAns = select();
  let guess = select();
  let guess1 = guess;
  let revealed = select();

  while(correctAns === revealed || revealed === guess)
    revealed = select();

  if(action.value === "random")
    act = Math.floor((Math.random() * 2));

  if(act === 1 || action.value ==="switch"){
    timesSwitched++;
    guess = select();
    while(guess === revealed || guess === guess1)
      guess = select();
    act = name() + " switched his guess to " + guess + ". ";
  }

  else{
    timesStatic++;
    act = name() + " Kept their first choice " + guess + ". ";
  }

    var message = name() + " guessed door " + guess1 + "." + " Door "
    + revealed +" was revealed to be a goat. " + act + "The correct door is " +
    correctAns + ". ";

    if(guess === correctAns){
      correct++;
      message += name() + " guessed correctly.";
    } else{
      incorrect++;
      message += name() + " guessed incorrectly.";
    }

    message +="\n\n";

  return message;;
}

function reset(){
  totalItterations = 0;
  correct = 0;
  incorrect = 0;
  timesSwitched = 0;
  timesStatic = 0;
  cons.innerHTML = "";
}
