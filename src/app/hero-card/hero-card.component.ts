import { Component, OnInit, Input } from '@angular/core';
import { DClass } from '../services/blizz-interfaces';
import { BlizzardMediaAPIService } from '../services/media.service';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  constructor(public mediaService: BlizzardMediaAPIService) { }

  @Input()
  public class: DClass = null;

  ngOnInit() {
  }

}
