function scuberGreetingForFeet(rides){
  // Write your code here!
if(rides <= 400){

  return `This one is on me!`;

}

else if (rides > 2000 && rides < 2500){

  return `I will gladly take your thirty bucks.`;

}

else if (rides > 2500){

  return `No can do.`;
}
}

console.log(scuberGreetingForFeet(199))
console.log(scuberGreetingForFeet(2001))
console.log(scuberGreetingForFeet(2501))


function ternaryCheckCity(city){
  // Write your code here!

  return city === 'NYC' ? `Ok, sounds good.` : `No go.`;
  
}

// console.log(ternaryCheckCity('NYC'))
console.log(ternaryCheckCity('Pittsburgh'))

function switchOnCharmFromTip(tip){
  // Write your code here!

  switch(tip){
    case tip = 'generous':
      return 'Thank you so much.';
      case tip = 'not as generous':
        return 'Thank you.'
        default:
          return 'Bye.'
      
  }
}

console.log(switchOnCharmFromTip('generous'))
console.log(switchOnCharmFromTip('not as generous'))
console.log(switchOnCharmFromTip('thanks for everything'))
