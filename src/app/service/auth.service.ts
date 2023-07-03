import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiurl='http://localhost:3000/user';
  // apiurl ="http://localhost:9090/save";

  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  GetAllRole(){
    return this.http.get("http://localhost:3000/role");
  }

  RegisterUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

  updateuser(code:any,inputdata : any){
    return this.http.put(this.apiurl+'/'+code , inputdata);
  }

  IsloggedIn(){
    return sessionStorage.getItem('username')!= null;
  }
  GetUserrole(){
    return sessionStorage.getItem('userrole')!= null?sessionStorage.getItem('userrole')?.toString():'';
  }
  
}
