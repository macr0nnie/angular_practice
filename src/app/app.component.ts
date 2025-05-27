import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PdfEmbedsComponent } from "./shared/pdf-embeds/pdf-embeds.component";
import { MenuComponent } from "./components/menu/menu.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PdfEmbedsComponent, MenuComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_practice';
}
