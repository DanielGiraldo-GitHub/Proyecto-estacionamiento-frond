import { Component, OnInit } from '@angular/core';
import { ParqueaderoService } from './parqueadero.service';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css'],
  providers: [ParqueaderoService]
})
export class ParqueaderoComponent implements OnInit {

  constructor(private parqueaderoService: ParqueaderoService) { }

  ngOnInit() {
  }

}
