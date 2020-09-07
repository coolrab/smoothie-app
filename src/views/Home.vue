<template>
  <div class="home">
    
      <v-row dense class="my-4">
        <v-col cols="4" class="px-4" v-for="smoothie in smoothies" :key= "smoothie.id">
          <v-card class="px-4" >
            <v-btn absolute right text class="mt-4" @click="deleteSmoothie(smoothie.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-card-title >{{ smoothie.title }}</v-card-title>
            <v-list-item v-for="(ingredient, i) in smoothie.ingredients" :key="i">
              <v-chip small flat class="pink lighten-3">
                <v-list-item-content>{{ingredient}}</v-list-item-content>
              </v-chip>
            </v-list-item>
            <v-btn
            color="indigo"
            dark
            x-small
            absolute
            bottom
            right
            fab
            @click="editSmoothie(smoothie.slug)">
              <v-icon small text>mdi-pencil-outline</v-icon>
            </v-btn> 
          </v-card>
        </v-col>
      </v-row>
    
  </div>
</template>

<script>
 import db from '@/firebase/init';
  export default {
    name: 'Home',

    data: () => ({
      smoothies: [
      
      ]
    }),

    methods: {
      deleteSmoothie(id){
        //delete doc from firestore
        db.collection('smoothies').doc(id).delete()
        .then( () => {
          this.smoothies = this.smoothies.filter(smoothie => {
          return smoothie.id != id
        })
        })
      },
      editSmoothie(slug) {
        this.$router.push({name:'EditSmoothie', params: {smoothie_slug: slug}})
      }
    },
    created() {
      //fetch data from firestore
      db.collection('smoothies').get() 
      .then(snapshot => {
        snapshot.forEach(doc => {
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        });
      })
    },
    
  }
</script>
