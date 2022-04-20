/**
 * [*] criar um array em escopo global para ser utilizado pelas funções
 *
 * desafio
 * [*] criar um menu interativo
 * [*] a primeira funcao deverá salvar um objeto spaceship com no minimo
 * as seguinte propriedades, name que deverá ser inserida pelo usuario
 * pilot que deverá ser inserido pelo usuário
 * crewLimit o tamanho máximo da tripulação que deverá ser inserido pelo usuário
 * crew um array de string inicialmente vazio
 * inMission que inicialmente deve ser falso
 * [*] a segunda funcao deverá inserir um membro a tripulação de uma determinada nave.
 * No entanto o tamanho máximo de tripulantes não pode ser excedido
 * [*] a terceira funcao deverá enviar uma determinada nave em uma missão caso ela já não
 * esteja. Para isso é preciso que 1/3 da sua tripulação esteja preenchida, arredondando
 * para baixo.
 * [*] a quarta função deverá listar todas as naves registradas e suas respectivas informações
 */
let generalSpaceship = [];
function saveSpaceship(name, pilot, crewLimit) {
    let spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [''],
        inMission: false
    };
    generalSpaceship.push(spaceship);
    alert(`A espaçonave ${spaceship.name} foi salva`);
}
function insertMember(name, spaceshipName) {
    let resultSpaceship = searchSpaceship(spaceshipName);
    if (resultSpaceship) {
        if (resultSpaceship.crew <= resultSpaceship.crewLimit) {
            resultSpaceship.crew.push(name);
            alert(`${name} foi inserido na nave ${resultSpaceship.name}`);
        }
        else {
            alert(`O número máximo de tripulantes foi excedido. Não foi possível adicioná-lo`);
        }
    }
    else {
        alert(`Não foi possível adicionar ${name} em uma nave que não existe`);
    }
}
function sendSpaceship(spaceshipName) {
    let spaceship = searchSpaceship(spaceshipName);
    if (spaceship) {
        if (spaceship.inMission) {
            alert(`Nave ${spaceship.name} já está em missão`);
        }
        else {
            if (spaceship.crew.length > Math.floor(spaceship.crewLimit / 3)) {
                alert(`Nave ${spaceship.name} enviada para missão`);
                spaceship.inMission = true;
            }
            else {
                alert(`É neccesário que 1/3 da nave ${spaceship.name} esteja preenchida`);
            }
        }
    }
    else {
        alert('Esta nave não existe');
    }
}
function listSpaceships() {
    generalSpaceship.map(spaceship => {
        alert(`Nave: ${spaceship.name}\nPiloto: ${spaceship.pilot}\nQuantidade: ${spaceship.crewLimit}\nTripulantes: ${spaceship.crew.length}\nEm missão: ${spaceship.inMission}\n`);
    });
}
function searchSpaceship(name) {
    return generalSpaceship.find(ship => ship.name === name);
}
function menu() {
    let result = Number(prompt('Menu principal\n1 - Salvar uma nave\n2 - Inserir um novo membro\n3 - Enviar uma nave para missão\n4 - Lista naves\n5 - Sair'));
    if (result == 5) {
        alert('Desligando o programa em 3, 2, 1...');
    }
    return result;
}
let option = menu();
while (option != 5) {
    switch (option) {
        case 1:
            let spaceshipName = prompt('Qual o nome da espaçonave?');
            let pilotName = prompt('Qual o nome do piloto?');
            let crewLimit = Number(prompt('Qual a quantidade máxima de tripulantes?'));
            saveSpaceship(spaceshipName, pilotName, crewLimit);
            break;
        case 2:
            let shipName = prompt('Qual o nome da espaçonave que você quer inserir o novo membro?');
            let newMember = prompt('Qual o nome do novo do membro?');
            insertMember(newMember, shipName);
            break;
        case 3:
            let sendSpaceshipName = prompt(`Qual o nome da espaçonave que você quer enviar para missão?`);
            sendSpaceship(sendSpaceshipName);
            break;
        case 4:
            listSpaceships();
            break;
    }
    option = menu();
}
