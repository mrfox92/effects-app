import { Usuario } from '../../models/usuario.model';
import * as fromUsuario from '../actions';

//    creamos nuestra interface para manejar el estado del modulo de usuarios

export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

//    ahora declaramos el estado inicial

const initialState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer( state = initialState, action: fromUsuario.usuarioAcciones ): UsuarioState {

    switch ( action.type ) {
        case fromUsuario.CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case fromUsuario.CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: { ...action.usuario }
            };

        case fromUsuario.CARGAR_USUARIO_FAIL:
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


