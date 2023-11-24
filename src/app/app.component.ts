import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';

@Component({
  selector: 'app-root,
  standalone: true, 
  imports: [AboutComponent, HomeComponent, AboutItemComponent, AboutHomeComponent],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 9';
}
