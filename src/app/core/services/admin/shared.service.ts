/* eslint-disable @typescript-eslint/quotes */
// eslint-disable-next-line @typescript-eslint/quotes
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  variable: any;
  private subject = new Subject<any>();

  sendClickEevent(){
    this.subject.next(this.variable);
  }

  getEvent(): Observable<any>{
    return this.subject.asObservable();
  }
}
