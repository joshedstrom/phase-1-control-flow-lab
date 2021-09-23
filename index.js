function scuberGreetingForFeet(feet){
  let answer;
  if (feet <= 400) {
    answer = 'This one is on me!';
  } else if (feet > 2500) {
    answer = 'No can do.';
  } else if (feet > 2000) {
    answer = 'I will gladly take your thirty bucks.';
  }
  return answer;
}

  function ternaryCheckCity(city){
    if (city === 'NYC') {
      return 'Ok, sounds good.'
    } else {
      return 'No go.'
    }
}


function switchOnCharmFromTip(tip){
  if (tip === 'generous') {
    return 'Thank you so much.'
  } else if (tip === 'not as generous') {
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
}