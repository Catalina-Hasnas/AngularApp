import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [`
    .disabled {
      opacity: 0.5;
    }
  `]
})
export class AppComponent {
  userName = '';

  // constructor(){
  //   this.userName = '';
  // }

  getColor() {
    return this.userName !== '' ? 'blue' : 'green';
  }
  
}
