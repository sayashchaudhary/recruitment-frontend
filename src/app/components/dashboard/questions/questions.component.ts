import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions: Question[];

  constructor() {
  }

  ngOnInit() {
  }

}
