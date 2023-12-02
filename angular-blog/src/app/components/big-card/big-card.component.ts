import { Component } from '@angular/core';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {
fotoCard:string='https://th.bing.com/th/id/R.bb79a099832ae287d3778941b59b5bc5?rik=%2fZCWjB56SYe%2few&pid=ImgRaw&r=0' 
cardTitulo:string="Desenvolvedor Angular"
url:string= "https://github.com/criarsite"
cardDescricao:string="Crie aplicações web modernas e dinâmicas usando o framework Angular e outras tecnologias relacionadas, como TypeScript, Node.js ou outros..."
data:string="02/12/2023"

constructor(){

}
ngInit(){

}
}
