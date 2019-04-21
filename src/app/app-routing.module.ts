import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioAdicionarComponent } from './usuario/usuario-adicionar.component';

const routes: Routes = [
  { path: '', component: UsuarioComponent },
  { path: 'adicionar', component: UsuarioAdicionarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
