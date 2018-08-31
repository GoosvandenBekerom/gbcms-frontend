import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  items: MenuItem[];

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'Posts', icon: 'fa fa-file-text-o' },
      { label: 'Topics', icon: 'fa fa-tags' },
    ];
  }

  onLogoutClick() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
