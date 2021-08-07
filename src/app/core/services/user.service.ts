import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserList } from '../interfaces/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
 
  getUserList(): Observable<UserList[]> {
      return this.http.get<UserList[]>(`https://reqres.in/api/users`).pipe(
        map((response:any)=>response.data),
       );
  }
}
