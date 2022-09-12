import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //url="http://localhost:3000/posts";
  saveFormData:any;
  constructor(private http:HttpClient) {}
  saveAllData(data:any){
    console.log("save service data: ",data);
    this.saveFormData=data;
    //return this.http.post(this.url,data);
  }
  getAll(){
    //return this.http.get(this.url);
    return this.saveFormData;
  }
  deleteUser(id:any){
    //return this.http.delete(`${this.url}/${id}`);
  }
}
