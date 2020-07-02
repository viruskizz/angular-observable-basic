import { Injectable } from '@angular/core';
import {Profile} from '../interfaces/profile.interface';
import {data} from '../db/profiles';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly db: Profile[] | any[];
  private currentIndex = 0;
  constructor() {
    this.db = data;
  }

  getList() {
    return this.db;
  }

  setCurrentIndex(index) {
    this.currentIndex = index;
    console.log('currentIndex: ', this.currentIndex);
  }

  getProfile() {
    return this.db[this.currentIndex];
  }
}
