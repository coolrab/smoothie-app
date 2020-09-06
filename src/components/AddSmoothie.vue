<template>
    <div>
        <v-card class="ma-6 pb-4">
            <v-card-title class="justify-center indigo--text">Add New Smoothie</v-card-title>
            <v-card class="ma-2 px-2 py-3" flat>
                <v-card-text>
                <v-form ref="form">
                <v-text-field label="Title" v-model="title" prepend-icon="mdi-pencil-circle" :rules="inputRules"></v-text-field>
                <div v-for="(ing, index) in ingredients" :key="index">
                    <v-text-field label="Ingredient" v-model="ingredients[index]" prepend-icon="mdi-pencil-circle"></v-text-field>
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
                if(this.$refs.form.validate()) {
                    db.collection('smoothies').add({
                        title: this.title,
                        ingredients: this.ingredients
                    })
                    this.$refs.form.reset()
                    this.$refs.form.resetValidation()
                }
                // console.log(this.title, this.ingredients )
                
            },  
            addIng(){
                if(this.$refs.form.validate()) {
                    this.ingredients.push(this.another)
                    this.another = ''
                    this.$refs.form.resetValidation()
                    console.log(this.ingredients)
                }
            }
        }
    }
</script>

<style scoped>

</style>