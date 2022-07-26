import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject(['Roger','Tango','Charlie'])

  public addUser(user: string) {
    const data = this.users$.value
    this.users$.next([...data, user])
  }

  constructor() { }
}
