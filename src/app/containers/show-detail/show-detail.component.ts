import { Component, OnInit } from '@angular/core';
import {Profile} from '../../interfaces/profile.interface';
import {ProfileService} from '../../services/profile.service';
import {DatabaseService} from '../../services/database.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.css']
})
export class ShowDetailComponent implements OnInit {

  profile: Profile;
  profileAsync: Observable<Profile>;
  constructor(public profileService: ProfileService,
              private databaseService: DatabaseService) { }

  ngOnInit(): void {
    // this.profile = this.databaseService.getProfile();
    this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
    });
    this.profileAsync = this.profileService.profile$;
  }
}
