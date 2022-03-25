import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserInfoService {
  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject({});
  public readonly currentUser: Observable<any> =
    this.currentUserSubject.asObservable();

  constructor() {}

  setCurrentUser(currentUser: any): void {
    this.currentUserSubject.next(currentUser);
  }
}
