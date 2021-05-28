
/* Objetivo: 
   Pegar na store os dados do isolado carregado
   Salvar o estado de uma nova ficha de procedimento desse isolado
*/



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Isolado } from 'src/app/shared/models/isolado';
import { VistoriaIsolado } from 'src/app/shared/models/vistoriaisolado';
import { IsoladoService } from '../../../services/isolados.service';

import * as moment from 'moment';
import { VistoriaIsoladoService } from '../../../services/vistoria-isolado.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

moment.locale('pt-br');


@Component({
  selector: 'app-vistoria-isolado',
  templateUrl: './vistoria-isolado.component.html',
  styleUrls: ['./vistoria-isolado.component.css']
})
export class VistoriaIsoladoComponent implements OnInit {

  bsModalRef: BsModalRef;
  vistoriaIsolado:FormGroup;
  isolado:Isolado ;
  today: string = moment().format('LLL');

  constructor(private route: ActivatedRoute, 
              private isoladosservice: IsoladoService, // descentralizar para os effects
              private fb: FormBuilder,
              private vistoriaisoladoservice: VistoriaIsoladoService, // descentralizar para os effects
              public modalservice: BsModalService) { }

  ngOnInit(): void {
    this.visualizarIsolado(this.route.snapshot.params['id']);
    this.criarFormVistoria(this.formVistoriaBranco());
  }

  private visualizarIsolado(id:number):void{
    this.isoladosservice.getIsoladoById(id)
      .subscribe((isolado:Isolado)=> this.isolado = isolado);
  }

  private criarFormVistoria(modelovistoria: VistoriaIsolado):void{
    this.vistoriaIsolado = this.fb.group({
      date: [this.today, [Validators.required]],
      isHome: [modelovistoria.isHome, [Validators.required]],
      isResidentsInHome: [modelovistoria.isResidentsInHome],
      requestHelp: [modelovistoria.requestHelp],
      report: [modelovistoria.report],
    })
  }

  private montarIsolado():VistoriaIsolado{
    const vistoria = this.vistoriaIsolado.getRawValue();
    return{
      date:this.today,
      isolated: this.isolado.nomeisolado,
      isHome: vistoria.isHome,
      isResidentsInHome:vistoria.isResidentsInHome,
      report: vistoria.report,
      requestHelp: vistoria.requestHelp
    } as VistoriaIsolado
  }
  
  private formVistoriaBranco():VistoriaIsolado{
    return{
      date: null,
      isHome:null,
      isResidentsInHome:null,
      requestHelp:null,
      report:null,
    }as VistoriaIsolado
  }

  cadastrarVistoria():void{
    this.vistoriaIsolado.markAllAsTouched();
    if(this.vistoriaIsolado.invalid){
      return
    }
    const vistoria = this.montarIsolado();
    console.log(vistoria)

    this.salvar(vistoria);
    console.log(JSON.stringify(this.vistoriaIsolado.value))
  }


  private salvar(vistoria:VistoriaIsolado){
    this.vistoriaisoladoservice.saveVistoriaIsolado(vistoria)
    .subscribe(()=>{
      const initialState = {
        vistoria,
        title:"Confirme os dados da visita: "
      }
      this.bsModalRef = this.modalservice.show(ModalComponent, {initialState} );
      this.bsModalRef.content.closeBtnName = 'Close';
    }),
    ()=>{
      this.resetar()
    };
  }

  resetar():void{
    this.vistoriaIsolado.reset();
  }


}
