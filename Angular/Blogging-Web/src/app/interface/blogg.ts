import { UrlCodec } from "@angular/common/upgrade";

export interface Blogg {
    titulo :  String;
    imgaen : UrlCodec;
    noticia : String; 
    fecha : Date;
}
