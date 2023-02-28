const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};


function corrigirProva(prova) {
    let acertos = 0;
    let nota = 0;

    for (let questao of prova.questoes) {

        if (questao.resposta === questao.correta) {
            acertos++
            nota = acertos * 2

        }

    }
    console.log(`O aluno(a) João acertou ${acertos} questões e obteve nota ${nota} `)

}
corrigirProva(prova)