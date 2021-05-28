import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Isolado } from 'src/app/shared/models/isolado';

@Component({
  selector: 'app-isolados-details',
  templateUrl: './isolados-details.component.html',
  styleUrls: ['./isolados-details.component.css']
})
export class IsoladosDetailsComponent implements OnInit {

  isVisited:boolean = false;
  @Input() isolado:Isolado;
  @Output() visitarIsolado = new EventEmitter<boolean> ();

  constructor() { }

  ngOnInit(): void {
  }
 
  visitado ():void{
    this.isolado.visitado ? this.isVisited = true : this.isVisited = false;
    
    this.visitarIsolado.emit(true);
  } 
  
}
