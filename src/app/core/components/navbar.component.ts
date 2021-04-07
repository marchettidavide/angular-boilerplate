import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark text-white">

      <a class="navbar-brand">NGRX</a>

      <div class="navbar-collapse collapse">
        <ul class="navbar-nav">

          <li class="nav-item">
            <a class="nav-link" routerLink="home" routerLinkActive="active">Home</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" routerLink="settings" routerLinkActive="active">Settings</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" routerLink="users" routerLinkActive="active">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [
  ]
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
