import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Challenge } from '../models/challenge.model';
import { BehaviorSubject } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private URL_API = environment.apiUrl;

  private _challenge$ = new BehaviorSubject<Challenge>({} as Challenge);
  private _setValue$(value: Challenge){
    this._challenge$.next(value)
  }
  _getValue$ (){
    return this._challenge$.asObservable();
  }
  constructor(private httpClient: HttpClient) { }

  orderChallenge:number = 1;

  getChallenge(){
    this.httpClient.get<Challenge>(`${this.URL_API}/Script/${this.orderChallenge}`)
    .pipe(
      tap((challenge) => {
        this._setValue$(challenge);
      }),
      finalize(() => {})
    )
    .subscribe();
  }

  validateSolution(solucion:string){
    console.log(solucion);
    
    return this.httpClient.post(`${this.URL_API}/Script`,{id:this._challenge$.value.id, soluctionScript: solucion})
    .pipe(
      tap(() => {
        this.orderChallenge++;
        this.getChallenge();
        console.log(this.orderChallenge);
      })
    );
  }

  
  
}
