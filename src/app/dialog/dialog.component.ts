import { Input, Component, Inject, ViewEncapsulation, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'a-dialog',
  template: `<button mat-fab (click)="openDialog()">Open</button>`,
  styles: [``],

})
export class DialogTriggerComponent {

  animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'a-example-dialog',
  template: `
<h1 mat-dialog-title>hi!</h1>
<button mat-button (click)='onNoClick()'>close</button>
  `,

})
export class DialogContentComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
