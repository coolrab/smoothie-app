<template>
    <nav class="navbar">   
    <v-app-bar
      color="indigo darken-2"
      dark
      flat
      height="100"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase" @click="goHome">
          <span>Cool </span>
          <span class="font-weight-light">Smoothies</span>
        </v-toolbar-title>
        <v-btn
        color="pink"
        dark
        large
        absolute
        bottom
        right
        fab
        @click="smoothieForm"
      >
        <v-icon large>mdi-plus</v-icon>
      </v-btn> 
     
      <v-spacer></v-spacer>

      <v-btn text>
          <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
      
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    </nav>
</template>

<script>
    export default {
      name: 'Navbar', 
      data: ()=> ({

      }),
      methods: {
        smoothieForm() {
          this.$router.push('/add-smoothie')
        },
        goHome() {
          this.$router.push('/')
        },
      } 
    }
</script>

<style lang="scss" scoped>

</style>