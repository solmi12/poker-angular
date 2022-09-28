import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vote } from '../model/vote';



const baseUrl = 'http://localhost:4000/api/vote/';

@Injectable({
  providedIn: 'root'
})
export class VotsService {
  

  constructor(private http: HttpClient) { }
  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }  
  getAll(): Observable<Vote[]> {
    return this.http.get<Vote[]>(baseUrl);
  }
}
