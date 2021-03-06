import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loadedFeature  = 'recipe';

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAVOsDkUhHfWLc77dp3ubmEO6HY9IAvEes',
      authDomain: 'udemy-project-20464.firebaseapp.com'
    });
  }
}
