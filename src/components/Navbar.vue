<template>
    <nav class="navbar">
        
    <v-app-bar
      color="indigo darken-2"
      dark
      height="100"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-div class="nav-content">
            <router-link to="">
                <span class="nav-title">
                    Smoothie Bar
                </span>
            </router-link>
            <a href="">
                <v-btn
                color="pink"
                dark
                large
                absolute
                bottom
                right
                fab
              >
                <v-icon large>mdi-plus</v-icon>
              </v-btn>
            </a>
        </v-div>
      <v-toolbar-title>
          <span>Title</span>
      </v-toolbar-title>

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
      name: 'Navbar'  
    }
</script>

<style lang="scss" scoped>

</style>