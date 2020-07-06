//globais
var corpo_tabela = document.querySelector("tbody");
//Objeto
function dados(userId, id, body, title){
    this.userId = userId;
    this.id = id;
    this.body = body;
    this.title = title;  
}
    this.criar_linha_tabela = function(){
        //Elementos criados
        var linha = document.createElement("tr");
        var campo_userId = document.createElement("td");
        var campo_id = document.createElement("td");
        var campo_body= document.createElement("td");
        var campo_title= document.createElement("td");
        //Nos criados
        var texto_userId = document.createTextNode(this.userId);
        var texto_id = document.createTextNode(this.id);
        var texto_body = document.createTextNode(this.body);
        var texto_title = document.createTextNode(this.title);
        // Vinculo estabelecido
        campo_userId.appendChild(texto_userId);
        campo_id.appendChild(texto_id);
        campo_body.appendChild(texto_body);
        campo_title.appendChild(texto_title);
        linha.appendChild(campo_userId);
        linha.appendChild(campo_id);
        linha.appendChild(campo_title);
        linha.appendChild(campo_body);
        //Vinculo entre elementos e documento
        corpo_tabela.appendChild(linha);
    }
    //.
   function carregarTela(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        for(var i = 0; i<json.length; i++){
            dados(json[i].userId,json[i].id,json[i].body,json[i].title);
            criar_linha_tabela();  
        }
        
    });
    }
    carregarTela();

    


    
