import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

//ver si sirven
import 'codemirror/lib/codemirror';
import 'codemirror/mode/sql/sql';
import { Result } from '../../models/result';
import { NgClass, NgFor } from '@angular/common';
import { ScriptService } from '../../services/script.service';

@Component({
  selector: 'app-code-ide',
  standalone: true,
  imports: [
    CodemirrorModule,
    FormsModule,
    NgClass,
    NgFor
  ],
  templateUrl: './code-ide.component.html',
  styleUrl: './code-ide.component.scss'
})
export class CodeIDEComponent {
  constructor(private scriptService:ScriptService){}
  scriptCodeEditor:string = "";
  resultSolution?: Result;

  codeMirrorOptions: any = {
    theme: 'dracula',
    mode: 'text/x-mysql',
    lineNumbers: true,
    lineWrapping: false,
    gutters: ['CodeMirror-linenumbers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    smartIndent: true,
    indentWithTabs: true,
  };


  ngOnInit(){
    this.scriptCodeEditor ='select * from Clientes \n insert';
  }

  getKeyObj(objeto: any): string[] {
    return Object.keys(objeto);
  }

  challenge(){    
    const solutionChallenge = this.scriptCodeEditor
                                    .split('\n')
                                    .filter((piece)=> piece.trim())
                                    .map((piece)=> piece.trim())
                                    .join(' ')
    
    if (this.validEmptySolution(solutionChallenge)) {
      return;
    }

    if (this.invalidSqlCommand(solutionChallenge)) {
      return;
    }
    console.log(solutionChallenge);
    this.scriptService.validateSolution(solutionChallenge)
      .subscribe( {
        next: result =>{
          this.resultSolution = {state:"Exito", message:result}
        },
        error: err => this.resultSolution = {state:"Error",message:err.error}
      })
  }

  executeConsult(){
    const solutionChallenge = this.scriptCodeEditor
                                    .split('\n')
                                    .filter((piece)=> piece.trim())
                                    .map((piece)=> piece.trim())
                                    .join(' ')
    if (this.validEmptySolution(solutionChallenge)) {
      return;
    }

    if (this.invalidSqlCommand(solutionChallenge)) {
      return;
    }

  }



  invalidSqlCommand(code:string):boolean{
    const expresionRegular = /^(?!.*\binsert\b)(?!.*\bdelete\b)(?!.*\bupdate\b)[\s\S]*$/i;

    if ( !expresionRegular.test(code.toLocaleLowerCase())) {
      this.resultSolution ={
        state: "Error",
        message: "El codigo que escribio no se admite, lea detenidamente el desafio"
      }
      console.log(code);
      return true
    }
    return false
  }


  validEmptySolution(code:string):boolean{
    if (code == "") {
      this.resultSolution ={
        state: "Error",
        message: "No hay codigo que ejecutar"
      }
      return true
    }
    return false
  }



}
