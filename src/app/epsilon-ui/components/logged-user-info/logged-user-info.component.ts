import { Component, OnInit } from '@angular/core';
import { ConfigAvatar } from '../../models/config-avatar.model';

@Component({
  selector: 'ep-logged-user-info',
  templateUrl: './logged-user-info.component.html',
  styleUrls: ['./logged-user-info.component.scss'],
})
export class LoggedUserInfoComponent implements OnInit {
  configAvatar: ConfigAvatar;

  constructor() {
    this.configAvatar = {
      height: 48,
      width: 48,
    };
  }

  ngOnInit(): void {}
}
