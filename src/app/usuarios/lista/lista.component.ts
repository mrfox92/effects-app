import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';

import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  public usuarios: Usuario[] = [];
  public loading: boolean;
  public error: any;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    //  leemos desde el store los usuarios
    this.store.select('usuarios').subscribe( usuarios => {
      this.usuarios = usuarios.users;
      this.loading = usuarios.loading;
      this.error = usuarios.error;
    });
    //  Hacemos el dispatch de la accion CARGAR_USUARIOS
    //  al momento de enviar la accion al reducer se disparara nuestro effect en usuarios.effects
    const accion = new usuariosActions.CargarUsuarios();
    this.store.dispatch( accion );

  }

}
