import { Component, Input, OnInit } from '@angular/core';
import { Profile } from 'src/app/Shared/Models/profile';

@Component({
  selector: 'app-experts',
  templateUrl: './experts.component.html',
  styleUrls: ['./experts.component.css']
})
export class ExpertsComponent implements OnInit {
  filterOptions: string[] = ['Doctor', 'Software Engineer', 'Actor', 'Enterpreneur'];
  selectedOption: string;

  expert: Profile = {
    name : "",
    desc : "",
    field1 : "",
    field2 : "",
    field3 : "",
    
  };
  constructor() { 
    this.expert.name = "Vishal Kumar";
    this.expert.desc = "I am a software engineer and you can connect with me for career guidance to become a techie";
    this.expert.field1 = "Worked as Power Programmer at Infosys for 2 years"
    this.expert.field2 = "B.E in Computer Science and Engineering from RNSIT, Bangalore "
    this.expert.field3 = ""
  }

  ngOnInit(): void {
  }
  resetOption() {
    this.selectedOption = '';
  }
  
  selectOption(option: string) {
    this.selectedOption = option;
  }
}
