import { Component, Inject, OnInit } from '@angular/core'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'wormhole-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.scss']
})
export class HttpErrorComponent  {

  constructor (
    public dialogRef: MatDialogRef<HttpErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { [key: string]: any }
  ) { }

  closeModal():void{
    this.dialogRef.close()
  }

}
