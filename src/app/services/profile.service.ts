import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Profile} from '../interfaces/profile.interface';
import {data} from '../db/profiles';

/**
 * ProfileService
 * Service ที่ใช้ตัวแปร แบบ Subject ในการทำงาน ซึ่งทำให้ component อื่นๆ สามารถจะรับค่าที่เปลี่ยนไปได้
 * สามารถใช้งานร่วมกับ Component อื่นๆ ในโปรเจค ได้อย่างสมบูรณ์
 */
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

  /**
   * รับค่า user ทั้งหมด
   */
  getList(): Profile[] {
    return this.profiles$.getValue();
  }

  /**
   * ตั้งค่า ตำแหน่งของ user ที่ถูกเลือกจาก ลิส ทั้งหมด
   */
  setCurrentIndex(index: number): void {
    this.currentIndex$.next(index);
    const selectProfile = this.profiles$.value[index];
    this.profile$.next(selectProfile);
  }
}
