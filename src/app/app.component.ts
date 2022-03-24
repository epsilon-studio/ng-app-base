import { Component } from '@angular/core';
import { ConfigLogoModel } from './components/models/config-logo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epsilon-ng-base';

  configLogo: ConfigLogoModel;

  constructor() {
    this.configLogo = {
      url: './assets/logo.png',
      alt: 'epsilon',
      width: 100,
    }
  }
}
