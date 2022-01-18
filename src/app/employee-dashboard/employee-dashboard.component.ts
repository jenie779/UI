import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { EmployeeDetails } from '../shared/employee-details.model';

import { EmployeeDetailsService } from '../shared/employee-details.service';
import { EmployeeDetailsDashboard } from '../shared/EmployeeDetailsDashboard';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  
  public employee = this.empservice.employeeres;
  constructor(private empservice: EmployeeDetailsService,private http: HttpClient, private router: Router ) {    
  }
  ngOnInit(): void {  
  }  
}
 


