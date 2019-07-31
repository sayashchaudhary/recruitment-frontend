import { Component, OnInit } from '@angular/core';
import { Answer } from '../../../models/answer';
import { QuestionsMiddleware } from '../../../middlewares/questions';
import { EventBusService } from '../../../services/event-bus.service';
import { Broadcaster } from '../../../utils/constants';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  answers: Answer[];

  constructor(private questionsMiddleware: QuestionsMiddleware,
              private eventBusService: EventBusService) {

    this.eventBusService.listen(Broadcaster.FINISH_TEST).subscribe((_) => {
      this.finish();
    });
  }

  ngOnInit() {
    this.questionsMiddleware.getAnswers()
      .subscribe((res: Answer[]) => this.answers = res);
  }

  finish() {
    this.questionsMiddleware.submitTest();
  }
}
