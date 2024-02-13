const btt = document.getElementById('ok');
const main = document.getElementById('main');
const name = document.getElementById('name');

function pozdravok() {
    main.innerHTML = `
    <div id=titleGroup>
        <h1 id="mainTitle">Дорогая ${name.value}</h1>
        <h2 id="subTitle" style="font-size: 5.5vw; margin-left: 2vw;">Тебя поздравляет егор крид<3</h2>
    </div>
    <div id='photo'>
        <img id="img" src="./photo/крид2.jpg">
    </div>
    <div id="pozd">
    
    Поцелуев, обнимашек,<br>
    Наслажденья до мурашек<br>
    И любви взаимной, чистой,<br>
    Словно солнышко лучистой!<br>
    <h1 style="font-size: 1vh;">ㅤ</h1>
    Самых сладких вечеров,<br>
    Бесконечно нежных слов,<br>
    Удовольствия лавину.<br>
    С Днем святого Валентина! <br>       
    
    </div>
    `
}

btt.addEventListener('click', pozdravok)