import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CardComponent } from './components/card/card.component';


import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DataService } from './services/api.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, HttpClientModule, SearchBoxComponent, CardComponent, RouterModule],
  providers: [DataService, HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'

})

export class AppComponent {


  selectedAuthorKey: string = '';

  handleViewDetails(key: string) {
    this.selectedAuthorKey = key;
  }
}
