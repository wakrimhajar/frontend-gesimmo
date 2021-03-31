import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class JarwisService {
 private baseUrl = 'http://localhost:8000/api/auth';

 
  constructor(private http:HttpClient, 
    private Token :TokenService ) { }
 
 login(data: any){
   return  this.http.post(`${this.baseUrl}/login`,data)
   
 }
 logout(data: any){
  return  this.http.post(`${this.baseUrl}/logout`,data)
}
 addlocataire(data: any){
  return  this.http.post(`${this.baseUrl}/addLocP`,data)
 }
}

