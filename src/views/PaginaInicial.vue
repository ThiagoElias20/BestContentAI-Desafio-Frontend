<script></script>

<template>
    <div class="paginaInicial">
        <div class="inputCard">
            <img src="../assets/socialmediaImg.svg" alt="imagem">
            <div class="textos">
                <h1>Insira seu Instagram ou site e deixe a IA criar para você</h1>
                <p>Ao criar sua marca utilizando um dos links abaixo, conseguiremos identificar sua logo, cores e outros detalhes automaticamente!</p>
            </div>
            <div class="inputs">
                <input type="text" placeholder="Vincular Instagram (recomendado)">
                <input type="text" placeholder="Víncular Website">
                <a href=""><small>Não tenho rede social ou site</small></a>
                <button>Continue</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .paginaInicial {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 98vh;
    }
    .paginaInicial .inputCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 375px;
        min-width: 100px;
        padding: 25px;
    }
    .paginaInicial .inputCard img {
        height: 200px;
    }
    .paginaInicial .inputCard .textos {
        text-align: center;
        color: #181818;
    }
    .paginaInicial .inputCard .textos h1 {
        font-size: 1.15rem;
    }
    .paginaInicial .inputCard .textos p {
        font-size: 0.8rem;
    }
    .paginaInicial .inputCard .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .paginaInicial .inputCard .inputs input {
        height: 30px;
        width: 225px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 1px solid #E0E1E6;
        outline: none;
    }
    .paginaInicial .inputCard .inputs button {
        height: 40px;
        width: 100%;
        background-color: #E73C7E;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 50px;
    }
    .paginaInicial .inputCard .inputs a {
        text-transform: uppercase;
        text-decoration-line: underline;
        margin-bottom: 40px;
        font-size: 0.7rem;
        font-weight: 600;
        color: #86868a;
    }
</style>