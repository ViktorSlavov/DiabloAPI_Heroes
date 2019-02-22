import { Component, OnInit, OnDestroy } from '@angular/core';
import { BlizzardAPIService } from 'src/app/services/blizzard.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { DClass } from 'src/app/services/blizz-interfaces';
import { BlizzardMediaAPIService } from 'src/app/services/media.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
// tslint:disable-next-line:component-class-suffix
export class HomeScreenComponent implements OnInit, OnDestroy {
  private destroy$ = new BehaviorSubject(null);
  constructor(private blizzService: BlizzardAPIService, public mediaService: BlizzardMediaAPIService) {
    this.classes = blizzService.getClasses();
  }
  public classes: Observable<DClass[]> = null;

  log() {
    console.log('g');
  }
  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
