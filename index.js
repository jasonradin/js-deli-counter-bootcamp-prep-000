var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person); 
  var position = katzDeliLine.length; 
  return "Welcome, " + person + ". You are number " + position + " in line."
}

function nowServing() {
  var i = 0; 
  while(i < katzDeliLine.length) {
    i += 1; 
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  else return "Currently serving " + katzDeliLine.shift() + "."
}
