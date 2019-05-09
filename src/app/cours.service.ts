import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Cours, COURS} from './cours';
import {Section,SECTION} from './section';
import {MessageService} from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({providedIn: 'root'})
export class CoursService {
  private coursUrl = 'api/COURS';  // URL to web api

 constructor(
  private http: HttpClient,
   private messageService: MessageService) { }
  
 /*getCours(): Observable<Cours[]>{
    return of(COURS);
 }*/
 getCours (): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.coursUrl)
      .pipe(
        tap(_ => this.log('fetched cours')),
        catchError(this.handleError<Cours[]>('getCours', []))
      );
 }
  /** GET hero by id. Return `undefined` when id not found */
  getCoursNo404<Data>(code: string): Observable<Cours> {
    const url = `${this.coursUrl}/?code=${code}`;
    return this.http.get<Cours[]>(url)
      .pipe(
        map(COURS => COURS[1]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} cours code=${code}`);
        }),
        catchError(this.handleError<Cours>(`getCour code=${code}`))
      );
  }
  getSection(): Observable<Section[]>{
    this.messageService.add(`CoursService :: Aller Chercher Cour`);
    return of(SECTION);
  }
  /*getCour(code:String): Observable<Cours>{
    this.messageService.add('CoursService :: Aller Chercher Cours code=${code}');
    return of(COURS.find(cour => cour.code === code));
  }*/
  /** GET hero by id. Will 404 if id not found */
 getCour(code: string): Observable<Cours> {
    const url = "${this.coursUrl}/${code}";
    return this.http.get<Cours>(url).pipe(
      tap(_ => this.log("fetched cours code=${code}")),
      catchError(this.handleError<Cours>("getCours code=${code}"))
    );
  }
  /* GET heroes whose name contains search term */
  searchCours(term: string): Observable<Cours[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Cours[]>(`${this.coursUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found cour matching ${term}`)),
      catchError(this.handleError<Cours[]>('searchCours', []))
    );
  }
  /** POST: add a new cour to the server */
  addCour (cour: Cours): Observable<Cours> {
    return this.http.post<Cours>(this.coursUrl, cour, httpOptions).pipe(
      tap((newCour: Cours) => this.log('added cour w/ code=${newCour.code}')),
      catchError(this.handleError<Cours>('addCours'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteCour (cour: Cours | string): Observable<Cours> {
    const code = typeof cour === 'string' ? cour : cour.code;
    const url = `${this.coursUrl}/${code}`;
 
    return this.http.delete<Cours>(url, httpOptions).pipe(
      tap(_ => this.log('deleted hero id=${code}')),
      catchError(this.handleError<Cours>('deleteCour'))
    );
  }
  /** PUT: update the hero on the server */
  updateCours (cour: Cours): Observable<any> {
    return this.http.put(this.coursUrl, cour, httpOptions).pipe(
      tap(_ => this.log('updated cours cour=${cour.code}')),
      catchError(this.handleError<any>('updateCours'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CoursService: ${message}`);
  }
}

 
