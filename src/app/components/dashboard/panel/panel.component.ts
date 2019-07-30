import { Component, OnInit } from '@angular/core';
import { Answer } from '../../../models/answer';
import { QuestionsMiddleware } from '../../../middlewares/questions';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  answers: Answer[];

  constructor(private questionsMiddleware: QuestionsMiddleware) {
  }

  ngOnInit() {
    this.questionsMiddleware.getAnswers()
      .subscribe((res: Answer[]) => this.answers = res);
  }

  finish() {
    this.questionsMiddleware.submitTest();
  }

}
