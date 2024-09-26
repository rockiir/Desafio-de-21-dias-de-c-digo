
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;     
        this.idade = idade;    
        this.tipo = tipo;      
    }

    atacar() {
        let ataque; 

        if (this.tipo === "mago") {
            ataque = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "usou espada";
        } else if (this.tipo === "monge") {
            ataque = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "usou shuriken";
        } else {
            ataque = "usou uma arma desconhecida"; 
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new Heroi("Aragorn", 30, "guerreiro");
heroi1.atacar(); 

const heroi2 = new Heroi("Gandalf", 300, "mago");
heroi2.atacar(); 

const heroi3 = new Heroi("Master Roshi", 200, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto", 17, "ninja");
heroi4.atacar(); 
