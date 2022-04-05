import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject, Observable, of, distinctUntilChanged } from 'rxjs';
import { switchMap, map, tap, debounceTime } from 'rxjs/operators';

// import { Region } from './region.interface';

@Injectable({ providedIn: 'root' })
export class AutocompleteService {
  constructor(private http: HttpClient) {}
  private regionsUrl = 'api/regions'; //remove this
  private actionSubject = new BehaviorSubject<string>('');
  readonly action$ = this.actionSubject.asObservable();

  public setAction(input: string): void {
    this.actionSubject.next(input);
  }

  readonly autocomplete$: Observable<any[]> = this.action$.pipe(
    tap((data: string) => console.log('input:', data)),
    debounceTime(350),
    // switchMap fires REST based on above input
    switchMap(input => ((!!input && input.trim().length > 1) ? this.http.get<any[]>(`${this.regionsUrl}\?capital=^${input}`) : of([]))
    .pipe(
      // Additional sorting on switchMap output
      map((regions: any[]) => regions.sort((region1, region2) => region1.capital.localeCompare(region2.capital))),
      // Taps the final emitted value from inner observable
      tap((data: any[]) => console.log('output:', data))
    )),
  );

}
