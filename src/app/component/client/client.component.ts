import { Component, OnInit } from '@angular/core';
import {ClientModel} from "../../model/ClientModel";
import {ClientService} from "../../service/client/client.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {UpdateClientComponent} from "../update-client/update-client.component";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  firstName: string;
  lastName: string;
  passport: string;

  clients: ClientModel[];

  constructor(private clientService: ClientService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(): void{
    console.log("getclients!");
    this.clientService.getClients()
      .subscribe(clients => this.clients = clients);
  }

  onSubmit() {
    const client: ClientModel = {
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

  deleteClient(client: ClientModel, index: number) {
    this.clientService.deleteClient(client.id).subscribe(client => this.clients.splice(index, 1));
  }

  edit(client: ClientModel) {
    this.clientService.setClientToUpdate(client);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this.matDialog.open(UpdateClientComponent,dialogConfig);
  }
}
