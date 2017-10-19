'use strict'

  function question(start, expected, question) {

    var answer;

    while (start < 7) {
      answer = prompt(question);
      start++;

      if (parseInt(answer) === parseInt(expected)) {
        break;
      }
    }
  }
