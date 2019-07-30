import { Component, OnInit } from '@angular/core';
import { QuestionsMiddleware } from '../../middlewares/questions';
import { Question } from '../../models/question';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  questions: Question[];

  constructor(private questionMiddleware: QuestionsMiddleware) {
    this.questionMiddleware.getQuestions().subscribe((res: Question[]) => {
      console.log('[Dashboard questions]', res);
      this.questions = res;
    });
  }

  ngOnInit() {

  }

  scrollToSection(id: string) {
    if (!id) {
      return;
    }
    document.getElementById(id).scrollIntoView();
  }

}
