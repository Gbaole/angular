import { CommonModule } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthorWorks } from '../../models/models';
import { DataService } from '../../services/api.service';

@Component({
  selector: 'app-works-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-list.component.html',
  styleUrl: './works-list.component.css'
})
export class WorksListComponent implements OnInit {

  private _selectedAuthorKey: string = ''; // Use a private property
  authorWorks: AuthorWorks | null = null;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this._selectedAuthorKey = params.get('authorKey') || '';
      this.loadAuthorWorks();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Don't load data here; it might be called before the input is set
  }

  loadAuthorWorks() {
    if (!this.selectedAuthorKey) {
      return;
    }
    this.dataService.getAuthorWorks(this.selectedAuthorKey).subscribe(
      (data) => {
        this.authorWorks = data;
      },
      (error) => {
        console.error('Error fetching author works:', error);
      }
    );
  }

  get selectedAuthorKey(): string {
    return this._selectedAuthorKey;
  }
}

