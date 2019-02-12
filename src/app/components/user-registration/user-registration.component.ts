import { Component, OnInit ,Input} from '@angular/core';
import { AuthenticationService } from "../../service/authentication.service";
import { UserDetails } from "../../models/user.details.model";

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  @Input() showregisterWindow:boolean=false;
  @Input('user-model') userModel: UserDetails;

  constructor(private auth_Service:AuthenticationService) { }

  ngOnInit() {
  }
  onRegister(){
    console.log('userModel',this.userModel);
   this.auth_Service.showOTPWindow=true;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=false;
  this.auth_Service.showSignInWindow=false;
  
  }
onCancel(){
 
}

onBack(){
this.auth_Service.showOTPWindow=false;
  this.auth_Service.showregisterWindow=false;
  this.auth_Service.showLogin=true;
  this.auth_Service.showSignInWindow=false;
}
}