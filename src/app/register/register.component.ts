import { Component, OnInit } from '@angular/core';
import  { FormGroup,FormControl, Validators}  from '@angular/forms'
import { RestoService } from '../resto.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert: boolean=false;
  register = new FormGroup({
  
    name : new FormControl('',[Validators.required ,Validators.minLength(2),Validators.maxLength(8)]),
    email:new FormControl('',[Validators.email]),
    password : new FormControl('')
  })
  

  constructor( private resto:RestoService) { }

  ngOnInit(): void {
  }

  collection(){
  
    this.resto.registerUser(this.register.value).subscribe(( result)=>{
    
      this.alert=true
      this.register.reset({})

    })
  }
  closeAlert(){
    this.alert=false
  }

}
