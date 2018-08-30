import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loading: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loading = false;
  }

  onLoginClick() {
    if (!this.username || !this.password) {
      return;
    }

    this.loading = true;

    this.auth.login(this.username, this.password)
      .subscribe(
        () => this.loading = false,
        () => {
              console.log('Invalid username or password.');
              this.loading = false;
      });
  }
}
