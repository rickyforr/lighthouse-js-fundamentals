var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var a = 0
while (a < ingredients.length) {
  console.log(ingredients[a]);
  a++;
}
// Write a for loop that prints out the contents of ingredients:
for (var a = 0; a < ingredients.length; a++) {
  console.log(ingredients[a]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var a = (ingredients.length-1); a >= 0; a--) {
  console.log(ingredients[a])
}