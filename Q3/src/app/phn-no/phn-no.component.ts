import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-phn-no',
  templateUrl: './phn-no.component.html',
  styleUrls: ['./phn-no.component.css']
})
export class PhnNoComponent implements OnInit {

  phnoForm:FormGroup;
  formValid=false
  constructor() { }

  ngOnInit(): void {
    this.phnoForm= new FormGroup({
      'phnos': new FormArray([
        new FormControl(null,[Validators.required, Validators.maxLength(10) , Validators.minLength(10),Validators.pattern('[0-9]*')])
      ])
    });

  }

  addPhno(){
    (<FormArray> this.phnoForm.get('phnos')).push(new FormControl(null,[Validators.required,Validators.maxLength(10),Validators.minLength(10)]))
  }
  getPhnos(){
    return (<FormArray> this.phnoForm.get('phnos')).controls;
  }
  submitForm(){
    const ar= (<FormArray> this.phnoForm.get('phnos')).value;
    console.log(ar);
  }

}
