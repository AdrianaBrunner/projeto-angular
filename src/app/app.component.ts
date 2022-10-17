import { Component, OnInit } from '@angular/core';
import { ConsultaServiceService } from './consulta-service.service';
import { Bancos } from './interface/Bancos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listaBancos: Bancos[] = [];
  bancoFiltrado: Bancos[] = []

  constructor (private consulta: ConsultaServiceService) {}

  ngOnInit(): void {
    this.consulta.getBancos().subscribe((listaBancos: Bancos[]) => {
      this.listaBancos = listaBancos
      this.bancoFiltrado = this.listaBancos
    })
  }

  filtrar(event: Event){
    let filtro = event.target as HTMLInputElement
    this.bancoFiltrado = this.listaBancos.filter((banco: Bancos) => {
      return banco.fullName.toLowerCase().includes(filtro.value.toLowerCase())
    })
  }

}
 


