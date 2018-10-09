import { Injectable, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    new Recipe('Mozzarella Sticks', 'Bread stuffed with cheese mozzarella', 'http://www.lahoregrillnj.com/wp-content/uploads/2018/03/item_image_9510398d-7c70-4f98-a0c1-2ee5ebfdf8e8.jpg',
      [
        new Ingredient('Ketchup', 5),
        new Ingredient('Carrots', 3)
      ]
    ),
    new Recipe('Garlic Knots', 'Garlic coating on bread', 'https://toriavey.com/images/2015/11/IMG_6496-2.jpg',
      [
        new Ingredient('Egg', 1),
        new Ingredient('Ranch', 2)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }


}
