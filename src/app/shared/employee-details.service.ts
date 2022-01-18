import { Injectable } from '@angular/core';
import { EmployeeDetails } from './employee-details.model';
import { HttpClient } from "@angular/common/http";
import { find, map, Observable, observable, subscribeOn } from 'rxjs';
import { ReactiveFormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import { EmployeeDetailsDashboard } from './EmployeeDetailsDashboard';



@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {
  public get http(): HttpClient {
    return this._http;
  }
  public set http(value: HttpClient) {
    this._http = value;
  }
  

  constructor(private _http: HttpClient, private router: Router) { }
  formData:EmployeeDetails = new EmployeeDetails(); 
  employeeres: EmployeeDetailsDashboard = new EmployeeDetailsDashboard();
  

  postEmployeeDetails(){
    return this.http.post('http://3.108.184.254:8080/api/employees/',this.formData).subscribe(res=>{alert("Registration Successfull"
    )});
  }
  getEmployeeDetails(id=this.formData.techmid){
    return this.http.get<any>('http://3.110.195.34:8082/api/employeeWebUi/'+id)
    .subscribe(data => {this.employeeres = data
 
      if(this.employeeres.role == "Admin"){
        alert("Login Success As Admin");
        console.log(data);
        this.router.navigate(['registration']);
      }
      else if (this.employeeres.role == "Manager"){
        alert("Login Success As Manager")
        this.router.navigate(['employee-dashboard']);
      }
      else{
        alert("Login Success As Employee")
        this.router.navigate(['employee-dashboard']);
      }
    })   
  }
  
}
