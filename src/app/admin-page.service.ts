import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminPage } from './adminpage';

@Injectable({
  providedIn: 'root'
})
export class AdminPageService {

  url = "http://localhost:3000/veiculos";
  constructor(private http: HttpClient) { }

   getAdmin(): Observable<AdminPage[]>{
    return this.http.get<AdminPage[]>(this.url);
   }

   save (adminPage : AdminPage): Observable<AdminPage>{
    return this.http.post<AdminPage>(this.url, adminPage);
   }
   delete (adminPage : AdminPage): Observable<void>{
    return this.http.delete<void>(`${this.url}/${adminPage.id}`);
   }
   update (adminPage : AdminPage): Observable<AdminPage>{
    return this.http.put<AdminPage>(`${this.url}/${adminPage.id}`, adminPage);
   }
   clean (adminPage : AdminPage): Observable<void>{
    return this.http.delete<void>(`${this.url}/${adminPage.id}`);
   }
}
