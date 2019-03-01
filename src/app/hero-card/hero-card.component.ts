import { Component, OnInit, Input } from '@angular/core';
import { DClass } from '../services/blizz-interfaces';
import { DResourceType, DResourceSize } from '../services/common';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {
  public types = DResourceType;
  public sizes = DResourceSize;

  @Input()
  public class: DClass = null;

  ngOnInit() {
  }

}
