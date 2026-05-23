import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDestaqueComponent } from './lista-destaque/lista-destaque.component';
import { FemininaComponent } from './feminina/feminina.component';
import { ListaMasculinaComponent } from './lista-masculina/lista-masculina.component';
import { ListaUnissexComponent } from './lista-unissex/lista-unissex.component';

const routes: Routes = [
  //caminho dos destaques
  { path: 'lista-destaque', component: ListaDestaqueComponent },
  { path:'feminina', component: FemininaComponent},
  {path: 'lista-masculina', component:ListaMasculinaComponent},
  {path:'lista-unissex', component:ListaUnissexComponent},
  //aqui faz com que caso o usuario esteja deixando a URL vazia, sem nenhum direção, força ele a levar para a pagina principal
  { path: '', redirectTo:'/lista-destaque', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
