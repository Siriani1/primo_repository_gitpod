export class Post{
  nome: string;
  testo: string;
  like: number;

  constructor(nome: string, testo: string, like?: number){
    this.nome = nome;
    this.testo = testo;
    this.like = like || 0;
  }

  voteUp(): void {
    this.like += 1;
  }
}
