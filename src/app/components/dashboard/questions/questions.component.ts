import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../models/question';
import { Answer } from '../../../models/answer';
import { RootState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { UpdateAnswer } from '../../../actions/answers';
import { QuestionsMiddleware } from '../../../middlewares/questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions: Question[];

  constructor(private questionsMiddleware: QuestionsMiddleware) {
  }

  ngOnInit() {
  }

  radioChanged(event) {
    console.log(event.target);
    const a: Answer = {
      question_id: event.target.name,
      answer: event.target.value,
      userId: 'asdbva'
    };
    console.log(a);
    this.questionsMiddleware.updateAnswer(a);
  }

}
