import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as usuarioActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuarioEffects {

    constructor(
        private actions$: Actions,
        public usuarioService: UsuarioService
    ) {}

    @Effect()
    cargarUsuario$: Observable<Action> = this.actions$
        .pipe(
            ofType( usuarioActions.CARGAR_USUARIO )
        )
        .pipe( switchMap( ( action: usuarioActions.CargarUsuario ) => {

            return this.usuarioService.getUserById( action.id )
                .pipe(
                    map( user => new usuarioActions.CargarUsuarioSuccess(user) ),
                    catchError( error => of( new usuarioActions.CargarUsuarioFail(error) ) )
                );
        }) );
}
