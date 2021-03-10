import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private httpClient: HttpClient
  ) { }

  private apiUrl = environment.apiUrl;

  searchBooks(): Observable<BookResponse> {​

    return this.httpClient.get<BookResponse>(​
      `${this.apiUrl}/search.json?q=the+lord+of+the+rings`​
    );​
  }
}
