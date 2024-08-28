<script></script>

<template>
    <div class="paginaInicial">
        <main>
            <div class="seta">
                <a href=""><img src="../assets/seta.svg" alt=""></a>
            </div>
            <div class="inputCard">
                <img src="../assets/socialmediaImg.svg" alt="imagem">
                <div class="textos">
                    <h1>Insira seu Instagram ou site e deixe a IA criar para você</h1>
                    <p>Ao criar sua marca utilizando um dos links abaixo, conseguiremos identificar sua logo, cores e outros detalhes automaticamente!</p>
                </div>
                <div class="inputs">
                    <input id="instagram" type="text" placeholder="Vincular Instagram (recomendado)">
                    <input id="globe" type="text" placeholder="Víncular Website">
                    <a href=""><small>Não tenho rede social ou site</small></a>
                    <button>Continue</button>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped>
    .paginaInicial {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 97vh;
        margin: 0 15vw 0 15vw;
    } 
    .paginaInicial main {
        position: relative;
        width: 100%;
    }
    .paginaInicial main .seta {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .paginaInicial main .seta img {
        height: 20px;
    }
    .paginaInicial main .inputCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 375px;
        min-width: 100px;
        padding: 25px;
        margin: 0 auto; /* Para centralizar o card */
    }
    .paginaInicial main .inputCard img {
        height: 200px;
    }
    .paginaInicial main .inputCard .textos {
        text-align: center;
        color: #181818;
    }
    .paginaInicial main .inputCard .textos h1 {
        font-size: 1.15rem;
    }
    .paginaInicial main .inputCard .textos p {
        font-size: 0.8rem;
    }
    .paginaInicial main .inputCard .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .paginaInicial main .inputCard .inputs input {
        height: 30px;
        width: 225px;
        margin-bottom: 15px;
        border-radius: 5px;
        border: 1px solid #E0E1E6;
        outline: none;
        font-size: 0.75rem;
    }
    .paginaInicial main .inputCard .inputs input:focus {
        transition: all 0.5s ease;
        border: 1px solid #E73C7E;
        box-shadow: 0px 0px 3px #E73C7E;
    }
    .paginaInicial main .inputCard .inputs input#instagram {
        background: url(../assets/instagram.svg) no-repeat 7px;
        background-size: 25px;
        padding-left: 40px;
    }
    .paginaInicial main .inputCard .inputs input#globe {
        background: url(../assets/globe.svg) no-repeat 7px;
        background-size: 30px;
        padding-left: 40px;
    }
    .paginaInicial main .inputCard .inputs button {
        height: 40px;
        width: 100%;
        background-color: #E73C7E;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        cursor: pointer;
    }
    .paginaInicial main .inputCard .inputs button:hover {
        background-color: #FC2E7E;
        transition: all 0.3s ease;
    }
    .paginaInicial main .inputCard .inputs button:active{
        transform: translateY(2px); 
        transition: all 0.1s ease;
    }
    .paginaInicial main .inputCard .inputs a {
        text-transform: uppercase;
        text-decoration-line: underline;
        margin-bottom: 40px;
        font-size: 0.7rem;
        font-weight: 600;
        color: #86868a;
    }
</style>