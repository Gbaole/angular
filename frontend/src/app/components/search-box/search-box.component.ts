import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/api.service';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  searchQuery: string = '';
  realTimeSearchResults: any[] = [];
  selectedAuthorKey: string = '';
  isLoading = false;

  @Output() viewDetails = new EventEmitter<string>();
  constructor(public dataService: DataService, private router: Router) { }
  search() {
    this.isLoading = true;
    console.log('Search Query:', this.searchQuery);
    setTimeout(() => {
      this.dataService.updateSearchQuery(this.searchQuery);
      this.dataService.searchAuthors(this.searchQuery);
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }, 1000);

  }
  onInputChange() {
    this.isLoading = true;
    console.log('Input changed. Performing real-time search...');

    this.dataService.realTimeSearchAuthors(this.searchQuery)
      .subscribe(results => {
        this.realTimeSearchResults = results.docs;
      });
    setTimeout(() => {

      this.isLoading = false;
    }, 1000);
  }
  onEnterKey() {
    this.isLoading = true;
    console.log('Enter key pressed. Performing search...');
    this.search();
    setTimeout(() => {

      this.isLoading = false;
    }, 1000);
  }


  selectAuthor(key: string, navigateToWorks: boolean = false) {
    this.viewDetails.emit(key);
    console.log('Real-Time Search Results:', this.realTimeSearchResults);

    if (navigateToWorks) {
      console.log('Navigating to works...');
      this.router.navigate([`/author/${key}/works`]);
    }
  }

}
