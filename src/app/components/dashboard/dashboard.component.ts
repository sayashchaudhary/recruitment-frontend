import { Component, OnInit } from '@angular/core';
import { QuestionsMiddleware } from '../../middlewares/questions';
import { Question } from '../../models/question';
import { TimerService } from '../../services/timer.service';
import { EventBusService } from '../../services/event-bus.service';
import { Broadcaster } from '../../utils/constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Question[];
  hours: number;
  minutes: number;
  seconds: number;

  constructor(private questionMiddleware: QuestionsMiddleware,
              private timerService: TimerService,
              private broadcasterService: EventBusService) {
    this.questionMiddleware.getQuestions().subscribe((res: Question[]) => {
      console.log('[Dashboard questions]', res);
      this.questions = res;
    });

    this.broadcasterService.listen(Broadcaster.HOUR).subscribe(hrs => this.hours = hrs);
    this.broadcasterService.listen(Broadcaster.MINUTE).subscribe(min => this.minutes = min);
    this.broadcasterService.listen(Broadcaster.SECONDS).subscribe(sec => this.seconds = sec);
  }

  ngOnInit() {
    this.timerService.initializeTimer();
  }

  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();
  }

}
