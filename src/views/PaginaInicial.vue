<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter();

    function validarForm() { // Adicionei o validar form para quando nada tiver sido escrito no input de link ele alerta e não troca de pagina
        const linkInput = document.getElementById('globe');
        const url = linkInput.value.trim();
        if (linkInput.value.trim() === '') {
            alert('O campo "Víncular Website" é obrigatório.');
        } else {
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


</script>

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
                <form action="">
                    <div class="inputs">
                        <input id="instagram" type="text" placeholder="Vincular Instagram (recomendado)">
                        <input id="globe" type="text" placeholder="Víncular Website" required>
                        <a href=""><small>Não tenho rede social ou site</small></a>
                        <button @click.prevent="validarForm" type="submit">Continue</button>
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
        width: inherit;
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