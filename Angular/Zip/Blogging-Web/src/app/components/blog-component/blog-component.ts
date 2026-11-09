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
                titulo: "Ibanez RG470DX Tokyo Midnight",
                imagen: "https://www.matguitars.com/52178-superlarge_default/ibanez-rg470dx-tokyo-midnight.jpg",
                texto: "Top 5 Guitarras de 2026",
                fecha: "2026-11-01"
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
            html += `<article class="card shadow-sm border-0 mb-4">
            <img src="${noticia.imagen}" class="card-img-top" alt="${noticia.titulo}" style="height: 250px; object-fit: cover;">
            <div class="card-body">
                <h3 class="card-title fw-bold">${noticia.titulo}</h3>
                <p class="card-text">${noticia.texto}</p>
                <small class="text-muted">Publicado el ${noticia.fecha}</small>
            </div>
        </article>`;
        });
        return html;
    }
}