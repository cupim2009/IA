// ========================================
// MISSÃO IA
// QUIZ SOBRE INTELIGÊNCIA ARTIFICIAL
// ========================================


// ========================================
// BANCO DE PERGUNTAS
// ========================================

const perguntas = [

    {
        pergunta: "O que significa a sigla IA?",
        respostas: [
            "Internet Avançada",
            "Inteligência Artificial",
            "Informação Automatizada",
            "Inteligência Analógica"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é um dos principais objetivos da Inteligência Artificial?",
        respostas: [
            "Substituir toda tecnologia existente",
            "Criar sistemas capazes de realizar tarefas que exigem inteligência humana",
            "Eliminar a necessidade de computadores",
            "Aumentar apenas a velocidade da internet"
        ],
        correta: 1
    },

    {
        pergunta: "O que é Machine Learning?",
        respostas: [
            "Um tipo de computador",
            "Uma linguagem de programação",
            "Uma área da IA que permite aos sistemas aprenderem com dados",
            "Um sistema operacional"
        ],
        correta: 2
    },

    {
        pergunta: "Qual destas tecnologias é utilizada em muitos sistemas de IA generativa?",
        respostas: [
            "Redes neurais",
            "Cabos de fibra óptica",
            "GPS",
            "Bluetooth"
        ],
        correta: 0
    },

    {
        pergunta: "O que é um algoritmo?",
        respostas: [
            "Um vírus de computador",
            "Uma sequência de instruções para resolver um problema",
            "Um tipo de monitor",
            "Um banco de dados físico"
        ],
        correta: 1
    },

    {
        pergunta: "O que caracteriza uma IA generativa?",
        respostas: [
            "Ela apenas armazena arquivos",
            "Ela pode gerar conteúdos como textos, imagens e códigos",
            "Ela funciona somente sem internet",
            "Ela substitui o sistema operacional"
        ],
        correta: 1
    },

    {
        pergunta: "O que é um prompt?",
        respostas: [
            "Um comando ou instrução fornecida a uma IA",
            "Um antivírus",
            "Um tipo de processador",
            "Um banco de dados"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destas é uma aplicação comum de Inteligência Artificial?",
        respostas: [
            "Reconhecimento de voz",
            "Impressão em papel",
            "Carregamento de bateria",
            "Cabo HDMI"
        ],
        correta: 0
    },

    {
        pergunta: "O que são dados de treinamento em Machine Learning?",
        respostas: [
            "Dados usados para ensinar o modelo a identificar padrões",
            "Arquivos que servem somente para backup",
            "Senhas dos usuários",
            "Programas instalados no computador"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é um exemplo de visão computacional?",
        respostas: [
            "Reconhecer objetos em uma imagem",
            "Aumentar o volume do computador",
            "Criar uma conexão Wi-Fi",
            "Formatar um HD"
        ],
        correta: 0
    },

    {
        pergunta: "O que é uma rede neural artificial?",
        respostas: [
            "Uma rede social",
            "Um modelo inspirado no funcionamento de neurônios para processar informações",
            "Um cabo de internet",
            "Um tipo de navegador"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é uma preocupação importante relacionada à Inteligência Artificial?",
        respostas: [
            "Privacidade e uso responsável dos dados",
            "A cor dos computadores",
            "O tamanho do teclado",
            "A quantidade de cabos USB"
        ],
        correta: 0
    },

    {
        pergunta: "O que significa NLP no contexto da IA?",
        respostas: [
            "New Language Program",
            "Natural Language Processing",
            "Network Learning Protocol",
            "Neural Logic Program"
        ],
        correta: 1
    },

    {
        pergunta: "Qual tecnologia permite que assistentes virtuais entendam comandos de voz?",
        respostas: [
            "Processamento de linguagem e reconhecimento de fala",
            "Somente GPS",
            "Bluetooth",
            "Placa de vídeo"
        ],
        correta: 0
    },

    {
        pergunta: "O que é viés algorítmico?",
        respostas: [
            "Um erro causado exclusivamente pelo computador desligar",
            "Uma tendência sistemática que pode produzir resultados injustos ou distorcidos",
            "Um tipo de vírus",
            "Uma técnica de criptografia"
        ],
        correta: 1
    },

    {
        pergunta: "Qual é uma boa prática ao utilizar respostas produzidas por IA?",
        respostas: [
            "Aceitar tudo sem verificar",
            "Compartilhar informações pessoais",
            "Verificar as informações e utilizar pensamento crítico",
            "Nunca revisar o conteúdo"
        ],
        correta: 2
    },

    {
        pergunta: "O que é Deep Learning?",
        respostas: [
            "Uma área relacionada ao aprendizado profundo utilizando redes neurais",
            "Um tipo de armazenamento externo",
            "Um programa de edição de vídeo",
            "Um antivírus"
        ],
        correta: 0
    },

    {
        pergunta: "Qual destas áreas pode utilizar Inteligência Artificial?",
        respostas: [
            "Medicina",
            "Educação",
            "Finanças",
            "Todas as alternativas"
        ],
        correta: 3
    },

    {
        pergunta: "Por que a qualidade dos dados é importante para sistemas de IA?",
        respostas: [
            "Porque dados inadequados podem prejudicar os resultados do modelo",
            "Porque os dados deixam o computador mais bonito",
            "Porque eliminam a necessidade de programação",
            "Porque tornam a internet mais rápida"
        ],
        correta: 0
    },

    {
        pergunta: "Qual é uma característica importante para utilizar IA de maneira responsável?",
        respostas: [
            "Pensamento crítico",
            "Compartilhar senhas",
            "Confiar cegamente nas respostas",
            "Ignorar possíveis erros"
        ],
        correta: 0
    }

];


// ========================================
// VARIÁVEIS DO QUIZ
// ========================================

let perguntaAtual = 0;

let pontuacao = 0;

let respondendo = false;


// ========================================
// ELEMENTOS HTML
// ========================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const startButton =
    document.getElementById("start-btn");

const restartButton =
    document.getElementById("restart-btn");

const questionElement =
    document.getElementById("question");

const answersElement =
    document.getElementById("answers");

const currentQuestionElement =
    document.getElementById("current-question");

const questionNumberElement =
    document.getElementById("question-number");

const progressElement =
    document.getElementById("progress");

const progressPercentElement =
    document.getElementById("progress-percent");

const scoreDisplay =
    document.getElementById("score-display");

const finalScore =
    document.getElementById("final-score");

const scoreProgress =
    document.getElementById("score-progress");

const resultTitle =
    document.getElementById("result-title");

const resultMessage =
    document.getElementById("result-message");

const rankElement =
    document.getElementById("rank");


// ========================================
// FUNÇÃO PARA INICIAR O QUIZ
// ========================================

function iniciarQuiz() {

    perguntaAtual = 0;

    pontuacao = 0;

    respondendo = false;

    mostrarTela(quizScreen);

    mostrarPergunta();

}


// ========================================
// FUNÇÃO PARA MOSTRAR UMA TELA
// ========================================

function mostrarTela(tela) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {
            screen.classList.remove("active");
        });

    tela.classList.add("active");

}


// ========================================
// FUNÇÃO PARA MOSTRAR A PERGUNTA
// ========================================

function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];

    respondendo = true;


    // Número da questão

    const numero =
        String(perguntaAtual + 1)
            .padStart(2, "0");

    currentQuestionElement.textContent =
        numero;

    questionNumberElement.textContent =
        numero;


    // Texto da pergunta

    questionElement.textContent =
        pergunta.pergunta;


    // Limpa respostas anteriores

    answersElement.innerHTML = "";


    // Cria alternativas

    pergunta.respostas.forEach(
        (resposta, indice) => {

            const button =
                document.createElement("button");

            button.classList.add("answer");

            button.innerHTML = `
                <span class="answer-letter">
                    ${String.fromCharCode(65 + indice)}
                </span>

                <span>
                    ${resposta}
                </span>
            `;


            button.addEventListener(
                "click",
                () => verificarResposta(
                    indice,
                    button
                )
            );


            answersElement.appendChild(button);

        }
    );


    atualizarProgresso();

}


