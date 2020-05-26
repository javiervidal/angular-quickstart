import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Joke } from "../models/joke";

@Component({
  selector: "joke",
  templateUrl: "./joke.template.html"
})
export class JokeComponent {
  @Input("joke") joke: Joke;
  @Output() setup = new EventEmitter<Joke>();

  deleteJoke(joke: Joke): void {
    this.setup.emit(joke);
  }
}
