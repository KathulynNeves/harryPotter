function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase()
    
  
    // Inicializa uma string vazia para armazenarmos os resultados
    let resultados = "";
  
    if(campoPesquisa == ""){
        section.innerHTML = "Nada foi encontrado"
        return
    }

    let nome = "";
    let tags = "";

    // Itera sobre cada registro da pesquisa
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        tags = dado.tags.toLowerCase();
        //se titulo está incluso no campoPesquisa
        if(nome.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            // Cria uma div para cada resultado, formatando os dados do personagem (nome, descrição, casa e varinha)
            resultados += `
            <div class="item-resultado">
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta">${dado.casa}</p>
                <p class="descricao-meta">${dado.varinha}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;
        }
      
    }
    if(!resultados){
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
  }