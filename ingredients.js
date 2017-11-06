var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var repeat = 0
while (repeat < ingredients.length) {
  console.log(ingredients[repeat]);
  repeat++
}

// Write a for loop that prints out the contents of ingredients:
for (var repeatFor = 0; repeatFor < ingredients.length; repeatFor++) {
  console.log(ingredients[repeatFor]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var repeatBack = ingredients.length - 1; repeatBack >= 0; repeatBack--) {
  console.log(ingredients[repeatBack]);
}