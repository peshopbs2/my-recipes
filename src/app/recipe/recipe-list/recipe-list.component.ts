import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe("Таратор", "Лятна супа", "https://upload.wikimedia.org/wikipedia/commons/1/19/TaratorBg.jpg"),
    new Recipe("Шопска салата", "Салата с домати, краставици и сирене", "http://balkanskaskara.net/wp-content/uploads/2018/07/02_Shopska.jpg"),
    new Recipe("Странджанка", "Филия с кайма", "https://speedyburger.bg/sburger/uploads/2016/11/strandzhanka.jpg"),
    new Recipe("Таратор", "Лятна супа", "https://upload.wikimedia.org/wikipedia/commons/1/19/TaratorBg.jpg"),
    new Recipe("Шопска салата", "Салата с домати, краставици и сирене", "http://balkanskaskara.net/wp-content/uploads/2018/07/02_Shopska.jpg"),
    new Recipe("Странджанка", "Филия с кайма", "https://speedyburger.bg/sburger/uploads/2016/11/strandzhanka.jpg"),
    new Recipe("Таратор", "Лятна супа", "https://upload.wikimedia.org/wikipedia/commons/1/19/TaratorBg.jpg"),
    new Recipe("Шопска салата", "Салата с домати, краставици и сирене", "http://balkanskaskara.net/wp-content/uploads/2018/07/02_Shopska.jpg"),
    new Recipe("Странджанка", "Филия с кайма", "https://speedyburger.bg/sburger/uploads/2016/11/strandzhanka.jpg"),    new Recipe("Таратор", "Лятна супа", "https://upload.wikimedia.org/wikipedia/commons/1/19/TaratorBg.jpg"),
    new Recipe("Шопска салата", "Салата с домати, краставици и сирене", "http://balkanskaskara.net/wp-content/uploads/2018/07/02_Shopska.jpg"),
    new Recipe("Странджанка", "Филия с кайма", "https://speedyburger.bg/sburger/uploads/2016/11/strandzhanka.jpg")

  ];

  message : String = "баничка";

  constructor() { }

  ngOnInit(): void {
  }

}
