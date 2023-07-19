import { Component, ViewChild } from '@angular/core';
import { QuillEditorComponent } from 'ngx-quill';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dummyApp';
  hide = false;
  backgroundColor = '';

  @ViewChild('editor', {
    static: true
  })editor!: QuillEditorComponent;
}
