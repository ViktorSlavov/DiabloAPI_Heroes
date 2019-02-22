import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public passive: boolean;

  @Input()
  public image: string;

  ngOnInit() {
  }


}
