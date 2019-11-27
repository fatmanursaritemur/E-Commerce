import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs'; 

@Injectable({
  providedIn: 'root' //service global oldu
})
export class AlertifyService {

  constructor() { }

  success(message:string)
  {
    alertify.success(message)
  }

  error(message:string)
  {
    alertify.error(message)
  }
  warning(message:string)
  {
    alertify.warning(message)
  }
}
