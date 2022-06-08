import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../common/client';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client: Client;
  id: any;

  constructor(private route: ActivatedRoute, private router: Router, private clientService: ClientService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.getClient();

  }

  getClient() {
    this.clientService.getClient(this.id).subscribe(
      data => {
        this.client = data
      }
    )
  }

  updateClient(): void{
    this.router.navigateByUrl('update-client/' + this.id);
  }

  listClients(): void{
    this.router.navigateByUrl('');
  }

}
