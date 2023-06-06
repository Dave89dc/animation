import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger
  ]
})
export class NavigationMenuComponent {

  isOpen: boolean = true;

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

}
