import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuthorDetail, AuthorSearch, AuthorWorks, DocAboutAuthor } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private searchQuerySource = new BehaviorSubject<string>('');
  currentSearchQuery = this.searchQuerySource.asObservable();

  private searchResultsSource = new BehaviorSubject<DocAboutAuthor[]>([]);
  currentSearchResults = this.searchResultsSource.asObservable();

  private isLoadingSource = new BehaviorSubject<boolean>(false);
  isLoading = this.isLoadingSource.asObservable();


  constructor(private httpClient: HttpClient) {
    this.searchQuerySource
      .pipe(distinctUntilChanged(), debounceTime(300))
      .subscribe((query) => {
        this.searchAuthors(query);
      });
  }

  updateSearchQuery(query: string) {
    this.searchQuerySource.next(query);
  }
  searchAuthors(query: string, page: number = 1, pageSize: number = 10) {
    this.isLoadingSource.next(true);
    const offset = (page - 1) * pageSize;

    const apiUrl = `https://openlibrary.org/search/authors.json?q=${query}&limit=${pageSize}&offset=${offset}`;

    this.httpClient.get<AuthorSearch>(apiUrl).subscribe(
      (data: AuthorSearch) => {
        this.searchResultsSource.next(data.docs);
        this.isLoadingSource.next(false);
        console.log('API Response:', data);
      },
      (error) => {
        console.error('API Error:', error);
        this.isLoadingSource.next(false);
      }
    );
  }
  realTimeSearchAuthors(query: string) {
    const apiUrl = `https://openlibrary.org/search/authors.json?q=${query}&limit=10`;

    return this.httpClient.get<AuthorSearch>(apiUrl);
  }

  private authorURL = 'https://openlibrary.org/authors';
  getAuthorDetails(key: string): Observable<AuthorDetail> {
    const authorURL = `${this.authorURL}/${key}.json`;
    return this.httpClient.get<AuthorDetail>(authorURL);
  }

  getAuthorWorks(authorKey: string): Observable<any> {
    const authorWorksURL = `${this.authorURL}/${authorKey}/works.json`;
    return this.httpClient.get<AuthorWorks>(authorWorksURL);
  }
}


