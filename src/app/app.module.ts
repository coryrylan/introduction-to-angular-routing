import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';
import { AppComponent } from './app.component';


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
