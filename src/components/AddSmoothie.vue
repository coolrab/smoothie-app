<template>
    <div>
        <v-card class="ma-6 pb-4">
            <v-card-title class="justify-center indigo--text">Add New Smoothie</v-card-title>
            <v-card class="ma-2 px-2 py-3" flat>
                <v-card-text>
                <v-form ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-pencil-circle" :rules="inputRules"></v-text-field>
                <div v-for="(ing, index) in ingredients" :key="index">
                    <v-text-field label="Ingredient" v-model="ingredients[index]" prepend-icon="mdi-pencil-circle" clear-icon="mdi-close-circle" clearable></v-text-field>
                </div>
                <v-text-field label="Add-Ingredient"  prepend-icon="mdi-pencil-circle" :rules="inputRules" @keypress.enter.prevent="addIng" v-model="another"></v-text-field>
                </v-form>   
                </v-card-text>
            </v-card>
            <v-btn x-large class="pink white--text d-flex ma-auto" @click="addSmoothie" >Add Smoothie</v-btn>
        </v-card>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    import slugify from 'slugify'
    export default {
        name: 'AddSmoothie',
        data: ()=> ({
            title: '',
            another: '',
            ingredients: [],
            slug: '',
            inputRules: [
                v => !!v || 'You must enter a title',
            ]
        }),
        methods: {
            addSmoothie() {
                // this.$refs.form.resetValidation()
                if(this.$refs.form.validate()) {
                    //create a slug
                    this.slug = slugify(this.title, {
                        replacement: '-',
                        remove: /[$*_+~.()'"!\-:@]/g,
                        lower: true,
                    })
                    db.collection('smoothies').add({
                        title: this.title,
                        ingredients: this.ingredients,
                        slug: this.slug,
                    }).then(()=> {
                        this.$router.push({name: 'Home'})
                    }).catch(err => {
                        console.log(err)
                    })
                    this.$refs.form.reset()
                    
                }
                // console.log(this.title, this.ingredients )
                
            },  
            addIng(){
                this.$refs.form.resetValidation()
                if(this.$refs.form.validate()) {
                    this.ingredients.push(this.another)
                    this.another = ''
                    this.$refs.form.resetValidation()
                    console.log(this.ingredients)
                }
            },
            deleteIng(ing) {
                this.$refs.form.resetValidation()
                this.ingredients = this.ingredients.filter(ingridient => {
                    return ingridient != ing
                })
            }
        }
    }
</script>

<style scoped>

</style>