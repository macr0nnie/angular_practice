import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PdfEmbedsComponent } from "./shared/pdf-embeds/pdf-embeds.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PdfEmbedsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
}
