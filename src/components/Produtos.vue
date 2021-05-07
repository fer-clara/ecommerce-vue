<template>
    <section class="produtos">
        <p class="title">Mais Vendidos</p>
        <hr>
        <VueSlickCarousel v-if="produtos.length" :dots="true" v-bind="settings">
            <div v-for="produto of produtos" :key="produto.productId">
                <div class="card">
                    <img class="imagem-produto" :src="produto.imageUrl" :alt="produto.productName">
                    <p class="nome-produto">{{produto.productName}}</p>
                    <div class="classificacao">
                        <ul class="lista">
                            <li class="estrela" v-for="index in 5" :key="index">
                                <img src="../assets/star.svg" alt="" v-if="index > produto.stars">
                                <img src="../assets/full-star.svg" alt="" v-if="index <= produto.stars">
                            </li>
                        </ul>
                    </div>
                    <div class="flag" v-if="produto.listPrice != null"><span>OFF</span></div>
                    <p class="preco-anterior" v-if="produto.listPrice != null">de R$ {{produto.listPrice}}</p>
                    <p class="preco">por R$ {{produto.price}}</p>
                    <p class="parcelas">ou em 9x de R$ 28,87</p>
                    <button class="btn" @click="addCarrinho">Comprar</button>
                </div>
            </div>
        </VueSlickCarousel>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import Produto from '../services/produtos'
import Bus from '../services/bus'

export default {
    components: { VueSlickCarousel },
    data() {
        return{
            produtos: [],
            counter: 0,
            settings: {
                "responsive": [
                    {
                    "breakpoint": 767,
                        "settings": {
                            "slidesToShow": 2,
                        }
                    },
                    {
                    "breakpoint": 2560,
                        "settings": {
                            "slidesToShow": 4,
                            "arrows": true
                        }
                    },
                ]
            }
        }
    },
    mounted() {
        Produto.listar().then(response => {
            this.produtos = response.data;
        })
    },
    methods: {
        addCarrinho () {
            Bus.$emit('quantProdutos', this.counter += 1)
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
    .produtos{
        position: relative;
        max-width: 1120px;
        margin: 0 auto;
        .title{
            font-family: 'Nunito', sans-serif;
            font-weight: 900;
            font-size: 18px;
            color: #000000;
            margin-bottom: 25px;
            margin-top: 16px;
            @media (min-width: 768px){
                font-size: 20px;
            }
        }
        hr{
            border: 1.8px solid #C0C0C0;
            background-color: #C0C0C0;
            width: 32.5px;
            position: absolute;
            top: 20px;
            margin: 0;
            margin-top: 9px;
        }
        .slick-slide{
            img{
                width: 132px;
                margin: 0 auto;
                @media (min-width: 1024px){
                    width: 216px;
                }
            }
        }
        .slick-list{
            margin-left: -12px;
            margin-right: -12px;
        }
        .card{
            position: relative;
            @media (min-width: 768px){
                &:hover{
                    background: #E6E8EA;
                    .btn{
                        display: block;
                    }
                }
            }
            .nome-produto{
                font-family: 'Nunito', sans-serif;
                font-weight: 600;
                font-size: 10px;
                color: #7A7A7A;
                text-align: center;
                margin: 0;
                height: 20px;
            }
            .classificacao{
                margin-bottom: 20px;
                .lista{
                    list-style-type: none;
                    padding: 0;
                    text-align: center;
                    .estrela{
                        display: inline-block;
                        img{
                            width: 11.41px;
                        }
                    }
                }
            }
            .flag{
                width: 0;
                height: 0;
                border-bottom: 44px solid transparent;
                border-right: 50px solid #F8475F;
                position: absolute;
                right: 11px;
                top: 0;
                @media (min-width: 768px){
                    border-bottom: 72px solid transparent;
                    border-right: 72px solid #F8475F;
                    right: 50px;
                }
                span{
                    font-family: 'Nunito', sans-serif;
                    font-weight: 600;
                    font-size: 10px;
                    color: #FFFFFF;
                    display: flex;
                    margin-top: 7px;
                    margin-left: 26px;
                    @media (min-width: 768px){
                        font-weight: 900;
                        font-size: 16px;
                        margin-top: 12px;
                        margin-left: 32px;
                    }
                }
            }
            .preco-anterior{
                font-family: 'Nunito', sans-serif;
                font-size: 11px;
                text-align: center;
                color: #7A7A7A;
                text-decoration-line: line-through;
                margin-top: -15px;
                position: absolute;
                left: 0;
                right: 0;
            }
            .preco{
                font-family: 'Nunito', sans-serif;
                font-weight: bold;
                font-size: 16px;
                text-align: center;
                margin-top: 20px;
                margin-bottom: 0;
            }
            .parcelas{
                font-family: 'Nunito', sans-serif;
                font-size: 11px;
                text-align: center;
                color: #7A7A7A;
                margin: 0;
                margin-bottom: 5px;
            }
            .btn{
                appearance: none;
                -moz-appearance: none;
                -webkit-appearance: none;
                border: 0;
                background: #000000;
                border-radius: 5.56992px;
                width: 140px;
                font-family: 'Ubuntu', sans-serif;
                font-weight: 500;
                font-size: 15.309px;
                color: #fff;
                text-transform: uppercase;
                padding: 9.5px;
                display: block;
                margin: 0 auto;
                cursor: pointer;
                @media (min-width: 768px){
                    display: none;
                }
            }
        }
        .slick-dots{ 
            li{
                width: 10px;
                height: 10px;
                &.slick-active{
                    button{
                        &:before{
                            color: #F8475F;
                        }
                    }
                }
                button{
                    &:before{
                        color: #BDBDBD;
                        opacity: 1;
                        font-size: 7px;
                    }
                }
            }
        }
        .slick-arrow{
            &:before{
                content: '';
                background-image: url('../assets/seta.svg');
                width: 13px;
                height: 22px;
                display: block;
            }
            &.slick-prev{
                left: -41px;
                
                &:before{
                    transform: rotate(180deg);
                }
            }
            &.slick-next{
                right: -41px;
            }
        }
    }

</style>
