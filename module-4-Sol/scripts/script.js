(function (window) {

var names = ["hpnightowl", "John", "Jonny", "", "Yes", "jack", "Eating", "Sugar", "No", "Jack"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'J' || firstLetter == 'j') {
       console.log("Hello" + " " + name);
  } else {
       console.log("Goodbye" + " " + name)
  }
}
})(window);