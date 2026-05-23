import { Component } from '@angular/core';

declare var bootstrap: any;
@Component({
  selector: 'app-menu-superior',
  templateUrl: './menu-superior.component.html',
  styleUrl: './menu-superior.component.css',
  standalone: false
})
export class MenuSuperiorComponent {

  FecharMenu(){
     const navbar = document.getElementById('navbarNav');

     if (navbar && window.innerWidth < 992){
       const bsCollapse = bootstrap.Collapse.getInstance(navbar)
       || new bootstrap.Collapse(navbar);
       bsCollapse.hide();
     }
  }
}
