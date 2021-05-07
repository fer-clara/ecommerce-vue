<template>
    <vueper-slides disable-arrows-on-edges :breakpoints="breakpoints">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :title="slide.title" :content="slide.content" :image="slide.image" :link="slide.link" />
    </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: {
        VueperSlides, 
        VueperSlide
    },
    data: () => ({
        breakpoints: {
            767: {
                fixedHeight: "191px",
            },
            2560: {
                fixedHeight: "430px"
            },
        },
        slides: [
            {
                title: 'Olá, o que você está buscando?',
                content: 'Criar ou migrar seu e-commerce?',
                image: require('@/assets/image-banner-desktop.png'),
                link: '#'
            },
            {
                title: 'Olá, o que você está buscando?',
                content: 'Criar ou migrar seu e-commerce?',
                image: require('@/assets/image-banner-desktop.png'),
                link: '#'
            },
            {
                title: 'Olá, o que você está buscando?',
                content: 'Criar ou migrar seu e-commerce?',
                image: require('@/assets/image-banner-desktop.png'),
                link: '#'
            },
            {
                title: 'Olá, o que você está buscando?',
                content: 'Criar ou migrar seu e-commerce?',
                image: require('@/assets/image-banner-desktop.png'),
                link: '#'
            },
            {
                title: 'Olá, o que você está buscando?',
                content: 'Criar ou migrar seu e-commerce?',
                image: require('@/assets/image-banner-desktop.png'),
                link: '#'
            }
        ]
    }),
}
</script>

<style lang="scss">
    .vueperslides {
        min-height: 191px;
        margin-left: -20px;
        margin-right: -20px;
        .vueperslide{
            background-color: rgba(0, 0, 0, 0.55);
            background-blend-mode: multiply;
            background-repeat: no-repeat;
            font-family: 'Nunito', sans-serif;
            font-weight: bold;
            color: #fff;
            line-height: 30px;
            padding: 0px 20px;
            text-decoration: none;
            box-sizing: border-box;
            line-height: 30px;
            background-position: right;
            &__content-wrapper{
                max-width: 1120px;
            }
            @media (min-width: 768px){
                background-color: #fff;
                background-position: center;
            }
            &__content-wrapper{
                &:not(.vueperslide__content-wrapper--outside-top):not(.vueperslide__content-wrapper--outside-bottom){
                    align-items: start;
                }
            }
            &__title{
                font-size: 20px;
                text-align: left;
                margin-top: -20px;
                line-height: 20px;
            }
            &__content{
                font-size: 30px;
                text-align: left;
            }
        }
        &__arrows{
            display: none;
        }
        &__bullet{
            .default{
                width: 7px;
                height: 7px;
                border: none;
                background-color: #BDBDBD;
            }
            &--active{
                .default{
                    background-color: #F8475F;
                }
            }
        }
    }
</style>