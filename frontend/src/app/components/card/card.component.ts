import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DataService } from '../../services/api.service';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() selectedAuthorKey: string = '';
  authorDetails: any;

  constructor(private dataService: DataService) { }

  ngOnChanges() {

    if (this.selectedAuthorKey) {

      this.dataService.getAuthorDetails(this.selectedAuthorKey).subscribe(
        (data: any) => {
          this.authorDetails = data;
          console.log('Author Details:', this.authorDetails);
        },
        (error) => {
          console.error('Error fetching Author Details:', error);
        }
      );
    }
  }
}
