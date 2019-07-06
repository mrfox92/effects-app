import { Usuario } from '../../models/usuario.model';
//    importamos nuestras acciones
import * as fromUsuarios from '../actions';

//    creamos nuestra interface para manejar el estado del modulo de usuarios

export interface UsuariosState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

//    ahora declaramos el estado inicial

const initialState: UsuariosState = {
    users: [],
    loaded: false,
    loading: false,
    error: null
};

//    creamos nuestra funcion reducer

/* utilizamos el operador de propagacion para retornar el objeto tal y como se encuentra y realizar
algunas modificaciones, a las cuales se les podra dar seguimiento, ya que al utilizar este operador
rompemos el paso de datos por referencia tipico de javascript*/

export function usuariosReducer( state = initialState, action: fromUsuarios.usuariosAcciones ): UsuariosState {

    switch ( action.type ) {
        case fromUsuarios.CARGAR_USUARIOS:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuarios.CARGAR_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                users: [...action.usuarios]
            };

        case fromUsuarios.CARGAR_USUARIOS_FAIL:
            return {
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };
        default:
            return state;
    }

}


