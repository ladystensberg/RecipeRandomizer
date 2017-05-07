var Recipe = function (recipeName, recipeLink, recipeCategory) {
	this.recipeName = recipeName;
	this.recipeLink = recipeLink;
	this.recipeCategory = recipeCategory;
}

var RecipeCollection = function (arr) {
	this.list = arr;
	var recipesCalled = [];

	this.addRecipeToList = function (recipe) {
		this.list.push(recipe);
	};

	this.removeRecipeFromList = function (recipe) {
		this.list.splice(index, 1);
	};

	this.getRandomRecipe = function () {
		while (true) {
			var randomRecipe = Math.floor(Math.random() * this.list.length);
			if (recipesCalled.indexOf(randomRecipe) === -1) {
				recipesCalled.push(randomRecipe);
				return this.list[randomRecipe];
			}
			if (recipesCalled.length === this.list.length) {
				recipesCalled = [];
			}
		}
	};

	this.printRecipe = function (recipe) {
		var recipe = recipe;
		var recipeFormat = '<p class="title truncate">' + '<a href="' + recipe.recipeLink + '">' + recipe.recipeName + '</a>' + '</p>';
		if (recipe.recipeCategory === 'Breakfast') {
			var breakfastDiv = document.getElementById('breakfastDiv');
			breakfastDiv.innerHTML += recipeFormat;
		}
		if (recipe.recipeCategory === 'Lunch') {
			var lunchDiv = document.getElementById('lunchDiv');
			lunchDiv.innerHTML += recipeFormat;
		}
		if (recipe.recipeCategory === 'Dinner') {
			var dinnerDiv = document.getElementById('dinnerDiv');
			dinnerDiv.innerHTML += recipeFormat;
		}
		if (recipe.recipeCategory === 'Snack') {
			var snackDiv = document.getElementById('snackDiv');
			snackDiv.innerHTML += recipeFormat;
		}
		if (recipe.recipeCategory === 'Dessert') {
			var dessertDiv = document.getElementById('dessertDiv');
			dessertDiv.innerHTML += recipeFormat;
		}
		
	};
}

var breakfastRecipes = new RecipeCollection([
	new Recipe(
		"Mexican Scrambled Eggs",
		"https://www.dietdoctor.com/recipes/mexican-scrambled-eggs",
		"Breakfast"
	),
	new Recipe(
		"Coconut Porridge",
		"https://www.dietdoctor.com/recipes/coconut-porridge",
		"Breakfast"
	),
	new Recipe(
		"Western Omelet",
		"https://www.dietdoctor.com/recipes/western-omelet",
		"Breakfast"
	),
	new Recipe(
		"No-Bread Breakfast Sandwich",
		"https://www.dietdoctor.com/recipes/no-bread-breakfast-sandwich",
		"Breakfast"
	),
	new Recipe(
		"Avocado Eggs with Bacon Sails",
		"https://www.dietdoctor.com/recipes/avocado-eggs-with-bacon-sails",
		"Breakfast"
	)
]);

var lunchRecipes = new RecipeCollection([
	new Recipe(
		"Caesar Salad",
		"https://www.dietdoctor.com/recipes/caesar-salad",
		"Lunch"
	),
	new Recipe(
		"Zucchini and Walnut Salad",
		"https://www.dietdoctor.com/recipes/zucchini-walnut-salad",
		"Lunch"
	),
	new Recipe(
		"Low-Carb Tortilla with Ground Beef and Salsa",
		"https://www.dietdoctor.com/recipes/low-carb-tuna-cheese-melt",
		"Lunch"
	),
	new Recipe(
		"Keto Pierogis Filled with Bacon and Mushroom",
		"https://www.dietdoctor.com/recipes/keto-pierogi-filled-with-bacon-and-mushroom",
		"Lunch"
	),
	new Recipe(
		"Creamy Keto Shrimp Tacos",
		"https://www.dietdoctor.com/recipes/creamy-keto-shrimp-tacos",
		"Lunch"
	)
]);

var dinnerRecipes = new RecipeCollection([
	new Recipe(
		"Fried Coconut Salmon with Napa Cabbage",
		"https://www.dietdoctor.com/recipes/fried-coconut-salmon-napa-cabbage",
		"Dinner"
	),
	new Recipe(
		"Pesto Chicken Casserole with Feta Cheese and Olives",
		"https://www.dietdoctor.com/recipes/pesto-chicken-casserole-with-feta-cheese-and-olives",
		"Dinner"
	),
	new Recipe(
		"Asian Cabbage Stir-Fry",
		"https://www.dietdoctor.com/recipes/asian-cabbage-stir-fry",
		"Dinner"
	),
	new Recipe(
		"Oven-Grilled Pork Shoulder Chops with Green Beans and Avocado",
		"https://www.dietdoctor.com/recipes/oven-grilled-pork-shoulder-chops-green-beans-avocado",
		"Dinner"
	),
	new Recipe(
		"Low-Carb Tuna Cheese Melt",
		"https://www.dietdoctor.com/recipes/low-carb-tuna-cheese-melt",
		"Dinner"
	)
]);

var snackRecipes = new RecipeCollection([
	new Recipe(
		"Bacon-Wrapped Halloumi Cheese",
		"https://www.dietdoctor.com/recipes/bacon-wrapped-halloumi-cheese",
		"Snack"
	),
	new Recipe(
		"Keto Quesadillas",
		"https://www.dietdoctor.com/recipes/keto-quesadillas",
		"Snack"
	),
	new Recipe(
		"Baked Mini Bell Peppers",
		"https://www.dietdoctor.com/recipes/baked-mini-bell-peppers",
		"Snack"
	),
	new Recipe(
		"Mummy Dogs",
		"https://www.dietdoctor.com/recipes/mummy-dogs",
		"Snack"
	),
	new Recipe(
		"Low-Carb Sesame Crisp Bread",
		"https://www.dietdoctor.com/recipes/sesame-crispbread",
		"Snack"
	)

]);

var dessertRecipes = new RecipeCollection([
	new Recipe(
		"Classic Chocolate Mousse",
		"https://www.dietdoctor.com/recipes/classic-chocolate-mousse",
		"Dessert"
	),
	new Recipe(
		"Frozen Yogurt Popcicles",
		"https://www.dietdoctor.com/recipes/frozen-yogurt-popsicles",
		"Dessert"
	),
	new Recipe(
		"Dark Chocolate Cake",
		"https://www.dietdoctor.com/recipes/dark-chocolate-cake",
		"Dessert"
	),
	new Recipe(
		"Dairy-free Coconut Cream with Berries",
		"https://www.dietdoctor.com/recipes/dairy-free-coconut-cream-with-berries",
		"Dessert"
	),
	new Recipe(
		"Salty Chocolate Treat",
		"https://www.dietdoctor.com/recipes/salty-chocolate-treat",
		"Dessert"
	)
]);

function getRecipe (arr) {
	var recipe = arr.getRandomRecipe();
	arr.printRecipe(recipe);
}

document.getElementById('loadBreakfast').addEventListener("click", function () {
	getRecipe(breakfastRecipes)
}, false);
document.getElementById('loadLunch').addEventListener("click", function () {
	getRecipe(lunchRecipes)
}, false);
document.getElementById('loadDinner').addEventListener("click", function () {
	getRecipe(dinnerRecipes)
}, false);
document.getElementById('loadSnack').addEventListener("click", function () {
	getRecipe(snackRecipes)
}, false);
document.getElementById('loadDessert').addEventListener("click", function () {
	getRecipe(dessertRecipes)
}, false);