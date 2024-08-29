<script setup>
    defineProps({
        nomeMarca: String
    })

    function closePopup() {
        const popup = document.querySelector('.popup');
        popup.style.display = 'none';
    }
</script>

<template>
    <div class="popup">
        <div class="popupCard">
            <div class="close">
                <button @click="closePopup"><img src="../assets/icons/close.svg" alt=""></button>
            </div>
            <div class="conteudo">
                <h1>Sucesso!</h1>
                <p>Obrigado, os dados da {{ nomeMarca }} já foram enviados, continuaremos em breve!</p>
                <img src="../assets/popupImg.svg" alt="">
            </div>
        </div>
        <div class="overlay"></div>
    </div>
</template>

<style>
    .popup {
        display: none;
    }
    .popup .popupCard {
        height: fit-content;
        width: 500px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%); /* Para centralizar */
        background-color: #fff;
        border-radius: 20px;
        padding: 20px;
        z-index: 1000;
        position: fixed;
    }
    .popup .popupCard .close {
        width: 100%;
        display: flex;
        justify-content: flex-end
    }
    .popup .popupCard .close button {
        border: none;
        margin: 0;
        padding: 0;
        width: auto;
        overflow: visible;
        background: transparent;
        cursor: pointer;
    }
    .popup .popupCard .close button img {
        height: 25px;
    }
    .popup .popupCard .conteudo {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .popup .popupCard .conteudo h1 {
        color: #E73C7E;
        margin: 0;
    }
    .popup .popupCard .conteudo p {
        text-align: center;
    }
    .popup .popupCard .conteudo img {
        height: 250px;
    }
    .popup .overlay {
        position: fixed;
        background-color: rgba(0, 0, 0, 0.534);
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 999;
    }

    @media (max-width: 668px) {
        .popup .popupCard {
            width: 85%;
            padding: 15px;
        }
        .popup .popupCard .conteudo img {
            height: 150px;
        }
        .popup .popupCard .conteudo h1 {
            font-size: 1.5rem;
        }
        .popup .popupCard .conteudo p {
            font-size: 1rem;
        }
    }
</style>