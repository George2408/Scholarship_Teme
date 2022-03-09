import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';



@NgModule({
  declarations: [
    SnackBarComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShareModuleModule { }
