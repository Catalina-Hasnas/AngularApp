import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  servers: string[] = [];

  constructor() { }

  addUser() {
    this.servers.push('newUser');
  }

  ngOnInit() {
  }

}
