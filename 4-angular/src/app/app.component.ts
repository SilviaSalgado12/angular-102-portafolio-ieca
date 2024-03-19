import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Pokemon } from './pokemon';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title: string = 'fundamentos-ag';
  private subtitle = 'fundamentos-ag-private';

  email = "edu@email.com"
  btnDisabled = true

  contadorOvejas = 1; 
   i=0;
   numregistrados=0;
  // objeto persona
  // llave - valor
  // llaves siempre es cadena
  persona: {
    nombre: string,
    edad?: number
  } = {
    nombre: ''
  }

  listaPersonas: string[] = []

  boxStyles = {
    background: 'black',
    width: 100,
    height: 100
  }

  registroInputs = {
    email: '',
    passkey: ''
  }

  pokedex: Pokemon[] = []

  nuevoPokemon: string = ''

  mostrarAlerta() {
    alert('Alera de event binding')  
  }

  agregarPersona() {
    this.listaPersonas.push(this.persona.nombre)
    this.persona.nombre = ''
  }
  
  eliminarNombre(i:number ){
    console.log(i)
 this.numregistrados=this.listaPersonas.length
      if(i==0){
        this.listaPersonas.shift();

      }else{
        this.listaPersonas.splice(i, i)
      }
  }
  contarOveja() {
    this.contadorOvejas += 1;
  }

  handlerRegistro() {
    console.log(this.registroInputs)
  }

  ngOnInit(): void {
    console.log('ngOnInit start...')
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=8&offset=${Math.floor(Math.random() * 250)}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.pokedex = data.results
      })
      .then(() => console.log('ngOnInit end...'))
  }


 

}