<template>
<v-app>
    <v-row>
    <v-col>
            <BreadCrumb/>     
            <ViewProduct/>
  </v-col>
  </v-row>
</v-app>
</template>

<script>
// @ is an alias to /src
import BreadCrumb from '@/components/BreadCrumb.vue'
import ViewProduct from '@/components/ViewProduct.vue'


export default {
  name: 'AddProducts',
  components: {
    BreadCrumb,
    ViewProduct
  }
}
</script>
