import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutItemComponent } from './about/about-item/about-item.component';
import { AboutHomeComponent } from './about/about-home/about-home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    })
  ],
  declarations: [AppComponent, AboutComponent, HomeComponent, AboutItemComponent, AboutHomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
