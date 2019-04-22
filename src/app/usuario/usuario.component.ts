import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UsuarioService } from './usuario.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { IUsuario } from './usuario';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-usuario',
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit, OnDestroy {

    usuarios: IUsuario[] = [];
    private listaSubscription: Subscription = new Subscription();

    constructor(
        private usuarioService: UsuarioService
    ) { }

    ngOnInit() {
        this.listaSubscription.add(this.usuarioService.listarTodos()
            .subscribe(
                (res: HttpResponse<IUsuario[]>) => {
                    this.usuarios = res.body;
                },
                (res: HttpErrorResponse) => {
                    console.log(res);
                }
            )
        );

    }

    ngOnDestroy(): void {
        this.listaSubscription.unsubscribe();
    }

}
