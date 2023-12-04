import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges } from '@angular/core';
import { DataService } from '../../services/api.service';
@Component({
  selector: 'app-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works.component.html',
  styleUrl: './works.component.css'
})
export class WorksComponent implements OnChanges {
  @Input() selectedAuthorKey: string = '';
  authorDetails: any;
  worksData: any;

  constructor(private dataService: DataService) { }

  ngOnChanges() {
    if (this.selectedAuthorKey) {
      // Fetch author details
      this.fetchAuthorDetails();

      // Fetch author works
      this.fetchAuthorWorks();
    }
  }

  fetchAuthorDetails() {
    // Your existing code to fetch author details
  }

  fetchAuthorWorks() {
    this.dataService.getAuthorWorks(this.selectedAuthorKey).subscribe(
      (data: any) => {
        this.worksData = data;
        console.log('Author Works:', this.worksData);
      },
      (error) => {
        console.error('Error fetching Author Works:', error);
      }
    );
  }
}
