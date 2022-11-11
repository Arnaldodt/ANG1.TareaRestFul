import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import { HttpService } from './http.service';
import { InterINFO } from './interInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'INFO de la Base Mongo';
  subtitle1 = 'Muestra toda INFO';
  subtitle2 = 'Muestra INFO del 3er Registro';

  infoBBDD1!: InterINFO[];
  infoBBDD2!: InterINFO;
  show= false;

  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.getTasksFromService();
  }

  getTasksFromService() {
    let obs = this._httpService.getTrae();
    obs.subscribe((data) => {
      console.log('::Trae Informacion GET/::');
      this.infoBBDD1 = data;
      this.infoBBDD2 = data[2];
      this.show= true
    });
  }
}
