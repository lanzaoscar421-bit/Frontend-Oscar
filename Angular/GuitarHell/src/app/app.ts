import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabezeraComponents } from './components/cabezera/cabezera.components';

@Component({
  imports: [RouterOutlet, CabezeraComponents],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('GuitarHell');
}
