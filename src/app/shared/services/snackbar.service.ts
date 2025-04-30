import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _MatSankbar: MatSnackBar) {}

  openSnackbar(msg: string) {
    this._MatSankbar.open(msg, 'colse', {
      horizontalPosition: 'left',
      verticalPosition: 'top',
      duration: 3000,
    });
  }
}
