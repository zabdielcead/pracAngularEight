import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes: any;
  loading = true;
  constructor(private _heroesService: HeroesService) {
    this._heroesService.getHeroes().subscribe( data => {
      console.log(data);
      // this.heroes = data;
      // this.loading = false;
      setTimeout( () => {
        this.loading = false;
        this.heroes = data;
      }, 3000 );
    });
   }

  ngOnInit() {
  }
  borraHeroe(key$: string) {
    this._heroesService.borrarHeroe(key$)
        .subscribe( respuesta => {
          if (respuesta) {
            console.error(respuesta);
          } else {
            console.log(respuesta);
            delete this.heroes[key$];
          }
        });
  }

}