// ========================================
// FUNÇÃO PARA VERIFICAR RESPOSTA
// ========================================

function verificarResposta(
    indiceSelecionado,
    botaoSelecionado
) {

    if (!respondendo) {
        return;
    }

    respondendo = false;


    const pergunta =
        perguntas[perguntaAtual];


    const botoes =
        document.querySelectorAll(".answer");


    botoes.forEach(
        (botao, indice) => {

            botao.classList.add("disabled");


            if (
                indice === pergunta.correta
            ) {

                botao.classList.add("correct");

            }

        }
    );


    if (
        indiceSelecionado ===
        pergunta.correta
    ) {

        pontuacao++;

        botaoSelecionado
            .classList.add("correct");

    } else {

        botaoSelecionado
            .classList.add("wrong");

    }


    scoreDisplay.textContent =
        `PONTUAÇÃO: ${pontuacao}`;


    setTimeout(
        proximaPergunta,
        1000
    );

}


// ========================================
// FUNÇÃO PARA IR PARA A PRÓXIMA
// ========================================

function proximaPergunta() {

    perguntaAtual++;


    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

    } else {

        finalizarQuiz();

    }

}


// ========================================
// FUNÇÃO DE PROGRESSO
// ========================================

function atualizarProgresso() {

    const progresso =
        (
            (perguntaAtual + 1) /
            perguntas.length
        ) * 100;


    progressElement.style.width =
        `${progresso}%`;


    progressPercentElement.textContent =
        `${Math.round(progresso)}%`;

}


