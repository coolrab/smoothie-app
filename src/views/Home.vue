<template>
  <div class="home">
    
      <v-row dense class="my-4">
        <v-col cols="4" class="px-4" v-for="smoothie in smoothies" :key= "smoothie.id">
          <v-card class="px-4" >
            <v-btn absolute right text class="mt-4" @click="deleteSmoothie(smoothie.id)">
              <v-icon  >mdi-delete</v-icon>
            </v-btn>
            <v-card-title >{{ smoothie.title }}</v-card-title>
            <v-list-item v-for="(ingredient, i) in smoothie.ingredients" :key="i">
              <v-chip small flat class="pink lighten-3">
                <v-list-item-content>{{ingredient}}</v-list-item-content>
              </v-chip>
            </v-list-item>
            <v-card-text></v-card-text>
          </v-card>
        </v-col>
      </v-row>
    
  </div>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({
      smoothies: [
        {
          id: '1',
          title: 'Sharbat-e-Jannat',
          slug:'sharbat-e-jannat',
          ingredients:['lemon', 'water', 'sugar']
        },
        {
          id: '2',
          title: 'Beler-Sharbat',
          slug:'beler-sharbat',
          ingredients:['bel', 'water', 'sugar', 'milk']
        },
        {
          id: '3',
          title: 'Kacha-Amer-Sharbat',
          slug:'beler-sharbat',
          ingredients:['green mango', 'water', 'sugar', 'salt', 'green chilli']
        },
      ]
    }),

    methods: {
      deleteSmoothie(id){
        this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })

      }
    }
  }
</script>
