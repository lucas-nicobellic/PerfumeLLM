
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProdutosService } from '../services/produtos.service';
import { Observable } from 'rxjs';

interface BannerSlide {
  image: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
  alt: string;
  theme?: 'dark' | 'light';
}
@Component({
  selector: 'app-lista-destaque',
  templateUrl: './lista-destaque.component.html',
  styleUrl: './lista-destaque.component.css',
  standalone: false 
})
export class ListaDestaqueComponent implements OnInit, OnDestroy {

    produtos$!: Observable<any[]>;

    constructor(private produtosService: ProdutosService){}

   slides: BannerSlide[] = [
    {
      image: 'lataffa-pisa.png',
      title: 'Leve e Marcante',
      subtitle: 'Um perfume equilibrado que combina suavidade com um toque inesquecível.',
      buttonText: 'Ver o valor',
      buttonLink: '#lattafa',
      alt: 'Banner do perfume Pisa',
      theme: 'light'
    },
    {
      image: 'club.png',
      title: 'Poder e Frescor',
      subtitle: 'Uma explosão cítrica com fundo amadeirado que transmite confiança e presença.',
      buttonText: 'Ver o valor',
      buttonLink: '#club',
      alt: 'Banner masculino',
      theme: 'light'
    },
    {
      image: 'liquid.png',
      title: 'Profundidade e Elegância',
      subtitle: 'Uma experiência olfativa rica, com notas amadeiradas que envolvem e impressionam.',
      buttonText: 'Ver o valor',
      buttonLink: '#liquid_brun',
      alt: 'Banner masculino',
      theme: 'light'
    }
  ];

  currentIndex = 0;
  private intervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.produtos$ = this.produtosService.listar();

    this.produtos$.subscribe({
      next: (dados) => console.log('Produtos', dados),
      error: (err) => console.error('Erro:', err)
    });

    this.startAutoPlay();
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.restartAutoPlay();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.restartAutoPlay();
  }

  prevSlide(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.restartAutoPlay();
  }

  trackByIndex(index: number): number {
    return index;
  }

  private startAutoPlay(): void {
    this.intervalId = setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    }, 5000);
  }

  private stopAutoPlay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private restartAutoPlay(): void {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  scrollToSection(sectionId: string | undefined): void {
    if (!sectionId) return;

    const element = document.querySelector(sectionId);

    if (element){
      const yOffset = -80 //
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
        
      });
      element.classList.add('highlighted');

      setTimeout(() => {
        element.classList.remove('highlighted');
      }, 5000);
    }
  }
}
