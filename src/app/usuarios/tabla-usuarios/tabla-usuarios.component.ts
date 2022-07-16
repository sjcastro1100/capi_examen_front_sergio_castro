import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css'],
  providers: [ApiServiceService]
})
export class TablaUsuariosComponent implements OnInit {

  users:any[] = [];
  constructor(
    private apiService: ApiServiceService
  ) { }

  ngOnInit() {
    this.getUsers();
  }
  getUsers(){
    let data = this.apiService.getUsers('/users').subscribe(response =>{
      console.log(response)
      this.users = response.data;
    });
  }

}
