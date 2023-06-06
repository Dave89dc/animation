import { Component, HostBinding } from '@angular/core';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [trigger('showHide', [
    state('show', style({
      left: '500px',
      opacity: '1'
    })),
    state('hide', style({
      left: '-300px',
      opacity: '0'
    })),
    transition('show => hide', [
      animate('1s')
    ]),
    transition('hide => show', [
      animate('1s')
    ])
  ])]
})
export class AppComponent {
  title = 'animation';
  isShow = true;
  isShow2 = true;

  showHide(){
    this.isShow = !this.isShow;
  }

  stoCazzo(){
    //document.getElementById('porcapaletta')?.classList.toggle('staminchiaDeAnimate');
    if(this.isShow2){
      document.getElementById('porcapaletta')?.classList.add('staminchiaDeAnimate');
      document.getElementById('porcapaletta')?.classList.remove('staminchiaDeAnimate2');
    } else{
      document.getElementById('porcapaletta')?.classList.add('staminchiaDeAnimate2');
      document.getElementById('porcapaletta')?.classList.remove('staminchiaDeAnimate');
    }
    this.isShow2 = !this.isShow2;
  }

}