// ========================================
// FUNÇÃO PARA FINALIZAR
// ========================================

function finalizarQuiz() {

    mostrarTela(resultScreen);


    finalScore.textContent =
        pontuacao;


    const porcentagem =
        (pontuacao / perguntas.length) * 100;


    scoreProgress.style.width =
        `${porcentagem}%`;


    definirResultado(
        porcentagem
    );

}


// ========================================
// FUNÇÃO PARA DEFINIR O RESULTADO
// ========================================

function definirResultado(
    porcentagem
) {

    if (porcentagem >= 90) {

        resultTitle.textContent =
            "AGENTE ELITE";

        resultMessage.textContent =
            "Excelente desempenho. Seu conhecimento sobre Inteligência Artificial está em nível avançado.";

        rankElement.textContent =
            "ELITE";

    }

    else if (porcentagem >= 70) {

        resultTitle.textContent =
            "MISSÃO CONCLUÍDA";

        resultMessage.textContent =
            "Muito bom. Você demonstrou uma ótima compreensão dos conceitos de Inteligência Artificial.";

        rankElement.textContent =
            "ESPECIALISTA";

    }

    else if (porcentagem >= 50) {

        resultTitle.textContent =
            "BOM TRABALHO";

        resultMessage.textContent =
            "Você está no caminho certo. Continue estudando para evoluir sua missão.";

        rankElement.textContent =
            "OPERADOR";

    }

    else {

        resultTitle.textContent =
            "MISSÃO INCOMPLETA";

        resultMessage.textContent =
            "Você precisa reforçar seus conhecimentos. Estude mais e tente novamente.";

        rankElement.textContent =
            "RECRUTA";

    }

}


// ========================================
// EVENTOS DOS BOTÕES
// ========================================

startButton.addEventListener(
    "click",
    iniciarQuiz
);


restartButton.addEventListener(
    "click",
    iniciarQuiz
);
