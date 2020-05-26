import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  ElementRef,
  ContentChild,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { Joke } from "../models/joke";
import { JokeComponent } from "../joke/joke.component";

@Component({
  selector: "joke-list",
  templateUrl: "./joke-list.template.html"
})
export class JokeListComponent implements AfterContentInit, AfterViewInit {
  jokes: Joke[];

  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  @ViewChild("myHeader") headerEl: ElementRef;
  @ContentChild(JokeComponent) jokeContentChild: JokeComponent;

  constructor() {
    this.jokes = [
      new Joke(
        "What did the cheese say when it looked in the mirror?",
        "Hello-Me (Halloumi)"
      ),
      new Joke(
        "What kind of cheese do you use to disguise a small horse?",
        "Mask-a-pony (Mascarpone)"
      )
    ];
  }

  ngAfterViewInit() {
    console.log(`ngAfterViewInit - jokeViewChild is ${this.jokeViewChild}`);
    console.log(
      `ngAfterViewInit - jokeViewChildren is ${this.jokeViewChildren.toArray()}`
    );
    console.log(
      `ngAfterViewInit - headerEl is ${this.headerEl.nativeElement.textContent}`
    );
    this.headerEl.nativeElement.textContent = "Best Joke Machine";
  }

  ngAfterContentInit() {
    console.log(
      `ngAfterContentInit - jokeContentChild is ${
        this.jokeContentChild.joke.setup
      }`
    );
  }

  addJoke(joke: Joke): void {
    this.jokes.unshift(joke);
  }

  deleteJoke(joke: Joke): void {
    const index = this.jokes.findIndex(j => joke === j);
    if (index > -1) {
      this.jokes.splice(index, 1);
    }
  }
}
