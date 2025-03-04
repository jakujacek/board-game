import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { BoardComponent } from "./components/board/board.component";

@Component({
  selector: "app-root",
  imports: [RouterOutlet, BoardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "board-game";
}
