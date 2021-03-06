import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/07603_pierogi_zapiekane_z_kapusta_i_kminem.jpg'
    )
  ];

}
