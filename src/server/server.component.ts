import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: [`
    .whiteText {
      color: white;
    }
  `]
})
export class ServerComponent implements OnInit {

  showP: boolean = true
  clickCounter: number[] = []
  incr: number = 0;

  constructor() { }

  toggleP() {
    this.showP = !this.showP
    this.incr++;
    this.clickCounter.push(this.incr);
    console.log(this.clickCounter);
  }

  ngOnInit() {
  }

}
