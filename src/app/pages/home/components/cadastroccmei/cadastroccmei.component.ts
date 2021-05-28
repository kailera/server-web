import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ValidarCamposService } from 'src/app/shared/components/campos/validar-campos.service';
import { Ccmei } from 'src/app/shared/models/ccmei';

@Component({
  selector: 'app-cadastroccmei',
  templateUrl: './cadastroccmei.component.html',
  styleUrls: ['./cadastroccmei.component.css']
})
export class CadastroccmeiComponent implements OnInit {
  id:number;
  cadastroMei:FormGroup;
  
  constructor(public validacao: ValidarCamposService,
              private fb: FormBuilder,
              private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.params['id'];
    if(this.id){
      return;
    }else{
      this.CriarFormulario(this.criarFormularioBranco());
    }
  }


  private CriarFormulario(ccmei:Ccmei):void{
    this.cadastroMei = this.fb.group({
      datacriacao:[ccmei.datacriacao,[Validators.required]],
      razaosocial:[ccmei.razaosocial, [Validators.required, Validators.minLength(7)]],
      cnpj:[ccmei.cnpj, [Validators.required, Validators.minLength(11)]],
      nomefantasia:[ccmei.nomefantasia, [Validators.required, Validators.minLength(7)]],
      endereco:[ccmei.endereco, [Validators.required, Validators.minLength(5)]],
      numeroendereco:[ccmei.endereconumero, [Validators.required, Validators.maxLength(5)]],
      fiscalresponsavel:[ccmei.fiscalresponsavel, [Validators.required]]
    })
  }

  private criarFormularioBranco():Ccmei{
    return{
      id:null,
      datacriacao:null,
      razaosocial:null,
      cnpj:null,
      nomefantasia:null,
      endereco:null,
      endereconumero:null,
      fiscalresponsavel:null
    } as Ccmei
  }


  cadastrar(){
    this.cadastroMei.markAllAsTouched();
    if(this.cadastroMei.invalid){
      return
    }

  }

  resetar(){
    
  }
}
