import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



export interface UserRespoce{
  Id:number
  Name:string
  Age:number
  Mobile:number
  Email:string
  City:string
  State:string
  Country:string

}


@Injectable({
  providedIn: 'root'
})
export class HealthServiceService {

  constructor(private httpClient: HttpClient){}
  

  getAllData(){
    return this.httpClient.get("https://localhost:44308/api/health");
  }

  getDataById(id:number){
    return this.httpClient.get("https://localhost:44308/api/health/"+id)
  }

  saveData(inputdata :object){
    return this.httpClient.post("https://localhost:44308/api/health/",inputdata);
  }

  deleteData(id:number){
    return this.httpClient.delete("https://localhost:44308/api/health/"+id);
  } 



  
}


