import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

 
  constructor(
    private http: HttpClient,
  ) { }

  apiUrl:string = '127.0.0.1::8000/api/';

   getUsers(url:string): Observable<any>  {
      return  this.http.get(this.apiUrl+url,{});
  }
}
