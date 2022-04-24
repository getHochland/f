<template>
  <block-header/>
  <div id="main" class="main">
    <products-cart-block/>
  </div>
  <div id="footer" class="footer">
    <block-subscribe/>
    <block-contacts/>
  </div>
</template>

<script>
import BlockHeader from "@/components/BlockHeader";
import ProductsCartBlock from "@/components/CartBlockProducts";
import BlockSubscribe from "@/components/BlockSubscribe";
import BlockContacts from "@/components/BlockContacts";
export default {
  name: "CartPage",
  components: {ProductsCartBlock, BlockHeader, BlockSubscribe, BlockContacts}
}
</script>

<style scoped>

</style>