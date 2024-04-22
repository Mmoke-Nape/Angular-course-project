import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'The is simply a test','https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/18/41/0/mlUJhy1T3CFzP1eDMACA_DSC_0003.jpg' )
  ];

}
