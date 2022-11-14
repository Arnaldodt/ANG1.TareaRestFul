import { Component, OnInit, Input } from '@angular/core';
import { InterINFO } from '../interInfo';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow!: InterINFO;
  subtitle2 = 'Muestra INFO Seleccionado';
  constructor() { }

  ngOnInit(): void {
    console.log("Hola");
  }

}
