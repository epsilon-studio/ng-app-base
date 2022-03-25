import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { ConfigAvatar } from '../../models/config-avatar.model';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'ep-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss'],
})
export class UserInfoComponent implements OnInit, OnDestroy {
  configAvatar: ConfigAvatar = {
    height: 64,
    width: 64,
  };

  fullName: string = '';
  role: string = '';

  private userInfoServiceSubscription: Subscription | undefined;

  constructor(private userInfoService: UserInfoService) {}

  ngOnDestroy(): void {
    this.userInfoServiceSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.userInfoServiceSubscription =
      this.userInfoService.currentUser.subscribe((currentUser) => {
        this.fullName = currentUser.fullName;
        this.role = currentUser.role;
      });
  }
}
