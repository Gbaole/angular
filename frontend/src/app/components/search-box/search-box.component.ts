import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/api.service';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  searchQuery: string = '';
  realTimeSearchResults: any[] = [];
  selectedAuthorKey: string = '';
  @Output() viewDetails = new EventEmitter<string>();
  constructor(public dataService: DataService) { }
  search() {
    console.log('Search Query:', this.searchQuery);

    this.dataService.updateSearchQuery(this.searchQuery);

    this.dataService.searchAuthors(this.searchQuery);

  }
  onInputChange() {
    console.log('Input changed. Performing real-time search...');
    this.dataService.realTimeSearchAuthors(this.searchQuery)
      .subscribe(results => {
        this.realTimeSearchResults = results.docs;
      });
  }
  onEnterKey() {
    console.log('Enter key pressed. Performing search...');
    this.search();
  }

  selectAuthor(key: string) {
    this.viewDetails.emit(key);
    console.log('Real-Time Search Results:', this.realTimeSearchResults);

  }


}
