import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
 private baseUrl = 'http://localhost:8000/api/auth';
  constructor(private http:HttpClient) { }
 login(data: any){
   return  this.http.post(`${this.baseUrl}/login`,data)
 }
 logout(data: any){
  return  this.http.post(`${this.baseUrl}/logout`,data)
}
}

