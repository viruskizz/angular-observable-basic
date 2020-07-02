import { Component, OnInit } from '@angular/core';
import {Profile} from '../../interfaces/profile.interface';
import {ProfileService} from '../../services/profile.service';
import {DatabaseService} from 'src/app/services/database.service';
import {Score} from '../../interfaces/game.interface';
import {from, of} from 'rxjs';
import {reduce} from 'rxjs/operators';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css']
})
export class ShowListComponent implements OnInit {

  list: Profile[] | any[];
  constructor(private profileService: ProfileService,
              private databaseService: DatabaseService) { }

  ngOnInit(): void {
    // this.list = this.databaseService.getList();
    this.list = this.profileService.getList();
  }
  onSelect(index) {
    // this.databaseService.setCurrentIndex(index);
    this.profileService.setCurrentIndex(index);
  }

  sumPoint = (scores: Score[]) => scores.reduce((total, cur) => total + cur.point, 0);

}
