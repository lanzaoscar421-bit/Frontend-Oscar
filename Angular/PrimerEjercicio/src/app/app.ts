import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponenteHijoComponents } from './components/componente-hijo/componente-hijo.components';
import { ComponenteHijo3Components } from './components/componente-hijo3/componente-hijo3.components';
import { ComponenteHijo2Components } from './components/componente-hijo2/componente-hijo2.components';
import { BotoneraComponents } from './components/botonera/botonera.components';

@Component({
  imports: [ComponenteHijoComponents, ComponenteHijo3Components, ComponenteHijo2Components,BotoneraComponents,],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PrimerEjercicio');
}
