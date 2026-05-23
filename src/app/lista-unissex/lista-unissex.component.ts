import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-unissex',
  templateUrl: './lista-unissex.component.html',
  styleUrl: './lista-unissex.component.css',
  standalone: false
})
export class ListaUnissexComponent {
 mostrarPesquisa = false;
  termoPesquisa = '';

filtrarPerfumes() {
  const cards = document.querySelectorAll('.produto-card');

  cards.forEach((card: any) => {
    const nome = card.innerText.toLowerCase();

    if (nome.includes(this.termoPesquisa.toLowerCase())) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
}
