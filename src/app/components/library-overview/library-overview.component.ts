import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-library-overview',
  templateUrl: './library-overview.component.html',
  styleUrls: ['./library-overview.component.scss']
})
export class LibraryOverviewComponent implements OnInit {

  constructor(
    private searchService: SearchService
  ) { }

  books$: Observable<BookResponse>;

  ngOnInit(): void {
  }

  clicked(): void {
    this.books$ = this.searchService.searchBooks()
  }

}
