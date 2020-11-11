import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientModel} from "../../model/ClientModel";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientToUpdate: ClientModel;

  url = "https://travelorganizatorapp.herokuapp.com/client";

  constructor(private httpClient: HttpClient) { }

  public getClients(): Observable<ClientModel[]> {
    return this.httpClient.get<ClientModel[]>(this.url + '/all');
  }

  public addClient(client: ClientModel): Observable<ClientModel> {
    return this.httpClient.post<ClientModel>(this.url, client);
  }

  public updateClient(client: ClientModel, clientId: number): Observable<ClientModel> {
    return this.httpClient.patch<ClientModel>(this.url + '?clientId=' + clientId, client);
  }

  public deleteClient(id: number): Observable<ClientModel> {
    return this.httpClient.delete<ClientModel>(this.url + '?clientId=' + id);
  }

  public setClientToUpdate(client: ClientModel): void {
    this.clientToUpdate = client;
  }
}
