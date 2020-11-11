import { Component, OnInit } from '@angular/core';
import {Client} from "../../model/Client";
import {ClientService} from "../../service/client/client.service";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  firstName: string;
  lastName: string;
  passport: string;

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void{
    console.log("getclients!");
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  onSubmit() {
    const client: Client = {
      firstName: this.firstName,
      lastName: this.lastName,
      passportNumber: this.passport
    }
    this.clientService.addClient(client).subscribe(response => {
      this.clients.push(response);
    });
    this.firstName = '';
    this.lastName = '';
    this.passport = '';
  }

  deleteClient(client: Client, index: number) {
    this.clientService.deleteClient(client.id).subscribe(client => this.clients.splice(index, 1));
  }
}
