import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="perfect banking parter"
  accno="account number please"
  acno=""
  pswd=""
  
  //form group
  loginForm=this.fb.group({
    acno: ['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd: ['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    
  })
  

  //dependency injection
  constructor(private router:Router, private ds:DataService,private fb: FormBuilder) { }


  ngOnInit(): void {
  }
  
login(){
 let acno=this.loginForm.value.acno
 let pswd=this.loginForm.value.pswd
 const result=this.ds.login(acno,pswd)
 if(this.loginForm.valid){
   if(result){
   
     alert("login succesfull")
     this.router.navigateByUrl('dashboard')
   }
 }
 else{
   alert("invalid form")
 }
   

}


//template referencing variable
// acnoChange(event:any){
//   this.acno=event.target.value
//   console.log(this.acno);
  

// }

// pswdChange(event:any){
//   this.pswd=event.target.value
//   console.log(this.pswd);
  

// }

// login(a:any,p:any){
//   let acno=a.value
//   let pswd=p.value
//   let db=this.db
//   if(acno in db){
//     if(pswd==db[acno]["password"]){
//       alert("login succesfull")
//     }
//     else{
//       alert("incorrect password")
//     }
//   }
//   else{
//     alert("invalid user")
//   }
 
//  }



}
