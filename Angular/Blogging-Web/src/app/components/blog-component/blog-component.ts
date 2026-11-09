import { Component } from '@angular/core';
import { Iblog } from '../../interface/blogg';
import { FormsModule } from '@angular/forms';

@Component({
    imports: [FormsModule],
    selector: 'app-blog-component',
    styleUrl: './blog-component.css',
    templateUrl: './blog-component.html',
})
export class BlogComponent {
    arrNoticias: Iblog[];
    newNoticia: Iblog;

    constructor() {
        this.arrNoticias = [
            {
                titulo: "Bienvenidos al blog",
                imagen: "https://picsum.photos/seed/uno/600/300",
                texto: "Esta es la primera noticia de nuestro blog hecho con Angular.",
                fecha: "2026-11-01"
            },
            {
                titulo: "Aprendiendo Angular",
                imagen: "https://picsum.photos/seed/dos/600/300",
                texto: "Componentes, data binding y control flow en una SPA.",
                fecha: "2026-11-05"
            }
        ];

        this.newNoticia = {
            titulo: "",
            imagen: "",
            texto: "",
            fecha: ""
        }
    }

    guardarDatos(): void {
        if (
            this.newNoticia.titulo.trim() === "" ||
            this.newNoticia.imagen.trim() === "" ||
            this.newNoticia.texto.trim() === "" ||
            this.newNoticia.fecha === ""
        ) {
            alert("Todos los campos son obligatorios");
        } else {
            this.arrNoticias.push(this.newNoticia);

            this.newNoticia = {
                titulo: "",
                imagen: "",
                texto: "",
                fecha: ""
            }
        }
    }

    cargarDatos(): string {
        let html: string = "";
        this.arrNoticias.forEach(noticia => {
            html += `<article class="card mb-4">
                        <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}">
                        <div class="card-body">
                            <h3 class="card-title">${noticia.titulo}</h3>
                            <p class="card-text">${noticia.texto}</p>
                            <small class="text-muted">Publicado el ${noticia.fecha}</small>
                        </div>
                    </article>`;
        });
        return html;
    }
}