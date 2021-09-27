import { Injectable } from '@angular/core';
import { ToastrService  } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
    constructor(private toastrService: ToastrService ) { }

  addToast(title, message, type) {
    this.add(title, message, type);
  }

  add(title, message, type) {

    if (type === null || type === 'info') {
      this.toastrService.info(message);
    } else if (type === 'success') {
      this.toastrService.success(message);
    } else if (type === 'wait') {
      this.toastrService.warning(message);
    } else if (type === 'error') {
      this.toastrService.error(message);
    } else if (type === 'warning') {
      this.toastrService.warning(message);
    }


  }
}
