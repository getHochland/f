<template>
  <block-header/>
  <div id="main" class="main">
      <block-banner/>
      <block-text/>
      <block-products/>
      <block-coffee-magazine/>
      <block-image/>
      <block-history/>
    <div id="footer" class="footer">
      <block-subscribe/>
      <block-contacts/>
    </div>
  </div>
</template>

<script>
import BlockProducts from "@/components/BlockProducts";
import BlockHeader from "@/components/BlockHeader";
import BlockBanner from "@/components/BlockBanner";
import BlockText from "@/components/BlockText";
import BlockCoffeeMagazine from "@/components/BlockCoffeeMagazine";
import BlockImage from "@/components/BlockImage";
import BlockHistory from "@/components/BlockHistory";
import BlockSubscribe from "@/components/BlockSubscribe";
import BlockContacts from "@/components/BlockContacts";
export default {
  name: "MainPage",
  components: {BlockContacts, BlockSubscribe, BlockHistory, BlockImage, BlockCoffeeMagazine, BlockText, BlockBanner, BlockHeader, BlockProducts},
  data(){
    return{
    }
  },
}
</script>

<style scoped>

</style>