import { Injectable } from '@angular/core';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import * as usuariosActions from '../actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsuarioService } from '../../services/usuario.service';

@Injectable()
export class UsuariosEffects {
    //    escuchar acciones que son enviadas al store
    //    Nota: Con el simbolo de dolar le decimos que es una propiedad de tipo observable

    constructor(
        private actions$: Actions,
        public usuariosService: UsuarioService
    ) {}

    //    creamos una propiedad que quedara en escucha por la accion de CARGAR_USUARIOS
    //    como es un observable, este se disparara x cantidad de veces conforme se dispare la accion.
    //    Agregamos el decorador @Effect()
    //    Finalmente, cuando se llame la accion CARGAR_USUARIOS, veremos la accion por consola y la retornaremos

    @Effect()
    cargarUsuarios$: Observable<Action> = this.actions$
        .pipe(
            ofType( usuariosActions.CARGAR_USUARIOS )
        )
        .pipe( switchMap( () => {
            return this.usuariosService.getUsers()
                .pipe(
                    map( users => new usuariosActions.CargarUsuariosSuccess(users) ),
                    catchError( error => of( new usuariosActions.CargarUsuariosFail(error) ) )
                );
        }) );

    /*

        of operator: me permite convertir un elemento en un observable.
        switchMap operator: recibe un observable, lo cancela y regresa otro observable.


        ofType operator: filtra un observable de acciones dentro de un observable de acciones,
        cuyas cadenas de tipos le son pasadas.

        tap operator: is a RxJS pipeable operator that returns identical Observable
        as source Observable and can be used to perform side effect such as
        logging each values emitted by source Observable.

        tap tiene tres parametros opcionales:

        nextOrObserver: A normal Observable object to perform side effect.
        error: Callback for errors in source Observable.
        complete: Callback for completion of the source.
     */
}
