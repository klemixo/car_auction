<template>
    <div class="footer">
        <p class="footer__heading">History of sales insurance cars - Prices and damage insurance cars at Copart and insurance auctions IAAI</p>
        <div class="footer__content">
            <div class="container">
                <div class="footer__section">
                    <img src="img/hero.png" alt="">
                </div>
                <div class="footer__section">
                    <p><span>Got any questions?</span></p>
                    <p>Feel free to contact</p>
                    <p><a href="mailto:info@vinfax.info">info@vinfax.info</a></p>
                </div>
                <div class="footer__section">
                    <p><span>IAII Lots:</span> 123 456 789</p>
                    <p><span>Copart Lots:</span> 123 456 789</p>
                </div>
                <div class="footer__section">
                    <router-link :to="{ name: 'Terms' }">Terms&Conditions</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.footer{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top:51px;
    &__heading{
        font-weight: 400;
        font-size: 17px;
        line-height: 22px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.1em;
        color: rgba(0, 0, 0, 0.2);
    }
    &__content{
        background: linear-gradient(180deg, rgba(19, 47, 148, 0.84) 0%, #102672 100%);
        padding:10px 40px 5px 40px;
        width:100%;
        .container{
            display:flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap:16px;
            @media(min-width:992px){
        flex-direction: row;
        padding:30px 0;
    }
            p,a{
                font-weight: 400;
                font-size: 20px;
                line-height: 33px;
                color: #FFFFFF;
                text-decoration: none;
                span{
                    font-weight: 700;
                }
            }
        }
    }
}
</style>