<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    function validarForm() { // Adicionei o validar form para quando nada tiver sido escrito no input de link ele alerta e não troca de pagina
        const linkInput = document.getElementById('globe');
        const url = linkInput.value.trim();
        if (linkInput.value.trim() === '') {
            alert('O campo "Víncular Website" é obrigatório.');
        } else {
            loadingButton(); // Faz o botao entrar em estado de loading
            fetchingScraping(url);
        }
    }

    function fetchingScraping(url) {
        const apiKey = 'A29XIW6JOUETI6A4E45DQG3BIJ0YQM41DG6QDWI7NLY1873AKVDWH2VHLGKUR88KGNU4JGOBFW6VBNX0';
        fetch(`https://app.scrapingbee.com/api/v1?api_key=${apiKey}&url=${url}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('response deu erro ' + response.statusText);
                }
                return response.text();
            })
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, "text/html");

                const nomeMarca = doc.querySelector('h1').textContent
                const descMarca = doc.querySelector('p.go1458712046').textContent //esse go1458712046 é classe de todas as descrições no sobre

                const emailMarca = nomeMarca.toLowerCase().replace(" ", "") + '@emailfake.com';

                let telefoneMarca = doc.querySelector('.cdVUKT a:nth-of-type(2)')
                telefoneMarca.classList.contains("ePrnud") || telefoneMarca.classList.contains("hMbDtx") ? telefoneMarca = telefoneMarca.textContent : telefoneMarca = null
                /*
                Classes do ReclameAqui que contem numeros de telefone:
                ePrnud é para whatsapp
                hMbDtx é para telefone fixo

                Sem numero de telefone:
                eLwHfG usado para levar a sites externos, como o ir para o atendimento ou site
                há tambem a situação que não tem contato
                */

                router.push({ name: 'pagina-form', query: { nomeMarca, telefoneMarca, emailMarca, descMarca } })
            })
            .catch(error => {
                console.error('problema com o fetch: ', error);
            });
    }

    function loadingButton() {
        const butloading = document.querySelector(".loading");
        butloading.style.display = 'block';
    }


</script>

<template>
    <div class="paginaInicial">
        <main>
            <div class="seta">
                <a href=""><img src="../assets/icons/seta.svg" alt=""></a>
            </div>
            <div class="inputCard">
                <img src="../assets/socialmediaImg.svg" alt="imagem">
                <div class="textos">
                    <h1>Insira seu Instagram ou site e deixe a IA criar para você</h1>
                    <p>Ao criar sua marca utilizando um dos links abaixo, conseguiremos identificar sua logo, cores e outros detalhes automaticamente!</p>
                </div>
                <form action="">
                    <div class="inputs">
                        <div class="input">
                            <img id="imginstagram" src="../assets/icons/instagram.svg" alt="">
                            <input id="instagram" type="text" placeholder="Vincular Instagram (recomendado)">
                        </div>
                        <div class="input">
                            <img id="imgglobe" src="../assets/icons/globe.svg" alt="">
                            <input id="globe" type="text" placeholder="Víncular Website" required>
                        </div>
                        <a href=""><small>Não tenho rede social ou site</small></a>
                        <button @click.prevent="validarForm" type="submit">Continue
                            <div class="loading"></div>
                        </button>
                    </div>
                </form>
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
    .paginaInicial main .seta:hover {
        left: 5px;
        transition: all 0.2s ease-in-out;
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
    .paginaInicial main .inputCard form {
        width: 100%;
    }
    .paginaInicial main .inputCard .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
    }
    .paginaInicial main .inputCard .inputs .input {
        height: 30px;
        width: 225px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;
        position: relative;
    }
    .paginaInicial main .inputCard .inputs .input input {
        width: 100%;
        height: 90%;
        border: none;
        padding-left: 40px;
        outline: none;
        border-radius: 5px;
        border: 1px solid #E0E1E6;
        font-size: 0.65rem;
    }
    .paginaInicial main .inputCard .inputs .input img {
        height: 18px;
        margin: 0 10px 0 10px;
        position: absolute;
    }
    .paginaInicial main .inputCard .inputs .input input:focus {
        transition: all 0.5s ease;
        border: 1px solid #E73C7E;
        box-shadow: 0px 0px 3px #E73C7E;
    }
    /* .paginaInicial main .inputCard .inputs input#instagram {
        background: url(../assets/instagram.svg) no-repeat 7px;
        background-size: 25px;
        padding-left: 40px;
    }
    .paginaInicial main .inputCard .inputs input#globe {
        background: url(../assets/globe.svg) no-repeat 7px;
        background-size: 30px;
        padding-left: 40px;
    } */
    .paginaInicial main .inputCard .inputs button {
        height: 40px;
        width: inherit;
        background-color: #E73C7E;
        color: #fff;
        font-size: 1rem;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .paginaInicial main .inputCard .inputs button .loading {
        display: none;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid #fff; 
        border-radius: 50px;
        animation: spin 1s linear infinite;
        width: 20px;
        height: 20px;
        position: absolute;
        right: 25px;
    }
    @keyframes spin { 
        0% { 
            transform: rotate(0deg); 
        } 
    
        100% { 
            transform: rotate(360deg); 
        } 
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
    .paginaInicial main .inputCard .inputs a:hover {
        color: #E73C7E;
        transition: all 0.3s ease;
    }

    @media (max-width: 668px) {
        .paginaInicial {
            margin: 0 4vw 0 4vw;
        }
        .paginaInicial main {
            height: 95%;
        }
        .paginaInicial main .seta {
            left: 0px;
        }
        .paginaInicial main .seta img {
            height: 15px;
        }
        .paginaInicial main .inputCard {
            padding: 50px 0 0 0;
            height: inherit;
        }
        .paginaInicial main .inputCard img {
            height: 225px;
            margin-bottom: 25px;
        }
        .paginaInicial main .inputCard .inputs .input {
            width: 100%;
            margin-top: 15px;
            margin-bottom: 15px;
        }
        .paginaInicial main .inputCard .inputs .input img {
            height: 22px;
            margin: 0 20px 0 20px;
        }
        .paginaInicial main .inputCard .inputs .input input {
            height: 40px;
            width: 87%;
            font-size: 0.68rem;
            padding-left: 60px;
        }
        .paginaInicial main .inputCard .inputs button {
            height: 45px;
        }
        .paginaInicial main .inputCard .inputs a {
            margin-bottom: 90px;
        }
    }

    @media (min-width: 1600px) {
        /* Estilização para telas maiores */
        .paginaInicial {
            margin: 0 20vw 0 20vw;
        }
        .paginaInicial main .inputCard {
            width: 100%;
            max-width: 425px;
            min-width: 100px;
        }
        .paginaInicial main .inputCard img {
            height: 225px;
        }
        .paginaInicial main .inputCard .inputs .input {
            width: 250px;
            height: 38px;
        }
        .paginaInicial main .inputCard .inputs .input img {
            margin: 0 17px 0 17px;
        }
        .paginaInicial main .inputCard .inputs .input input {
            width: 100%;
            font-size: 0.75rem;
            padding-left: 45px;
        }
        .paginaInicial main .inputCard .inputs button {
            font-size: 1.1rem;
        }
    }
</style>