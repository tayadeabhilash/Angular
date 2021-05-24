import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
    [new Ingredient('Tomato', 20), new Ingredient('Potato', 30)]),
    new Recipe('B Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
    [new Ingredient('Tomato', 20), new Ingredient('Potato', 30)]),
    new Recipe('C Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
    [new Ingredient('Tomato', 20), new Ingredient('Potato', 30)])
  ];
  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes(){
    return this.recipes.slice();
  }

  addToShoppingList(recipe: Recipe){
      this.shoppingListService.addIngredients(recipe.ingredients);
  }
}
