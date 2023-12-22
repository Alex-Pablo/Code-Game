import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Challenge } from '../models/challenge.model';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScriptService {

  private _challenge$ = new BehaviorSubject<Challenge>({} as Challenge);

  private _setValue$(value: Challenge){
    this._challenge$.next(value)
  }

  _getValue$ (){
    return this._challenge$.asObservable();
  }
  
  private URL_API = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  getChallenge(){
    return this.httpClient.get<Challenge>(`${this.URL_API}/Script/1`)
    .pipe(
      tap((challenge)=>{
        this._setValue$(challenge);
      })
    )
  }

  validateSolution(solucion:string){
    console.log(this._challenge$.value.id, solucion);
    return this.httpClient.post(`${this.URL_API}/Script`,{id:this._challenge$.value.id, soluctionScript: solucion})
  }

  
  
}
