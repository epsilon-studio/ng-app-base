import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfigLogoModel } from '../../models/config-logo.model';
import { ConfigAvatar } from '../../models/config-avatar.model';

@Component({
  selector: 'ep-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  configLogo: ConfigLogoModel;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  configAvatar: ConfigAvatar;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.configLogo = {
      url: './assets/logo.png',
      alt: 'epsilon',
      width: 50,
    };
    this.configAvatar = {
      height: 48,
      width: 48,
    };
  }
}
