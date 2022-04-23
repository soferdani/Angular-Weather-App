import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { StateAppService } from '../state-app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup = new FormGroup({
    username: new FormControl(undefined, [Validators.required]),
    password: new FormControl(undefined, Validators.compose([Validators.required, Validators.minLength(4)])),
  });

  constructor(private authService: AuthService, private stateApp : StateAppService) { }

  ngOnInit(): void {
  }


  onSubmit() {
    if (this.formGroup.valid) {
      this.authService.login(this.formGroup.value.username)
    } else {
      this.stateApp.openSnackBar("One or more fields are invalid");
      console.error('invalid form');
    }
  }


}
