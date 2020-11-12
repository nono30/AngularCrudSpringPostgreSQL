import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  personas: Persona[];
  constructor(private _service: ServiceService, private _router: Router) { }

  ngOnInit(): void {
    this._service.getPersonas().subscribe((res) => {
      this.personas = res;
      console.log('this.personas', this.personas);
    });
  }

}
