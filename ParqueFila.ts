export class ParqueFila{
private pessoas: string[] = []

public entrarNaFila(nome: string): void{
 this.pessoas.unshift(nome)
        //coloca início do vetor
    }

public atender(): string | undefined{
if(this.estaVazia()){
console.log("A fila está vazia!")
 return undefined
}
return this.pessoas.pop()
//tira o vetor
    }

public proximaDaFila(): string{
if(this.estaVazia()){
console.log("A fila está vazia!")
    return undefined
}
 return this.pessoas[this.pessoas.length - 1]
    }
public estaVazia(): boolean{
return this.pessoas.length === 0
    }

 public tamanho(): number{
 return this.pessoas.length
    }
}