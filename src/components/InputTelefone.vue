<script setup>
    defineProps({
        inputClass: String,
        inputId: String,
        label: String,
        placeholder: String,
        valorForm: String
    })

    function telefoneMascara(digitada) {
        let caracter = digitada.target.value
        if (!caracter) return; //para parar funcao

        //regex
        caracter = caracter.replace(/\D/g,'')
        caracter = caracter.replace(/(\d{2})(\d)/,"($1) $2")
        caracter = caracter.replace(/(\d)(\d{4})$/,"$1-$2")

        digitada.target.value = caracter
    }
</script>

<template>
    <div :class="inputClass">
        <label :for="inputId">
            <small>{{ label }}</small>
            <input type="text" :id="inputId" :placeholder="placeholder" @input="telefoneMascara" maxlength="15" :value="valorForm" required>
        </label>
    </div>
</template>

<style scoped>
    div {
        width: 100%;
    }
    div label {
        display: flex;
        flex-direction: column;
        justify-content: left;
    }
    div label small {
        margin-bottom: 5px;
    }
    div label input {
        width: inherit;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 10px;
        border: 1px solid #E0E1E6;
        outline: none;
        font-size: 0.75rem;
        background-color: #FDFDFD;
    }
    div label input:focus {
        transition: all 0.5s ease;
        border: 1px solid #E73C7E;
        box-shadow: 0px 0px 3px #E73C7E;
    }

    @media (max-width: 668px) {
        div label input {
            height: 22px;
        }
    }
</style>