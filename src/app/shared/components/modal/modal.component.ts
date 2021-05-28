import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Isolado } from '../../models/isolado';
import { VistoriaIsolado } from '../../models/vistoriaisolado';


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent{
  title : string;
  closeBtnName : string;
  isolado:Isolado;
  vistoria?: VistoriaIsolado;  
  constructor(public bsModalRef: BsModalRef) {}


  ngOnInit() {
    
  }

}
