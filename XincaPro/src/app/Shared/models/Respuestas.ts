import { CategoriaMod } from "./categoriaMod";
import { PalabraMod } from "./palabraMod";
import { PerfilMod } from "./perfilMod";

export class RespuestaPerfil{
    state:number;
    data:PerfilMod[];
    message:string
}

export class RespuestaPalabra{
    state:number;
    data:PalabraMod[];
    message:string
}

export class Respuesta{
    state:number;
    data:PalabraMod[];
    message:string
}

export class RespuestaCategoria{
    state:number;
    data:CategoriaMod[];
    message:string
}