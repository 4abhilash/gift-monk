<template>
  <div>
    <v-app-bar
      color="grey lighten-4"
      app
      absolute
      dense
      clipped-left
    >
      

       <v-breadcrumbs :items="items">
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :href="item.href"
        :disabled="item.disabled"
      >
        {{ item.text.toUpperCase() }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>


      <v-spacer></v-spacer>

      <v-btn icon
      outlined
      color="indigo"
      >
        <v-icon>mdi-apps</v-icon>
      </v-btn>

      <v-btn icon
      outlined
      color="teal"
      >
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
  
  

<script>
  export default {
    name: 'BreadCrumb',
    data: () => ({
      items: [
        {
          text: 'Gift Monk',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Add Product',
          disabled: true,
          href: 'breadcrumbs_link_1',
        },
      ],
    }),
  }
</script>