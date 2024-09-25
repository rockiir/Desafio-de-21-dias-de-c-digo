const colunas = document.querySelectorAll(".coluna");

// Função para atualizar o contador na tela
function atualizarContador(contadorElement, contadorValor) {
    contadorElement.textContent = contadorValor;
}

for (let coluna of colunas) {
    let contadorValor = 0; 

    const contadorElement = document.createElement("div");
    contadorElement.classList.add("contador");
    contadorElement.textContent = contadorValor;
    coluna.appendChild(contadorElement);

    const esferaCima = document.createElement("div");
    esferaCima.classList.add("esfera", "esfera-cima");
    esferaCima.style.top = "0%"; 
    coluna.appendChild(esferaCima);

    for (let i = 0; i < 4; i++) {
        const esferaBaixo = document.createElement("div");
        esferaBaixo.classList.add("esfera", "esfera-baixo");
        esferaBaixo.style.top = `${40 + i * 20}%`;
        coluna.appendChild(esferaBaixo);

esferaBaixo.addEventListener("click", () => {
    let esferasSuperioresNaPosicaoOriginal = true;

    for (let outraColuna of colunas) {
        const outrasEsferasSuperiores = outraColuna.querySelector(".esfera-cima");
        if (outrasEsferasSuperiores && outrasEsferasSuperiores.style.top !== "0%") {
            esferasSuperioresNaPosicaoOriginal = false;
            break;
        }
    }

    if (esferaBaixo.classList.contains("ativo") && esferasSuperioresNaPosicaoOriginal) {
        esferaBaixo.style.top = `${40 + i * 20}%`; 
        contadorValor -= 1; 
    } else if (!esferaBaixo.classList.contains("ativo")) {
        esferaBaixo.style.top = `${30 + i * 10}%`; 
        contadorValor += 1; 
    }

    esferaBaixo.classList.toggle("ativo"); 
    atualizarContador(contadorElement, contadorValor); 
});

    }

    esferaCima.addEventListener("click", () => {
        if (esferaCima.classList.contains("ativo")) {
            esferaCima.style.top = "0%"; 
            contadorValor -= 5; 
        } else {
            esferaCima.style.top = "20%"; 
            contadorValor += 5; 
        }
        esferaCima.classList.toggle("ativo"); 
        atualizarContador(contadorElement, contadorValor); 
    });
}
