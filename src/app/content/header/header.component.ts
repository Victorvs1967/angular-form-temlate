import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { SignupComponent } from 'src/app/auth/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {

  constructor(private dialog: MatDialog) {}

  login() {
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '350px',
      data: {}
    })
    .afterClosed()
    .subscribe(data => console.log(data));
  }

  signup() {
    this.dialog.open(SignupComponent, {
      width: '500px',
      height: '420px',
      data: {}
    })
    .afterClosed()
    .subscribe(data => console.log(data));
  }

}
