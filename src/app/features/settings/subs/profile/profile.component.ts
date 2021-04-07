import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p>
      profile works!
    </p>

    <button routerLink="/settings/configuration" class="btn btn-outline-primary">
      Go to configuration <i class="fa fa-arrow-right"></i>
    </button>
  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
