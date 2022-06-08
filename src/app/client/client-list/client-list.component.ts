import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { Client } from 'src/app/common/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.listClients();
  }

  listClients() {
    this.clientService.getClientList().subscribe(
      data => {
        this.clients = data
      }
    )
  }

  deleteClient(client: Client){
    this.clientService.deleteClient(client.id).subscribe(data => {
      console.log(data); 
      this.listClients();
    });
  }

  viewClient(client: Client): void{
    this.router.navigateByUrl('client/' + client.id);
  }

  createClient(): void{
    this.router.navigateByUrl('new-client');
  }
}
