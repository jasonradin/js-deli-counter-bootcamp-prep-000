var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeli.push(katzDeliLine, name); 
  var position = katzDeli.length; 
  return "Welcome, " + name + ". You are number " position + "in line."
}