import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/common/client';
import { ClientService } from 'src/app/services/client.service';


@Component({
  selector: 'app-new-client',
  templateUrl: './new-client.component.html',
  styleUrls: ['./new-client.component.css']
})
export class NewClientComponent implements OnInit {

  @Input() client: Client;
  id: any;
  createMode: boolean;

  constructor(private clientService: ClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    if(this.router.url=="/new-client"){
      this.createMode = true;
      this.client = new Client();
    } else {
      this.createMode = false;
      this.route.paramMap.subscribe(params => {
        this.id = params.get('id');
      });
      this.getClient();
    }
  }

  getClient() {
    this.clientService.getClient(this.id).subscribe(
      data => {
        this.client = data
      }
    )
  }

  listClients(): void{
    this.router.navigateByUrl('');
  }

  createClient(): void {
    this.clientService.createClient(this.client).subscribe(
      data => {
        console.log(data); 
        this.router.navigateByUrl('');
      }
    );
  }

  updateClient(): void {
    this.clientService.updateClient(this.client).subscribe(
      data => {
        console.log(data); 
        this.router.navigateByUrl('');
      }
    );
  }
  
}
