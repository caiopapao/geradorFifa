class Nivel{
    constructor(times, missoes, complicadores){
        this.times = times,
        this.missoes = missoes,
        this.complicadores = complicadores
    }
}

const nivel1 = new Nivel (
    ['Real Madrid', 'Barcelona', 'Atletico de Madrid', 'City', 'Liverpoll', 'Tottenham', 'United', 'Bayern', 'Borussia', 'PSG', 'Juventus', 'Inter', 'Milan', 'Benfica', 'Porto'],
    ['ganhar a champions na primeira temporada', 'o título da liga nacional na primeira temporada', 'Fazer mais de 80 gols na liga', 'ter pelo menos 4 jogadores no time da temporada da liga na primeira temporada', 'ganhar a champions com pelo menos 2 jogadores vindo da base em no máximo 3 temporadas'],
    ['as contratações poderão ser apenas de times da mesma liga', 'terá que vender ao menos 3 jogadores do time titular', 'terá que contratar ao menos 1 jogador da América do Sul para o time titular', 'as novas contratações serão com idade máxima a 24 anos', 'os jogadores do banco de reservas terão idade máxima igual ou menor que 23 anos', 'você só vai gastar com o que conseguir vendendo seus jogadores']    
)

const nivel2 = new Nivel(
    ['Sevilla', 'Betis', 'Real Sociedad', 'West Ham', 'Leicester', 'Arsenal', 'Leverkusen', 'Rb Leipzig', 'Lyon', 'Olympique', 'Mônaco', 'Lille', 'Rennes', 'Lazio', 'Atalanta', 'Fiorentina', 'Sporting', 'Braga'],
    ['ganhar a champions em 2 anos', 'o título da liga nacional em 2 anos', 'tomar menos de 30 gols na liga ', 'terminar a temporada com centroavante artilheiro da liga', 'ganhar ao menos uma taça na primeira temporada'],
    ['as contratações poderão ser apenas de times da mesma liga', 'terá que contratar ao menos 1 jogador da América do Sul para o time titular', 'as novas contratações serão com idade máxima de 23 anos', 'os jogadores do banco de reservas terão idade máxima igual ou menor que 22 anos', 'você só vai gastar com o que conseguir vendendo seus jogadores']
)

const nivel3 = new Nivel(
    ['Las Palmas (ESP)', 'Levante(ESP)', 'Alavés(ESP)', 'Granada(ESP)', 'Sunderland (ENG)', 'Hull City(ENG)', 'Huddersfield(ENG)', 'Cardiff(ENG)', 'Hamburg(ALEM)', 'Hannover(ALEM)', 'Bordeaux(FRAN)', 'Metz(FRAN)', 'Dijon(FRAN)', 'Amiens(FRAN)', 'Saint-Étienne(FRAN)'],
    ['Subir na primeira temporada', 'Classificar para a champions na segunda temporada', 'Vencer uma taça na primeira temporada', 'Campeão da liga principal na terceira temporada', 'Ter média de gols marcados superior a 2.5 na primeira temporada', 'Ter média de gols sofridos inferior a 0.9 na segunda temporada', 'Campeão da Europa League em 3 temporadas', 'Vencer a Europa League na segunda tempora (é preciso vencer a taça na primeira temporada)'],
    ['as contratações poderão ser apenas de times da mesma liga', 'terá que contratar ao menos 1 jogador da América do Boca Juniors para o time titular', 'terá que contratar ao menos 1 jogador da América do River Plate para o time titular', 'terá que contratar ao menos 1 jogador da MLS para o time titular', 'as novas contratações serão com idade mínima de 32 anos', 'os jogadores do banco de reservas deverão ser todos vindo da base', 'você só vai gastar com o que conseguir vendendo seus jogadores', 'A média de idade do time inferior a 24 anos']
)


const indiceTime1 = Math.floor(Math.random() * nivel1.times.length);
const indiceMissao1 = Math.floor(Math.random() * nivel1.missoes.length);
const indiceComplicador1 = Math.floor(Math.random() * nivel1.complicadores.length);

const nivel1Aleatorio = {
    timeAleatorio1: nivel1.times[indiceTime1],
    missaoAleatoria1: nivel1.missoes[indiceMissao1],
    complicadorAleatorio1: nivel1.complicadores[indiceComplicador1]
}


const indiceTime2 = Math.floor(Math.random() * nivel2.times.length);
const indiceMissao2 = Math.floor(Math.random() * nivel2.missoes.length);
const indiceComplicador2 = Math.floor(Math.random() * nivel2.complicadores.length);

const nivel2Aleatorio = {
    timeAleatorio2: nivel2.times[indiceTime2],
    missaoAleatoria2: nivel2.missoes[indiceMissao2],
    complicadorAleatorio2: nivel2.complicadores[indiceComplicador2]
}



const indiceTime3 = Math.floor(Math.random() * nivel3.times.length);
const indiceMissao3 = Math.floor(Math.random() * nivel3.missoes.length);
const indiceComplicador3 = Math.floor(Math.random() * nivel3.complicadores.length);

const nivel3Aleatorio = {
    timeAleatorio3: nivel3.times[indiceTime3],
    missaoAleatoria3: nivel3.missoes[indiceMissao3],
    complicadorAleatorio3: nivel3.complicadores[indiceComplicador3]
}



//console.log(mensagemNivel1)
//console.log(mensagemNivel2)
//console.log(mensagemNivel3)



const botaoNivel1 = document.querySelector('#botao1')
const botaoNivel2 = document.querySelector('#botao2')
const botaoNivel3 = document.querySelector('#botao3')
const htmlTime = document.querySelector('#html-time')
const htmlMissao = document.querySelector('#html-missao')
const htmlComplicador = document.querySelector('#html-complicador')
const resultadoHtml = document.querySelector('#html-resultado')

function atualizaNivel1(){
    htmlTime.textContent = nivel1Aleatorio.timeAleatorio1;
    htmlMissao.textContent = nivel1Aleatorio.missaoAleatoria1;
    htmlComplicador.textContent = nivel1Aleatorio.complicadorAleatorio1
}


botaoNivel1.addEventListener('click', ()=>{
    atualizaNivel1();
    resultadoHtml.classList.remove('html-resultadoOff')



})

function atualizaNivel2(){
    htmlTime.textContent = nivel2Aleatorio.timeAleatorio2;
    htmlMissao.textContent = nivel2Aleatorio.missaoAleatoria2;
    htmlComplicador.textContent = nivel2Aleatorio.complicadorAleatorio2
}


botaoNivel2.addEventListener('click', ()=>{
    atualizaNivel2()
    resultadoHtml.classList.remove('html-resultadoOff')

})

function atualizaNivel3(){
    htmlTime.textContent = nivel3Aleatorio.timeAleatorio3;
    htmlMissao.textContent = nivel3Aleatorio.missaoAleatoria3;
    htmlComplicador.textContent = nivel3Aleatorio.complicadorAleatorio3
}


botaoNivel3.addEventListener('click', ()=>{
    atualizaNivel3()
    resultadoHtml.classList.remove('html-resultadoOff')

})



