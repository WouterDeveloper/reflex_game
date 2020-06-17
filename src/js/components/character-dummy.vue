<!-- ****************************
     TEMPLATE 
     **************************** -->
<template>
  <div class="character">
            <div class="character__head">
                <div class="character__head__eye"></div>
                <div class="character__head__eye"></div>
            </div>
            <div class="character__hand character__hand--left"></div>
            <div class="character__body"></div>
            <div class="character__hand  character__hand--right"></div>
        </div>
</template>
<!-- ****************************
    SCRIPT 
    **************************** -->
<script>
export default {

}
</script>
<!-- ****************************
     STYLE 
     **************************** -->
<style lang="scss">
.character{  

    &__head{

        &__eye{
            background-color: $content-color-highlight-secondary;
        }
    }
}
</style>