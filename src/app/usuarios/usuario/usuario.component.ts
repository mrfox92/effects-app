import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ActivatedRoute } from '@angular/router';
import * as usuarioActions from '../../store/actions';
//  import { CargarUsuario } from '../../store/actions/usuario.actions';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  public usuario: Usuario;
  public loading: boolean;
  public error: any;

  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit() {

    this.route.params.subscribe( params => {
      //  obtenemos el parametro id de la ruta activa
      const id = params.id;
      //  realizamos el dispatch de la accion
      this.store.dispatch( new usuarioActions.CargarUsuario( id ) );
    });

    //  nos suscribimos al elemento usuario del store
    this.store.select('usuario').subscribe( resp => {
      this.usuario = resp.user;
      this.loading = resp.loading;
      this.error = resp.error;
    });
  }

}
