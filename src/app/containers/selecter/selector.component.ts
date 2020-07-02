import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../services/profile.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {

  number: Observable<number>;
  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.number = this.profileService.currentIndex$.pipe(
      map(value => value + 1)
    );
  }
}
