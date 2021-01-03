// Given a string, determine if it is a palidrome, considering only using alphanumeric characters and ignoring cases
// ex: input: "a man, a plan, a canal: Panama"
// output: true
function isPalidrome(input){
  //put cahracters into an array and check if string is same backwards and forwards
  let letters = "";
  let cur;
  for(let i = 0; i < input.length; i++){
    cur = input.charAt(i) 
    if(cur.toLowerCase() != cur.toUpperCase()){
      letters+=cur;
    }
  }
  if(letters == letters.reverse()) return true;

}
// I submitted this before?
// var isPalindrome = function(s) {
let parsed = s.replace(/\W/g, '');
parsed = parsed.toLowerCase();
// console.log(parsed.split('') === parsed.split('').reverse());
return parsed.split('').join() === parsed.split('').reverse().join();
};