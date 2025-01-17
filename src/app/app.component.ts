import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor, NgIf, NgStyle} from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})

export class AppComponent {
  title = 'Urna';
}