import { Component } from '@angular/core';
import { BlogComponent } from './components/blog-component/blog-component';



@Component({
  imports: [BlogComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

}
