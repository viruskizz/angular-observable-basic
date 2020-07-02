import { Injectable } from '@angular/core';
import {Profile} from '../interfaces/profile.interface';
import {data} from '../db/profiles';

/**
 * DatabaseService
 * Service ที่ใช้ตัวแปรแบบธรรมดาในการทำงาน ซึ่งไม่สามารถส่งออกการเปลี่ยนแปลงของค่าไปยังที่อื่นได้
 * ไม่สามารถใช้งานร่วมกับ Component อื่นๆ ในโปรเจค ได้อย่างสมบูรณ์
 */
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private readonly db: Profile[] = data;
  private currentIndex = 0;
  constructor() {}

  /**
   * รับค่า user ทั้งหมด
   */
  getList(): Profile[] {
    return this.db;
  }

  /**
   * ตั้งค่า ตำแหน่งของ user ที่ถูกเลือกจาก ลิส ทั้งหมด
   */
  setCurrentIndex(index: number): void {
    this.currentIndex = index;
  }

  /**
   * รับค่า user ที่ถูกเลือกจาก currentIndex
   */
  getProfile(): Profile {
    return this.db[this.currentIndex];
  }
}
