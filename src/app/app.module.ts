import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { FooterComponent } from './_layout/footer/footer.component';
import { HeaderComponent } from './_layout/header/header.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { OptionsComponentsComponent } from './components/options-components/options-components.component';
import { RightWorkplaceComponent } from './components/right-workplace/right-workplace.component';
import { LeftWorkplaceComponent } from './components/left-workplace/left-workplace.component';
import { JsonPreviewComponent } from './components/json-preview/json-preview.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainScreenComponent,
    OptionsComponentsComponent,
    RightWorkplaceComponent,
    LeftWorkplaceComponent,
    JsonPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
