import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsService } from "src/app/shared/employee-details.service";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {
public employee: any[];
  constructor(private empservice: EmployeeDetailsService ) { }

  ngOnInit(): void {
   
  }



}
