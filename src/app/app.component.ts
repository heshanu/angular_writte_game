import { Component } from '@angular/core';
import { loremIpsum, LoremIpsum } from "lorem-ipsum";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 1,
    min: 1
  },
  wordsPerSentence: {
    max: 1,
    min: 1
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText:string=lorem.generateSentences(5);
  enteredText='';
  /*
  onInput(event:any){
   //var p = (<HTMLInputElement>document.getElementById("i")).value;
    this.enteredText=event.target.value;
    console.log(this.enteredText);
  }*/

  onInput(event:any){
    this.enteredText=event.target.value;
    //console.log(this.enteredText);
  }
}
