var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    FROM medida
                    WHERE fk_aquario = ${idAquario}
                    ORDER BY id DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idAquario) {

    var instrucaoSql = `SELECT 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
                        fk_aquario 
                        FROM medida WHERE fk_aquario = ${idAquario} 
                    ORDER BY id DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUsuariosTotais(){
    
    var instrucaoSql = 'SELECT count(id_usuario) as total FROM usuario;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMotivosTotais(){

    var instrucaoSql = 'SELECT motivo, COUNT(*) AS total_usuarios FROM usuario GROUP BY motivo ORDER BY total_usuarios DESC LIMIT 1;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMaisFamosa(){
    var instrucaoSql = 'SELECT person, COUNT(*) AS total_usuarios FROM usuario GROUP BY person ORDER BY total_usuarios DESC LIMIT 1;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function graficoMaisFamosa(){
    var instrucaoSql = 'SELECT person as personagens, COUNT(id_usuario) AS total_usuarios FROM usuario GROUP BY person ORDER BY total_usuarios DESC LIMIT 2;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

function graficoMaiorRegiao(){
    var instrucaoSql = 'SELECT regiao, COUNT(*) AS total_usuarios FROM usuario GROUP BY regiao ORDER BY total_usuarios DESC LIMIT 4;'
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUsuariosTotais,
    buscarMotivosTotais,
    buscarMaisFamosa,
    graficoMaisFamosa,
    graficoMaiorRegiao
};