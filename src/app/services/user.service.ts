import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URL_API = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  postPlayer(name:string){
    return this.httpClient.post(`${this.URL_API}/Player`, {name})
    .pipe(
      tap ((data)=>{
        this.setLocalStorage(data);
      } )
    )
  }

  setLocalStorage(player:any){
    localStorage.setItem('player', JSON.stringify(player));
  }

  getData(){
    const storedData = localStorage.getItem('player');
    return storedData ? JSON.parse(storedData) : null;
  }
}
