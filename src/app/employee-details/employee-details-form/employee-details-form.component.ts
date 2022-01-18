import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployeeDetailsService } from 'src/app/shared/employee-details.service';

@Component({
  selector: 'app-employee-details-form',
  templateUrl: './employee-details-form.component.html',
  styles: [
  ]
})
export class EmployeeDetailsFormComponent implements OnInit {
  formData: any;

  constructor(public service:EmployeeDetailsService) { }

  ngOnInit(): void {
  }
  onSubmit(registrationform:NgForm){
    this.service.postEmployeeDetails();
    registrationform.reset();

  }

}
