import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { EventBusService } from './event-bus.service';
import { Broadcaster } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private seconds = 60;
  private minutes = 60;
  private hours = 1;

  constructor(private eventBus: EventBusService) {
  }

  initializeTimer() {
    timer(0, 1000).subscribe(
      (_) => {
        this.seconds--;
        if (this.seconds == 0) {
          this.seconds = 60;
          this.minutes--;
        }
        if (this.minutes == 0) {
          this.minutes = 60;
          this.hours--;
        }
        this.emitEvents();
      }
    );
  }

  emitEvents() {
    this.eventBus.emit(Broadcaster.HOUR, this.hours);
    this.eventBus.emit(Broadcaster.MINUTE, this.minutes);
    this.eventBus.emit(Broadcaster.SECONDS, this.seconds);
  }

  dumpTimer() {
    this.eventBus.emit(Broadcaster.DUMP_TIMER, true);
  }

}
