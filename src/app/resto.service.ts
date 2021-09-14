import { Injectable } from '@angular/core';
import {HttpClient, HttpContext, HttpHeaders, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {

  url="http://localhost:3000/restaurants"
  rootUrl ="http://localhost:3000/"
  constructor(private http:HttpClient ) { }


  getList(){
   return  this.http.get(this.url);

  }

  saveResto(data :any){
   return  this.http.post(this.url,data);
  }

  delateResto(id: any){
    return this.http.delete(`${this.url}/${id}`)
      
  }


  getCurrentResto(id: any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateResto(id: any,data: { headers?: HttpHeaders | { [header: string]: string | string[]; } | undefined; context?: HttpContext | undefined; observe?: "body" | undefined; params?: HttpParams | { [param: string]: string | number | boolean | readonly (string | number | boolean)[]; } | undefined; reportProgress?: boolean | undefined; responseType: "arraybuffer"; withCredentials?: boolean | undefined; }){
    return this.http.put(`${this.url}/${id}`,data)
  }
  registerUser(data:any){
    return this.http.post(this.rootUrl+"usersRegister",data)
  }
  loginUser(data:any){
    return this.http.post(this.rootUrl+"userslogin",data)

  }
}
