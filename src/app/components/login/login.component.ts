import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  loading: boolean;

  constructor(
    private auth: AuthService,
    private toastService: ToastService
  ) {}

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
        () => {
            this.toastService.toastSuccess('Login successful');
            this.loading = false;
          },
        () => {
            this.toastService.toastError('Invalid username or password.');
            this.loading = false;
          });
  }
}
