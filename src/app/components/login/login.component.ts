import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {ToastService} from '../../services/toast.service';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

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
    private toastService: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.loading = false;

    if (AuthService.getLoggedInToken()) {
      this.router.navigate(['/admin']);
    }
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
            this.route.queryParams.subscribe(params => {
              const url = params['returnUrl'] || '/admin';
              this.router.navigate([url]);
            });
          },
        () => {
            this.toastService.toastError('Invalid username or password.');
            this.loading = false;
          });
  }
}
