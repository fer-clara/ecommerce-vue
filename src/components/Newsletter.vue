<template>
    <section class="newsletter">
        <p class="title" v-show="emailSuccess">Participe de nossas news com promoções e novidades!</p>
        <form action="" class="form-container" v-show="emailSuccess">
            <div>
                <input type="text" placeholder="Digite seu nome" v-model="newName" v-bind:class="{ 'erro': nameError }">
                <small id="nomeErro" v-show="nameError">Preencha com seu nome completo</small>
            </div>
            <div>
                <input type="text" placeholder="Digite seu email" v-model="newEmail" v-bind:class="{ 'erro': emailError }">
                <small id="emailErro" v-show="emailError">Preencha com um e-mail válido</small>
            </div>
            <button @click="cadastrarUsuario" class="btn-form" v-bind:class="{ 'erro': emailError }">Eu quero!</button>
        </form>
        <div class="container-sucesso" v-if="!emailSuccess">
            <p class="title">Seu e-mail foi cadastrado com sucesso!</p>
            <p class="text">A partir de agora você receberá as novidade e ofertas exclusivas.</p>
            <button v-on:click="emailSuccess = true" class="btn-form toggle-form">Cadastrar novo e-mail</button>
        </div>
    </section>
</template>

<script>
import Email from '../services/emails'

export default {
    data() {
        return{
            newName: '',
            newEmail: '',
            nameError: false,
            emailError: false,
            emailSuccess: true,
            messageSuccess: false
        }
    },
    methods: {
        async cadastrarUsuario(event) {
            event.preventDefault();

            const validaNome = this.newName == '' || this.newName === ' ' || this.newName.length < 3;
            const validaEmail = this.newEmail == '' || this.newEmail === ' ' || this.newEmail.length < 3;

            if(validaNome && validaEmail){
                this.nameError = true;
                this.emailError = true;  
            } else if(validaNome) {
                this.nameError = true;
                this.emailError = false;
            } else if(validaEmail) {
                this.nameError = false;
                this.emailError = true;
            } else {
                this.nameError = false;
                this.emailError = false;
                this.emailSuccess = false
                this.messageSuccess = true;

                try {
                    await Email.criar(this.newName, this.newEmail).then({})
                } catch (err) {
                    console.log(err)
                }

                this.newName = '';
                this.newEmail = '';
            }
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700;400&display=swap');

.newsletter{
    margin-top: 66px;
    padding: 24px 16px;
    background-color: #F2F2F2;
    margin-left: -20px;
    margin-right: -20px;
    .title{
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 22px;
        color: #333333;
        margin: 0;
        margin-bottom: 19px;
        @media (min-width: 768px){
            text-align: center;
        }
    }
    .form-container{
        @media (min-width: 768px){
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        input{
            width: 100%;
            height: 48px;
            box-sizing: border-box;
            border: 0;
            border-radius: 5px;
            padding: 17px 16px;
            font-family: 'Lato', sans-serif;
            font-weight: bold;
            font-size: 12px;
            line-height: 14px;
            color: #585858;
            margin-bottom: 22px;
            display: flex;
            &:nth-child(2){
                margin-bottom: 7px;
            }
            &.erro{
                border: 1px solid #D7182A;
            }
            @media (min-width: 768px){
                width: 280px;
                margin-right: 8px;
            }
        }
        small{
            display: block;
            font-family: 'Lato', sans-serif;
            font-size: 12px;
            color: #D7182A;
            margin-top: -18px;
            margin-bottom: 18px;
            @media (min-width: 768px){
                margin-top: -14px;
                margin-bottom: 0;
            }
        }
    }
    .btn-form{
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        border: 0;
        background: #000000;
        border-radius: 5.56992px;
        width: 100%;
        height: 48px;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        &.toggle-form{
            width: 328px;
        }
        &.erro{
            background-color: #333333;
        }
        @media (min-width: 768px){
            width: 140px;
        }
    }
    .container-sucesso{
        text-align: center;
        p{
            font-family: 'Lato', sans-serif;
            color: #000000;
            margin: 0;
        }
        .title{
            font-weight: 700;
            font-size: 14px;
        }
        .text{
            font-family: 'Lato', sans-serif;
            font-weight: 400;
            font-size: 12px;
            color: #000000;
            margin-bottom: 15px;
        }
    }
}
</style>