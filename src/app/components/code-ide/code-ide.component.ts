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
    this.scriptCodeEditor ='select * from Clientes';

    this.resultSolution = {
      state:'Resultado',
      message:[
        {
          id: '1',
          nombre: 'Alex'
        },
        {
          id: '2',
          nombre: 'Alex pablo anibal mendex pablo'
        },      {
          id: '1',
          nombre: 'Alex'
        },
        {
          id: '2',
          nombre: 'Alex pablo anibal mendex pablo'
        },      {
          id: '1',
          nombre: 'Alex'
        },
        {
          id: '2',
          nombre: 'Alex pablo anibal mendex pablo'
        },      {
          id: '1',
          nombre: 'Alex'
        },
        {
          id: '2',
          nombre: 'Alex pablo anibal mendex pablo pablo jjjjjjjjjjjjjjjjjjjjjjjjdddddddddddddddddd'
        },      {
          id: '1',
          nombre: 'Alex'
        },
        {
          id: '2',
          nombre: 'Alex pablo anibal mendex pablo'
        },
      ]
    }
  }

  getKeyObj(objeto: any): string[] {
    return Object.keys(objeto);
  }

  challenge(){
    if (this.scriptCodeEditor.trim() == "") {
      this.resultSolution ={
        state: "Error",
        message: "Proporcione una solucion"
      }
      return
    }


    const expresionRegular = /^(?!.*\binsert\b)(?!.*\bdelete\b)(?!.*\bupdate\b)[\s\S]*$/i;
    if ( !expresionRegular.test(this.scriptCodeEditor.toLocaleLowerCase())) {
      this.resultSolution ={
        state: "Error",
        message: "Esta sintaxis no se admite"
      }
      return
    }

    this.scriptService.validateSolution(this.scriptCodeEditor)
      .subscribe( {
        next: result => this.resultSolution = {state:"Exito", message:result},
        error: err => this.resultSolution = {state:"Error",message:err.error}
      })

  }

}
