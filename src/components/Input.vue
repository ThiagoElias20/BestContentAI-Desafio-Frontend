<script setup>
    defineProps({
        inputClass: String,
        inputId: String,
        label: String,
        placeholder: String,
        valorForm: String
    })
</script>

<template>
    <div :class="inputClass">
        <label :for="inputId">
            <small>{{ label }}</small>
            <template v-if="inputClass === 'Desc'">
                <textarea :id="inputId" :placeholder="placeholder" :value="valorForm" required></textarea>
            </template>
            <template v-else>
                <input type="text" :id="inputId" :placeholder="placeholder" :value="valorForm" required>
            </template>
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
    div label input, textarea{
        width: inherit;
        padding: 10px;
        margin-bottom: 15px;
        border-radius: 10px;
        border: 1px solid #E0E1E6;
        outline: none;
        font-size: 0.75rem;
        resize: none;
        background-color: #FDFDFD;
    }
    div label textarea {
        height: 130px;
        margin-bottom: 70px;;
    }
    div label input:focus, textarea:focus{
        transition: all 0.5s ease;
        border: 1px solid #E73C7E;
        box-shadow: 0px 0px 3px #E73C7E;
    }

    @media (max-width: 668px) {
        div label input {
            height: 25px;
        }
    }
</style>