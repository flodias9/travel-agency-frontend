import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Client } from 'src/app/common/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8080/client';
  
  private headers = { 'content-type': 'application/json'}  

  constructor(private httpClient: HttpClient) { }

  getClient(id: any): Observable<Client> {
    return this.httpClient.get<Client>(this.baseUrl + "/" + id).pipe();
  }

  getClientList(): Observable<Client[]> {
    return this.httpClient.get<Client[]>(this.baseUrl).pipe();
  }

  deleteClient(id: number) {
    let endPoints = "/" + id;
    return this.httpClient.delete(this.baseUrl + endPoints).pipe();
  }

  createClient(client: Client) { 
    const body = JSON.stringify(client);
    return this.httpClient.post(this.baseUrl, body, {'headers':this.headers});
  }

  updateClient(client: Client) { 
    const body = JSON.stringify(client);
    return this.httpClient.put(this.baseUrl, body, {'headers':this.headers});
  }

  /*
  getClientList(): Observable<Client[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.clients)
    )
  }
  */
}

/*interface GetResponse {
    clients: Client[];
}*/
