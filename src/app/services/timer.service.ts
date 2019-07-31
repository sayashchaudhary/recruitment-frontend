import { Injectable } from '@angular/core';
import { Observable, Subject, timer } from 'rxjs';
import { EventBusService } from './event-bus.service';
import { Broadcaster } from '../utils/constants';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private seconds = 60;
  private minutes = 59;
  private hours = 0;

  constructor(private eventBus: EventBusService) {
  }

  initializeTimer() {
    timer(0, 1000).subscribe(
      (_) => {
        this.seconds--;
        if (this.seconds === -1) {
          this.seconds = 59;
          this.minutes--;
        }
        if (this.minutes === -1) {
          this.eventBus.emit(Broadcaster.FINISH_TEST);
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
