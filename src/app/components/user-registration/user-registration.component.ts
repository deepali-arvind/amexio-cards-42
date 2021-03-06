import { Component, OnInit ,Input} from '@angular/core';
import { AuthenticationService } from "../../service/authentication.service";
import { UserDetails } from "../../models/user.details.model";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  @Input() showregisterWindow:boolean=false;
  @Input('user-model') userModel: UserDetails;
     userRegistrationGroup: FormGroup;

  constructor(private auth_Service:AuthenticationService,public route: Router, private fb: FormBuilder ) {
    this.userModel= new UserDetails();
   }

  ngOnInit() {
    this.valiadteUserRegistrationForm();
  }

  valiadteUserRegistrationForm() {
      this.userRegistrationGroup = this.fb.group({
        Name: ['', [Validators.required]],      
        Phone: ['', [Validators.required, Validators.minLength(10)]],
        Password: ['', [Validators.required]]
      
      });
    }
  onRegister(){
    console.log('userModel',this.userModel);
   this.auth_Service.showOTPWindow=true;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=false;
  this.auth_Service.showSignInWindow=false;
  
  }
onCancel(){

 this.route.navigate(['/app-buy']);
}

onBack(){
this.auth_Service.showOTPWindow=false;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=true;
  this.auth_Service.showSignInWindow=false;
}
}
