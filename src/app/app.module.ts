import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { PrincipalComponent } from './principal/principal.component';
import { ListaMasculinaComponent } from './lista-masculina/lista-masculina.component';
import { NgbCarouselModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaDestaqueComponent } from './lista-destaque/lista-destaque.component';
import { FemininaComponent } from './feminina/feminina.component';
import { FormsModule } from '@angular/forms';
import { ListaUnissexComponent } from './lista-unissex/lista-unissex.component';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    PrincipalComponent,
    ListaMasculinaComponent,
    FemininaComponent,
    ListaDestaqueComponent,
    ListaUnissexComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    NgbCarouselModule,
    FormsModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}