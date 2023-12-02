import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  standalone: true,
  imports: [],
  templateUrl: './conteudo.component.html',
  styleUrl: './conteudo.component.css'
})
export class ConteudoComponent {
  @Input()
tituloPost:string="Desenvolvedor Web"
@Input()
altImagem:string="Desenvolvedor"
@Input()
imagemPost:string="https://th.bing.com/th/id/OIP.f8DdfONO6bQbLQxktqxzqwHaDt"
@Input()
descricaoPost: string = "Um Desenvolvedor Web é um profissional que programa e projeta sites e aplicações web. Eles são proficientes em várias linguagens de programação, como HTML, CSS, JavaScript, e muitas vezes têm experiência com frameworks e bibliotecas, como React, Angular ou Vue.js. Desenvolvedores Web são responsáveis por criar e manter websites que são atraentes, funcionais e fáceis de navegar para proporcionar uma experiência de usuário positiva. Eles trabalham em estreita colaboração com os clientes ou equipes de produto para entender as necessidades do usuário e traduzi-las em soluções técnicas. Eles também são responsáveis por garantir que os sites sejam otimizados para desempenho e SEO, e que sejam compatíveis com vários navegadores e dispositivos. Além disso, eles frequentemente trabalham com bancos de dados e APIs para integrar funcionalidades de back-end. Desenvolvedores Web devem ter habilidades de resolução de problemas, atenção aos detalhes e uma compreensão sólida dos princípios de design e usabilidade. Eles devem estar atualizados com as últimas tendências e tecnologias na indústria da web para criar soluções modernas e inovadoras. Em resumo, um Desenvolvedor Web desempenha um papel crucial na criação de experiências online envolventes e eficazes que atendem às necessidades dos usuários e alcançam os objetivos de negócios.";

}
