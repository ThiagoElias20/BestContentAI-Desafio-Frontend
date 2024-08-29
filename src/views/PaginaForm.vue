<script setup> 
    import Input from '../components/Input.vue';
    import InputTelefone from '../components/InputTelefone.vue';
    import Popup from '../components/Popup.vue';
    import { useRoute } from 'vue-router';

    const route = useRoute();
    const nomeMarca = route.query.nomeMarca;
    const telefoneMarca = route.query.telefoneMarca;
    const emailMarca = route.query.emailMarca;
    const descMarca = route.query.descMarca;

    function validarForm() {
        const butloading = document.querySelector(".loading");
        butloading.style.display = 'block';
        const popup = document.querySelector('.Popup');
        popup.style.display = 'block';
        butloading.style.display = 'none';
    }
</script>

<template>
    <div class="paginaForm">
        <main>
            <div class="seta">
                <a href="" @click="$router.push('/')"><img src="../assets/seta.svg" alt=""></a>
            </div>
            <div class="inputCard">
                <div class="textos">
                    <h1>Como devemos chamar sua marca?</h1>
                </div>
                <form action="">
                    <div class="inputs">
                        <Input v-model:valor-form="nomeMarca" inputClass="NomeMarca" inputId="nomeMarca" label="Nome da Marca *" placeholder="Ex: Dr. Gabriel; Roupas Multimarcas; Pizzaria dos Sabores"/>
                        <InputTelefone v-model:valor-form="telefoneMarca" inputClass="Telefone" inputId="telefone" label="Telefone" placeholder="(00) 0 0000 - 0000" />
                        <Input v-model:valor-form="emailMarca" inputClass="Email" inputId="email" label="Email" placeholder="xxxxxxxxxxx@xxxxx.com" @input="telefoneMascara"/>
                        <Input v-model:valor-form="descMarca" inputClass="Desc" inputId="desc" label="Com o quê você trabalha? *" placeholder="Descreva sua marca/produto, seu perfil em algumas palavras, para nossa IA entender melhor o seu contexto."/>
                        <button @click.prevent="validarForm">Continue
                            <div class="loading"></div>
                        </button>
                    </div>
                </form>
            </div>
        </main>
    </div>
    <Popup class="Popup" :nomeMarca="nomeMarca"/>
</template>

<style scoped>
    .paginaForm {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 97vh;
        margin: 0 15vw 0 15vw;
    } 
    .paginaForm main {
        position: relative;
        width: 100%;
    }
    .paginaForm main .seta {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    .paginaForm main .seta:hover {
        left: 5px;
        transition: all 0.2s ease-in-out;
    }
    .paginaForm main .seta img {
        height: 20px;
    }
    .paginaForm main .inputCard {
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
    .paginaForm main .inputCard .textos {
        text-align: center;
        color: #181818;
    }
    .paginaForm main .inputCard .textos h1 {
        font-size: 1.38rem;
        margin-bottom: 40px;
    }
    .paginaForm main .inputCard form {
        width: 100%;
    }
    .paginaForm main .inputCard .inputs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: inherit;
    }
    .paginaForm main .inputCard .inputs input:focus {
        transition: all 0.5s ease;
        border: 1px solid #E73C7E;
        box-shadow: 0px 0px 3px #E73C7E;
    }
    .paginaForm main .inputCard .inputs button {
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
    .paginaForm main .inputCard .inputs button .loading {
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
    .paginaForm main .inputCard .inputs button:hover {
        background-color: #FC2E7E;
        transition: all 0.3s ease;
    }
    .paginaForm main .inputCard .inputs button:active{
        transform: translateY(2px); 
        transition: all 0.1s ease;
    }

    @media (max-width: 668px) {
        .paginaForm {
            margin: 0 4vw 0 4vw;
        }
        .paginaForm main {
            height: 95%;
        }
        .paginaForm main .seta img {
            height: 15px;
        }
        .paginaForm main .inputCard {
            padding: 50px 0 0 0;
            height: inherit;
        }
        .paginaForm main .inputCard .inputs button {
            height: 45px;
        }
        .paginaForm main .inputCard .inputs a {
            margin-bottom: 100px;
        }
    }
</style>