import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss'],
  animations: [
    trigger('openClose', ([
      state('open', style({
        width: '366px'
      })),
      state('closed', style({
        width: '0px',
        opacity: '0',
        transform: 'translateX(366px)'
      })),
      transition('open => closed', [
        animate('0.3s ease-out')
      ]),
      transition('closed => open', [
        animate('0.4s ease-out')
      ])
    ]))
  ]
})
export class NavigationMenuComponent {

  isOpen: boolean = false;

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

}
