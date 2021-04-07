import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-configuration',
  template: `
    <p>
      configuration works!
    </p>

    <button (click)="gotoProfile()" class="btn btn-outline-primary">
      <i class="fa fa-arrow-left"></i> Go to Profile
    </button>
  `,
  styles: []
})
export class ConfigurationComponent {

  constructor(private router: Router) {
  }

  gotoProfile(): void{
    this.router.navigateByUrl('/settings/profile');
  }

}
