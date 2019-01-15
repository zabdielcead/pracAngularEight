import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  heroesUrl = 'https://heroesappdos.firebaseio.com/heroes.json';
  heroeUrl = 'https://heroesappdos.firebaseio.com/heroes/';
  constructor( private http: Http ) { }
  nuevoHeroe(heroe: Heroe) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-type' : 'application/json'
    });
    return this.http.post(this.heroesUrl, body, { headers }).pipe( map( res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarHeroe(heroe: Heroe, key$: string) {
    let body = JSON.stringify( heroe );
    let headers = new Headers({
      'Content-type' : 'application/json'
    });
    let url = `${this.heroeUrl}/${key$}.json`;
    return this.http.put(url, body, { headers }).pipe( map( res => {
      console.log(res.json());
      return res.json();
    }));
  }
  getHeroe(key$: string) {
    let url = `${ this.heroeUrl }/${ key$ }.json `;
    return this.http.get(url).pipe(map(res => res.json()));
  }
  getHeroes() {
    return this.http.get(this.heroesUrl).pipe(map(res => res.json()));
  }
  borrarHeroe(key$: string ) {
    let url = `${ this.heroeUrl }/${ key$ }.json`;
    return this.http.delete(url).pipe(map(res => res.json()));
  }
}
