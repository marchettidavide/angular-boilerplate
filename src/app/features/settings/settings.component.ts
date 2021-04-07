import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <div>
      <button routerLink="profile" routerLinkActive="btn-outline-warning" class="btn btn-link">Profile</button>
      <button routerLink="configuration" routerLinkActive="btn-outline-warning" class="btn btn-link">Configuration</button>
    </div>

    <hr>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [
  ]
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
