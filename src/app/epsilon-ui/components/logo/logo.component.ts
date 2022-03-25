import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ConfigLogoModel } from '../../models/config-logo.model';

@Component({
  selector: 'ep-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnChanges {
  @Input()
  url: string = '';

  @Input()
  config: ConfigLogoModel;
  styleLogo: any = {};

  constructor() {
    this.config = {
      url: './assets/logo.png',
      alt: undefined || 'epsilon',
      width: undefined || 50,
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'] && changes['config'].currentValue) {
      console.log(JSON.stringify(changes['config'].currentValue));
      this.config = changes['config'].currentValue as ConfigLogoModel;
      this.styleLogo = {
        width: `${this.config.width / 16}rem`,
        height: 'auto',
        verticalAlign: 'middle',
      };
      console.log(this.styleLogo);
    }
  }
}
