import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ClientService} from "../../service/client/client.service";
import {ClientModel} from "../../model/ClientModel";

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.component.html',
  styleUrls: ['./update-client.component.css']
})
export class UpdateClientComponent implements OnInit {
  firstName: string;
  lastName: string;

  clientToUpdate: ClientModel;

  constructor(public dialogReference: MatDialogRef<UpdateClientComponent>,
              private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientToUpdate = this.clientService.clientToUpdate;
  }

  onSubmit() {
    const client: ClientModel = {
      firstName: this.firstName,
      lastName: this.lastName,
    }
    this.clientService.updateClient(client, this.clientToUpdate.id).subscribe();
    this.onClose();
  }

  onClose() {
    this.dialogReference.close();
  }
}
