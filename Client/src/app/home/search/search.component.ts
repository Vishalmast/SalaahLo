import { Component, OnInit } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  placeholders: string[] = ['I am confused in choosing my medical college.', 'How to prepare for CAT?', 'Should i take computer science and engineering?'];
  currentIndex = 0;
  currentPlaceholder = this.placeholders[this.currentIndex];
  search: string;
  prevSearch: string;
  constructor() {     
  }
  
  ngOnInit(): void {
    setInterval(() => {
      this.switchPlaceholder();
    }, 2150);
  }

  switchPlaceholder() {
    this.currentIndex = (this.currentIndex + 1) % this.placeholders.length;
    this.currentPlaceholder = this.placeholders[this.currentIndex];
  }

  searchClick = () => {
    this.prevSearch = this.search;
  }
}
