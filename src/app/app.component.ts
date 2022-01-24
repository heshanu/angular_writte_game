import { Component } from '@angular/core';
//const faker:any =require('faker');
//import {faker} from '@types/faker';
import { loremIpsum, LoremIpsum } from "lorem-ipsum";
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'writing_game';
  randomText:string=lorem.generateSentences(5);
}
