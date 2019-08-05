import { Component, OnInit } from '@angular/core';
import { Answer } from '../../../models/answer';
import { QuestionsMiddleware } from '../../../middlewares/questions';
import { EventBusService } from '../../../services/event-bus.service';
import { Broadcaster } from '../../../utils/constants';
import { MatDialog, MatDialogRef, MatSnackBar } from '@angular/material';
import { ConfirmationPopupComponent } from './confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  answers: Answer[];
  isSubmitEnabled = false;
  dialogRef: MatDialogRef<ConfirmationPopupComponent>;

  constructor(private questionsMiddleware: QuestionsMiddleware,
              private eventBusService: EventBusService,
              private snackBar: MatSnackBar,
              private matDialog: MatDialog) {

    this.eventBusService.listen(Broadcaster.FINISH_TEST).subscribe((_) => {
      this.finish();
    });
    this.eventBusService.listen(Broadcaster.ENABLE_SUBMIT).subscribe((_) => {
      this.isSubmitEnabled = true;
      this.snackBar.open(
        'You can now submit the test',
        null,
        { duration: 3000 }
      );
    });
  }

  ngOnInit() {
    this.questionsMiddleware.getAnswers()
      .subscribe((res: Answer[]) => this.answers = res);
  }

  finish() {
    if (!this.isSubmitEnabled) {
      this.snackBar.open('You can submit the test after 30 minutes!', null, { duration: 3000 });
    } else {
      this.dialogRef = this.matDialog.open(ConfirmationPopupComponent, {
        width: '40%',
      });
      if (this.dialogRef) {
        this.dialogRef.afterClosed().subscribe((data: { finish: boolean }) => {
          if (data && data.finish) {
            this.questionsMiddleware.submitTest();
          }
        });
      }
    }

  }
}
