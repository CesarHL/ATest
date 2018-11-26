import { Component } from '@angular/core'
@Component({
    selector: 'app-footer',
    templateUrl:'./footer.component.html'
})
export class FooterComponent {
  autor: any = {
    nombre: 'César Erick',
    apellido: 'Hernandez',
    direccion: {
      calle: 'Manuel Acuña',
      numero: '12',
      col: 'Benito Juarez 3ra secc'
    }
  }
}
