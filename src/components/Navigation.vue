<template>
  <v-app id="inspire">
    

    <v-app-bar 
    color="green"
    clipped-left
    app
    dense
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Gift Monk</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
        <v-icon>mdi-apps</v-icon>

      </v-btn>
      <v-btn icon>
        <v-icon>mdi-account-box</v-icon>

      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      color="#FFFFFF"
      app
      clipped
    >
      <!--  -->
      <v-list
        nav
        dense
      >
        <v-list-item
          v-for="[icon, text] in links"
          :key="icon"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    name : 'Navigation',
    data: () => ({ 
    drawer: null, 
    links: [
        ['mdi-store', 'Inventory'],
        ['mdi-cart', 'Orders'],
        ['mdi-account-outline', 'Customer'],
        ['mdi-account-multiple-outline', 'Users'],
      ],
    }),
  }
</script>