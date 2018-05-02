import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../recipes.mode';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recp: Recipe;
  @Input() index: number;
  ngOnInit() {
  }



}
