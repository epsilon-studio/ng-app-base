import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ConfigLogoModel } from '../models/config-logo.model';


@Component({
  selector: 'ep-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit, OnChanges {

  @Input()
  url:string = '';

  @Input()
  config:ConfigLogoModel = {
    url: './assets/logo.png',
    alt: undefined || 'epsilon',
    width: undefined || 100,
  }

  styleLogo: any = {}

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config']) {
      this.styleLogo = {
        width: this.config.width || 100,
        height: 'auto'
      }
    }
  }

  ngOnInit(): void {
  }

}
