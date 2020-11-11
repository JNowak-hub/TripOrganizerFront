import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../../model/Client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url = "https://travelorganizatorapp.herokuapp.com/client";

  constructor(private httpClient: HttpClient) { }

  public getClients(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.url + '/all');
  }

  public addClient(client: Client): Observable<Client> {
    return this.httpClient.post<Client>(this.url, client);
  }

  public updateClient(client: Client): Observable<Client> {
    return this.httpClient.patch<Client>(this.url, client);
  }

  public deleteClient(id: number): Observable<Client> {
    return this.httpClient.delete<Client>(this.url + '?clientId=' + id);
  }
}
