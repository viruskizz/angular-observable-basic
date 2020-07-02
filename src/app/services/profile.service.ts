import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Profile} from '../interfaces/profile.interface';
import {data} from '../db/profiles';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  public profiles$ = new BehaviorSubject<Profile[]>([]);
  public profile$ = new Subject<Profile>();
  public currentIndex$ = new Subject<number>();
  constructor() {
    this.profiles$.next(data);
  }

  getList() {
    return this.profiles$.getValue();
  }

  setCurrentIndex(index) {
    this.currentIndex$.next(index);
    const selectProfile = this.profiles$.value[index];
    this.profile$.next(selectProfile);
  }
}
