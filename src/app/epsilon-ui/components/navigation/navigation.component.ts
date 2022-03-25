import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ConfigLogoModel } from '../../models/config-logo.model';
import { UserInfoService } from '../../services/user-info.service';

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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private userInfoService: UserInfoService
  ) {
    this.configLogo = {
      url: './assets/logo.png',
      alt: 'epsilon',
      width: 50,
    };
    this.userInfoService.setCurrentUser({
      username: 'user01',
      fullName: 'Pedro Martinez',
      role: 'Cajero',
    });
  }
}
