

import { UsuariosEffects } from './usuarios.effects';
import { UsuarioEffects } from './usuario.effects';


//    declaramos e inicializamos nuestro arreglo de efectos
export const effectsArr: any[] = [ UsuariosEffects, UsuarioEffects ];


//    dejamos este archivo listo para ser importado desde otro lugar del proyecto
export * from './usuarios.effects';
export * from './usuario.effects';

