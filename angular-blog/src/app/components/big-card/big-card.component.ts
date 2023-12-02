import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
 @Input()
fotoCard:string='' 
@Input()
cardTitulo:string=""
@Input()
url:string= ""
@Input()
cardDescricao:string=""
@Input()
data:string=""

constructor(){

}
ngInit(){

}
}
