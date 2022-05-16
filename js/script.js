const celulas = document.querySelectorAll('.celula');
let checarTurno = true;
let fim = false;

const jogadorx = "X";
const jogadoro = "O";

const combinacoes = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

document.addEventListener("click", (event) => {
    if(event.target.matches(".celula")) {
        jogar(event.target.id);
    }
});

function jogar(id){
    const celula = document.getElementById(id);
    turno = checarTurno ? jogadorx : jogadoro;
    celula.textContent = turno;
    celula.classList.add(turno);
    checarVencedor(turno);
}

function checarVencedor(turno){
    const vencedor = combinacoes.some((comb) => {
        return comb.every((index) => {
            return celulas[index].classList.contains(turno);
        })
    });

    if(vencedor){
        encerraJogo(turno);
    } else if (checarEmpate()) {
        encerraJogo();
    } else {
        checarTurno = !checarTurno;
    }
}
function checarEmpate(){
    let X = 0;
    let O = 0;

    for (index in celulas) {
        if(!isNaN(index)) {
            if (celulas[index].classList.contains(jogadorx)){
                X++;
            }
            
            if (celulas[index].classList.contains(jogadoro)){
                O++;
            }
        }
    }

    return X + O === 9 ? true : false;
}

function encerraJogo(vencedor = null){       
    if (vencedor){
        
        document.getElementById('saida').innerHTML = `O player <span> ${vencedor} </span> venceu...`
    }else{
        document.getElementById('saida').innerHTML = "Empatou...";
    }

    let contador = 3;
    setInterval(()  => {
        h3.innerHTML = `Reiniciando em ${contador--}`;
    }, 1000);

    setTimeout(() => location.reload(), 4000); 
}
