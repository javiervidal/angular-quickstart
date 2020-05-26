import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
import { Joke } from "../models/joke";

@Component({
  selector: "joke-form",
  templateUrl: "./joke-form.template.html",
  styleUrls: ["./joke-form.style.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class JokeFormComponent {
  @Output() jokeCreated = new EventEmitter<Joke>();

  createJoke(setup: string, punchline: string): void {
    this.jokeCreated.emit(new Joke(setup, punchline));
  }
}
