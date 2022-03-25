import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ConfigAvatar } from '../../models/config-avatar.model';
import { UserInfoService } from '../../services/user-info.service';

@Component({
  selector: 'ep-icon-avatar',
  templateUrl: './icon-avatar.component.html',
  styleUrls: ['./icon-avatar.component.scss'],
})
export class IconAvatarComponent implements OnInit, OnChanges, OnDestroy {
  @Input()
  fullName: string = '';

  @Input()
  config!: ConfigAvatar;

  styleAvatarCss: any;

  private userInfoServiceSubscription: Subscription | undefined;

  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoServiceSubscription =
      this.userInfoService.currentUser.subscribe((currentUser) => {
        this.fullName = currentUser.fullName;
      });
  }

  ngOnDestroy(): void {
    this.userInfoServiceSubscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fullName'] && changes['fullName'].currentValue) {
      this.fullName = changes['fullName'].currentValue;
    }

    if (changes['config'] && changes['config'].currentValue) {
      this.config = changes['config'].currentValue;
      this.styleAvatarCss = {
        height: `${this.config.height / 16}rem`,
        width: `${this.config.width / 16}rem`,
        fontSize: `${(this.config.width * 0.35) / 16}rem`,
      };
    }
  }

  public getInitialLetters() {
    return this.fullName
      .split(' ')
      .slice(0, 2)
      .map((item) => item[0])
      .join('');
  }
}
