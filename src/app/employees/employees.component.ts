import { Component, OnInit } from '@angular/core';
import employees from './data/employees.json'; 
import { Employee } from './Employees.model';
@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  title: string = 'Employee Management Solution.....'
  employees:Employee[]=employees;
  filteredEmployees:Employee[]=employees;
  showIcon:boolean = false;
  message:string='';
  private _designationFilter: string =''
  set designationFilter(value:string){
    console.log('setter fired')
    this._designationFilter=value;
    this.filterByDesignation()
  }
  get designationFilter():string{
    return this._designationFilter;
   
  }
  constructor() { }

  ngOnInit(): void {
  }

  toggleIcon(){
    this.showIcon=!this.showIcon;
  }

  filterByDesignation(){
    this.filteredEmployees = this.employees.filter(employee => employee.designation.includes(this.designationFilter))
  }
  onMessageRecived(value: string){
    this.message=value;
  }
}
