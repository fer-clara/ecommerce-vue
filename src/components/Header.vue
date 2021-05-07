<template>
    <header class="header">
        <nav class="nav">
            <div class="container container-flex">
                <a href="#" class="menu"></a>
                <div class="logo-container">
                    <a href="#">
                        <img src="../assets/logo-corebiz-preto-cinza.svg" alt="Logo Corebiz">
                    </a>
                </div>
                <div class="agrupa-containers">
                    <div class="container-busca desktop">
                        <input type="text" placeholder="O que está procurando?" class="input-busca">
                        <button id="busca"></button>
                    </div>
                    <div class="conta-container">
                        <p>Minha Conta</p>
                    </div>
                    <div class="carrinho-container">
                        <div class="carrinho"></div>
                        <span>{{counterCarrinho}}</span>
                    </div>
                </div>
            </div>
            <div class="container-busca mobile">
                <input type="text" placeholder="O que está procurando?" class="input-busca">
                <button id="busca"></button>
            </div>
        </nav>
    </header>
</template>

<script>
import Bus from '../services/bus'
export default {
    data () {
        return {
            counterCarrinho: 0
        }
    },
    mounted() {
        Bus.$on('quantProdutos', (value) => this.counterCarrinho = value);
    },
}
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

.header{
    .nav{
        .container-flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45px;
            &.container{
                max-width: 1198px;
                margin: 0 auto;
            }
            @media (min-width: 768px){
                height: 80px;
            }
            .menu{
                background-image: url('../assets/menu-hamburger.svg');
                background-repeat: no-repeat;
                width: 22px;
                height: 15px;
                @media (min-width: 768px){
                    display: none;
                }
            }
            .logo-container{
                a{
                    img{
                       @media (min-width: 768px){
                            width: 170px;
                        } 
                    }
                }
            }
            .agrupa-containers{
                @media (min-width: 768px){
                    display: flex;
                    justify-content: space-between;
                    width: 75%;
                }
                .conta-container{
                    display: none;
                    font-family: 'Nunito', sans-serif;
                    font-size: 13px;
                    color: #7A7A7A;
                    &::before{
                        content: '';
                        background-image: url('../assets/usuario.png');
                        width: 18px;
                        height: 18px;
                        display: block;
                    }
                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                    }
                }
                .carrinho-container{
                    display: flex;
                    align-items: center;
                    .carrinho{
                        background-image: url('../assets/carrinho.png');
                        background-repeat: no-repeat;
                        width: 18px;
                        height: 18px;
                    }
                    span{
                        width: 14px;
                        height: 14px;
                        background-color: #F8475F;
                        border-radius: 50px;
                        text-align: center;
                        color: #fff;
                        font-family: 'Nunito', sans-serif;
                        font-size: 10px;
                        margin-left: 5px;
                    }
                }
            }
        }
        .container-busca{
            position: relative;
            margin-bottom: 11px;
            &.desktop{
                display: none;
            }
            @media (min-width: 768px){
                &.mobile{
                    display: none;
                }
                &.desktop{
                    display: block;
                    width: 70%;
                }
            }
            @media (min-width: 1024px){
                &.desktop{
                    width: 75%;
                }
            }
            .input-busca{
                font-family: 'Nunito', sans-serif;
                font-weight: 400;
                color: #7A7A7A;
                font-size: 13px;
                padding: 10px 0px;
                border: 0;
                border-bottom: 1px solid #000;
                width: 100%;
            }
            #busca{
                background-image: url('../assets/busca.png');
                background-repeat: no-repeat;
                width: 18px;
                height: 18px;
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                border: 0;
                background-color: transparent;
                position: absolute;
                right: 0;
                top: 10px;
                cursor: pointer;
            }
        }
    }
}
</style>