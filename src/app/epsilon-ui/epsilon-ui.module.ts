import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { MainTemplate } from './templates/main/main.template';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { IconAvatarComponent } from './components/icon-avatar/icon-avatar.component';
import { LoggedUserInfoComponent } from './components/logged-user-info/logged-user-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserInfoService } from './services/user-info.service';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';

const COMPONENTS = [
  LogoComponent,
  IconAvatarComponent,
  LoggedUserInfoComponent,
  UserInfoComponent,
  MenuComponent,
];

const TEMPLATES = [MainTemplate];

const MATERIALMODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
];

const SERVICES = [UserInfoService];

@NgModule({
  declarations: [...COMPONENTS, ...TEMPLATES],
  imports: [CommonModule, RouterModule, LayoutModule, ...MATERIALMODULES],
  exports: [...COMPONENTS, ...TEMPLATES],
  providers: [...SERVICES],
})
export class EpsilonUIModule {}
