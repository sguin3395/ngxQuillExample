import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import Counter from './counter';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser'

import { QuillModule } from 'ngx-quill';

const customToolbar: { [key: string]: any } = {
  toolbar: [
		['bold', 'italic', 'underline', 'strike'], // toggled buttons
		['blockquote', 'code-block'],

		[{ 'list': 'ordered' }, { 'list': 'bullet' }],
		[{ 'script': 'sub' }, { 'script': 'super' }], // superscript/subscript
		[{ 'indent': '-1' }, { 'indent': '+1' }], // outdent/indent
    
		[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

		[{ 'color': [] }, { 'background': [] }], // dropdown with defaults from theme
		[{ 'font': [] }], [{ 'align': [] }],
    
	],
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    QuillModule.forRoot({
      // customModules: [{
      //   implementation: Counter,
      //   path: 'modules/counter'
      // }],
      customOptions: [{
        import: 'formats/font',
        whitelist: ['mirza', 'roboto', 'aref', 'serif', 'sansserif', 'monospace']
      }],
      modules: customToolbar
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
