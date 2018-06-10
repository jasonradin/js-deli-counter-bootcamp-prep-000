var katzDeliLine = [];

function takeANumber(katzDeliLine, person) {
  katzDeliLine.push(person); 
  var position = katzDeliLine.length; 
  return "Welcome, " + person + ". You are number " + position + " in line."
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    let current = katzDeliLine[0]; 
    katzDeliLine.shift(); 
    return `Currently serving ${current}.`
  }
  else return "There is nobody waiting to be served!"
}

function currentLine(katzDeliLine) {
  
}