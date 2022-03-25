import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ConfigAvatar } from '../../models/config-avatar.model';

@Component({
  selector: 'ep-icon-avatar',
  templateUrl: './icon-avatar.component.html',
  styleUrls: ['./icon-avatar.component.scss'],
})
export class IconAvatarComponent implements OnChanges {
  @Input()
  fullName: string = '';

  @Input()
  config!: ConfigAvatar;

  styleAvatarCss: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['fullName'] && changes['fullName'].currentValue) {
      this.fullName = changes['fullName'].currentValue;
    }

    if (changes['config'] && changes['config'].currentValue) {
      this.config = changes['config'].currentValue;
      this.styleAvatarCss = {
        height: `${this.config.height / 16}rem`,
        width: `${this.config.width / 16}rem`,
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
