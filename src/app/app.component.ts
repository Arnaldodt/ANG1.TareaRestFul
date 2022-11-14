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


  infoBBDD1!: InterINFO[];
  show1= false;
  selectedTask!:InterINFO;

  constructor(private _httpService: HttpService) {}

  ngOnInit() { }

  onclickMostrar(){
    let obs = this._httpService.getTrae();
    obs.subscribe((data) => {
      console.log('::Trae Informacion GET/::');
      this.infoBBDD1 = data;
      this.show1= true
    });
  }
  taskToShow(task:InterINFO){
    this.selectedTask = task
    // let obs = this._httpService.getTraeUno(_id);
    // obs.subscribe((data) => {
    //   console.log('::Trae Informacion GET/::' + _id);
    //   this.infoBBDD2 = data;
    //   this.show2= true
    // });
  }
}
