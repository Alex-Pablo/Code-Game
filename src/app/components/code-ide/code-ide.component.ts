import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

//ver si sirven
import 'codemirror/lib/codemirror';
import 'codemirror/mode/sql/sql';

@Component({
  selector: 'app-code-ide',
  standalone: true,
  imports: [
    CodemirrorModule,
    FormsModule
  ],
  templateUrl: './code-ide.component.html',
  styleUrl: './code-ide.component.scss'
})
export class CodeIDEComponent {

  challengeCode?:string;

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
    this.challengeCode ='select * from Clientes'
  }


}
