'use strict'

  var answers = [];
  var expectedAnswers = ['1', '2', '3', '4', '5', '6', '7'];

  var prompts = ['what is 2 - 1?', 'what is 1+1?', 'what is 2+1?', 'what is 2 + 2?', 'what is 2 + 3?', 'what is 3 + 3', 'what is 4 + 3?'];

  var iterations = 0;

  var answer;

  while (iterations < 7) {
      answer = prompt(prompts[iterations])
      answers.push(answer)

      if (answers[iterations] === expectedAnswers[iterations]){
        iterations = 7
      }
      iterations++;

  }

    let expectedAnswers =['1','2','3','4','5','6','7'];

    let expectedAnswers;


    while(false) {
      number = prompt('What is the exact answer?')

      if ('number < expectedAnswers'){
          alert('you guessed too low!')
      } else if ('number > expectedAnswers'){
        alert('you guessed too high!')
      }else{
       alert('correct!')
       break;
      }
    }
