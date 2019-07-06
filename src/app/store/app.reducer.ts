import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

//    creamos la interface que maneja el estado de nuestra app
export interface AppState {
    usuarios: reducers.UsuariosState;
    usuario: reducers.UsuarioState;
}

//    declaramos todas nuestras funciones reducers para inicializar el estado de nuestra app

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: reducers.usuariosReducer,
    usuario: reducers.usuarioReducer
};
