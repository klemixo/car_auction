<template>
    <div class="rel">
        <span class="loader"></span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.rel{
    position:fixed;
    width:100%;
    display:grid;
    place-content: center;
    z-index: 999;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
}
.loader {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid #FFF;
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border-left: 4px solid #243E97;
  border-bottom: 4px solid transparent;
  animation: rotation 0.5s linear infinite reverse;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
</style>