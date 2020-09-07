<template>
    <div>
        <h2>Edit {{ smoothie.title}} Smoothie</h2>
        <v-card class="ma-6 pb-4">
            <v-card-title class="justify-center indigo--text">{{ smoothie.title}}</v-card-title>
            <v-card class="ma-2 px-2 py-3" flat>
                <v-card-text>
                <v-form ref="form">
                <v-text-field label="Title" v-model="smoothie.title" prepend-icon="mdi-pencil-circle" :rules="inputRules"></v-text-field>
                <div v-for="(ing, index) in smoothie.ingredients" :key="index">
                    <v-text-field label="Ingredient" v-model="smoothie.ingredients[index]" prepend-icon="mdi-pencil-circle" clear-icon="mdi-close-circle" clearable></v-text-field>
                </div>
                <v-text-field label="Add-Ingredient (press enter)"  prepend-icon="mdi-pencil-circle" @keypress.enter.prevent="addIng" v-model="another"></v-text-field>
                </v-form>   
                </v-card-text>
            </v-card>
            <v-btn x-large class="pink white--text d-flex ma-auto" @click="editSmoothie" >Update Smoothie</v-btn>
        </v-card>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    import slugify from 'slugify'
    export default {
        name: "EditSmoothie",
        data: ()=> ({
            smoothie: '',
            another: '',
            inputRules: [
                v => !!v || 'You must enter a title',
            ]
        }),
        methods: {
            editSmoothie(){
                
                if(this.$refs.form.validate()) {
                    //this.$refs.form.resetValidation()
                    //create a slug
                    this.smoothie.slug = slugify(this.smoothie.title, {
                        replacement: '-',
                        remove: /[$*_+~.()'"!\-:@]/g,
                        lower: true,
                    })
                    db.collection('smoothies').doc(this.smoothie.id).update({
                        title: this.smoothie.title,
                        ingredients: this.smoothie.ingredients,
                        slug: this.smoothie.slug,
                    }).then(()=> {
                        this.$router.push({name: 'Home'})
                    }).catch(err => {
                        console.log(err)
                    })
                        
                }
            },
            addIng(){
                if(this.$refs.form.validate()) {
                    this.smoothie.ingredients.push(this.another)
                    this.another = ''
                    this.$refs.form.resetValidation()
                    console.log(this.ingredients)
                }
            },
            deleteIng(ing) {
                this.smoothie.ingredients = this.smoothie.ingredients.filter(ingridient => {
                    return ingridient != ing
                })
            }
        },
        created(){
            let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug )
            ref.get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.smoothie = doc.data()
                    this.smoothie.id = doc.id
                })
            })
        },
        
    }
</script>

<style scoped>

</style>