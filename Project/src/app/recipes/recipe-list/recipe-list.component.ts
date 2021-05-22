import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d'),
    new Recipe('B Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d'),
    new Recipe('C Test Recipe', 'This is a test', 'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d')
  ];
  @Output() recipeEvent = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick(recipe: Recipe){
    this.recipeEvent.emit(recipe);
  }
}
