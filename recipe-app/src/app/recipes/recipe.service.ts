import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel', 
      'A super-tasty Schnitzel!', 
      'http://cooknshare.com/wp-content/uploads/2015/07/chickensnit.jpg',
      [
        new Ingredient('boneless skinless chicken breasts', 2),
        new Ingredient('cup flour', .5),
        new Ingredient('large eggs', 2)
      ]),
    new Recipe(
      'Big Fat Cheeseburger', 
      'What else do you need to say?', 
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg',
      [
        new Ingredient('pound ground beef chuck', 1),
        new Ingredient('slices American cheese', 1),
        new Ingredient('hamburger buns', 1)
      ])
  ];
  
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
