import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/Shared/Models/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() expert: Profile;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
