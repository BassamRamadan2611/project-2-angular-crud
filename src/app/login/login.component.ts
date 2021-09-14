import { Component, OnInit } from '@angular/core';
import  { FormGroup,FormControl, Validators}  from '@angular/forms'
import { RestoService } from '../resto.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean=false;
  login = new FormGroup({
  

    email:new FormControl('',[Validators.email]),
    password : new FormControl('')
  })

  constructor( private resto:RestoService) { }

  ngOnInit(): void {
  }


  collection(){
  
    this.resto.loginUser(this.login.value).subscribe(( result)=>{
    
  this.login.reset({})

    })
  }
 
}
