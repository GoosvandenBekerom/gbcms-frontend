import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private messages: MessageService) { }

  public toast(message: string, title: string, severity: string = 'info', key: string = 'main') {
    this.messages.add({key: key, severity: severity, summary: title, detail: message});
  }

  public toastSuccess(message: string, title: string = 'Success!', key: string = 'main') {
    this.toast(message, title , 'success', key);
  }

  public toastWarn(message: string, title: string = 'Be warned...', key: string = 'main') {
    this.toast(message, title, 'warn', key);
  }

  public toastError(message: string, title: string = 'An error occurred', key: string = 'main') {
    this.toast(message, title, 'error', key);
  }
}
