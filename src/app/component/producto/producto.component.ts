import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/domain/producto';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos:Producto[];

  constructor(public productoService:ProductoService) { }

  ngOnInit(): void {
    this.productoService.findAll().subscribe(data=>{
      this.productos=data;
    });
  }

}
