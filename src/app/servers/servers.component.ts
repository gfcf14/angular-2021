import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreated: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';
  username: String = '';
  servers: String[] = ['TestServer', 'TestServer 2' ];
  showDetails: boolean = true;
  detailsLog: Object[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }

  isEmpty() {
    return !this.username.length;
  }

  resetUsername() {
    this.username = '';
  }

  toggleDetails() {
    this.showDetails = !this.showDetails;
    let dataAction = this.showDetails ? 'shown' : 'hidden';
    this.detailsLog.push({action: dataAction, time: new Date().toString()})
  }

  displayLog(log) {
    const { action, time } = log;
    return `Data was ${action} on ${time}`;
  }

  isFifthOrMore(i) {
    return i > 3 ? '#0000ff' : 'none';
  }

}
