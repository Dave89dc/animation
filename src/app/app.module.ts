import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { AnimationCssComponent } from './components/animation-css/animation-css.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { ButtonResizeDirective } from './directives/button-resize.directive';

@NgModule({
  declarations: [
    AppComponent,
    OpenCloseComponent,
    AnimationCssComponent,
    NavigationMenuComponent,
    ButtonResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
