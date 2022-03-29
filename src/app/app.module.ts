import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import {HttpClientModule} from '@angular/common/http';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PorfolioComponent } from './componentes/porfolio/porfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PorfolioService } from './servicios/porfolio.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AcercaDeComponent,
    NavBarComponent,
    EducacionComponent,
    ExperienciaComponent,
    IniciarSesionComponent,
    PorfolioComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
