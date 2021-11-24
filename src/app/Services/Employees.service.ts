import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  Employees = [
    {
      id:'01',
      firstName: 'Hussein',
      lastName: 'AL-Ahdal',
      dob:new Date('08 October 1999'),
      gender: true,
      salary: 4000,
      createdDate:new Date('05 October 2011 14:48 UTC'),
      status: true,
    },

    {
      id:'02',
      firstName: 'Hussein',
      lastName: 'AL-Ahdal',
      dob:new Date('08 October 1999 14:48 UTC'),
      gender: false,
      salary: 3500,
      createdDate:new Date('05 October 2011 14:48 UTC'),
      status: false,
    },
  ];
constructor() { }

editEmployee(data:any){

  this.Employees.forEach(el=>{

    if(data.id===el.id){
     Object.assign(el,data)
     console.log(this.Employees)
    }
  })
}

}
