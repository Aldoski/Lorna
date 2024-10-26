import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../service/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
 export class HomePage implements OnInit{
  items:any;

  constructor(
    private peliculasService:PeliculasService
  ) {}

  
   ngOnInit(): void{
    const peliculas=localStorage.getItem('peliculas');
    if(peliculas){
      console.log('peliculas desde el localStorage');
      this.items=JSON.parse(peliculas);
     }
      else{
       this.peliculasService.obtenerPeliculas().subscribe((peliculas)=>{
        this.items=peliculas;
        console.log('peliculas desde la api',peliculas);
        localStorage.setItem('peliculas',JSON.stringify(this.items));
      });


       
    }}
  }






