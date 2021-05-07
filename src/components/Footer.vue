<template>
    <footer class="footer">
        <div class="container">
            <div class="content-info">
                <p class="title">Localização</p>
                <hr>
                <p class="content">Avenida Andrômeda, 2000. Bloco 6 e 8 </p>
                <p class="content">Alphavile SP</p>
                <p class="content">brasil@corebiz.ag</p>
                <p class="content">+55 11 3090 1039</p>
            </div>
            <div class="content-contato">
                <button><img src="../assets/email-icon.png">Entre em contato</button>
                <button><img src="../assets/sac-icon.png">FALE COM O NOSSO CONSULTOR ONLINE</button>
            </div>
            <div class="content-logos">
                <div class="logo-corebiz">
                    <a href="#" target="_blank" class="link">
                        <span>Created by</span>
                        <img src="../assets/site-logo-corebiz-branco.png" alt="Logo Corebiz">
                    </a>
                </div>
                <div class="logo-vtex">
                    <a href="#" target="_blank" class="link">
                        <span>Created by</span>
                        <img src="../assets/logo-vtex.svg" alt="Logo Vtex">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.footer{
    padding: 27px 16px 0px 16px;
    background-color: #000000;
    border-bottom: 5px solid #C0C0C0;
    margin-left: -20px;
    margin-right: -20px;
    @media (min-width: 768px){
        padding: 25px 16px 28px 16px;
    }
    .container{
        max-width: 1120px;
        margin: 0 auto;
        @media (min-width: 768px){
            display: flex;
            justify-content: space-between;
            align-content: center;
            align-items: center;
        }
    }
    .content-info{ 
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        font-size: 18px;
        color: #fff;
        .title{
            margin: 0;
        }
        hr{
            border: 1.8px solid #fff;
            background-color: #fff;
            width: 32.5px;
            top: 20px;
            margin: 0;
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .content{
            font-weight: 400;
            font-size: 13px;
            margin: 5px 0px;
        }
    }
    .content-contato{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (min-width: 768px){
            margin-top: 0;
        }
        button{
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            border: 0;
            border-radius: 5.56992px;
            width: 198px;
            height: 38px;
            margin-bottom: 26px;
            font-family: 'Nunito', sans-serif;
            font-weight: 400;
            font-size: 12px;
            text-transform: uppercase;
            line-height: 12px;
            @media (min-width: 768px){
                &:last-child{
                    margin-bottom: 0;
                }
            }
            img{
                float: left;
                padding-left: 16px;
                margin: 0;
                padding-right: 0;
            }
        }
    }
    .content-logos{
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        .logo-corebiz{
            @media (min-width: 768px){
                padding-right: 30px;
            }
        }
        .logo-corebiz, .logo-vtex{
            a{
                display: flex;
                flex-direction: column;
                text-decoration: none;
                font-family: 'Nunito', sans-serif;
                font-size: 10px;
                color: #fff;    
            }
        }
    }
}

</style>