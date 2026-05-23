import { Component } from '@angular/core';

@Component({
  selector: 'app-feminina',
  templateUrl: './feminina.component.html',
  standalone: false,
  styleUrl: './feminina.component.css'
})
export class FemininaComponent {
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
