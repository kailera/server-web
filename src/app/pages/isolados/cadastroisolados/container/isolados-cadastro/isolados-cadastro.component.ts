import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';
import { Isolado } from 'src/app/shared/models/isolado';
import { IsoladoService } from '../../../services/isolados.service';

@Component({
  selector: 'app-isolados-cadastro',
  templateUrl: './isolados-cadastro.component.html',
  styleUrls: ['./isolados-cadastro.component.css']
})
export class IsoladosCadastroComponent implements OnInit {
  bsModalRef: BsModalRef;
  id:number;

  cadastroIsolado: FormGroup;
  constructor(private fb: FormBuilder,
              private isoladosservice: IsoladoService,
              private activatedroute: ActivatedRoute,
              public modalService: BsModalService) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id']
    if(this.id){
      return
    }else{
      this.criarCadastroIsolado(this.criarCadastroIsoladoBranco());
    }

  }

  private criarCadastroIsolado(isolado: Isolado):void{
    this.cadastroIsolado = this.fb.group({
      dataregistro : [isolado.dataregistro, [Validators.required]],
      nomeisolado: [isolado.nomeisolado, [Validators.required, Validators.minLength(2)]],
      enderecoisolado: [isolado.enderecoisolado,[Validators.required]],
      numeroenderecoisolado: [isolado.numeroenderecoisolado, [Validators.required]],
      datainicioisolamento: [isolado.datainicioisolamento, [Validators.required]],
      datafimisolamento: [isolado.datafimisolamento, [Validators.required]]
    })
  }
  //retorna pq vai ser parametro de funcao
  private criarCadastroIsoladoBranco():Isolado{
    return{
      id: null,
      dataregistro: null,
      nomeisolado: null,
      enderecoisolado: null,
      numeroenderecoisolado: null,
      datainicioisolamento: null,
      datafimisolamento: null,
    }as Isolado
  }

  cadastrar(){
    this.cadastroIsolado.markAllAsTouched();
    if(this.cadastroIsolado.invalid){
      return
    }
    const isolado = this.cadastroIsolado.getRawValue() as Isolado;
    this.salvar(isolado);
  }

  private salvar(isolado: Isolado){
    this.isoladosservice.saveIsolado(isolado)
    .subscribe(()=>{
      const initialState = {
        isolado,
        title: 'Dados do Isolado:',
        mensagem: '',
      };
      this.bsModalRef = this.modalService.show(ModalComponent, {initialState} );
      this.bsModalRef.content.closeBtnName = 'Close';
    },
    ()=>{
      this.resetar();
    })
    
  }

  resetar(){
    this.cadastroIsolado.reset();
  }

}
