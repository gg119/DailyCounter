<template>
    <div class="wotd">
        <h3>Word of the Day: {{randomWord}}</h3>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "WordOfTheDay",
        data(){
            return{
                randomWord: null
            }
        },

        mounted() {
            axios.get("https://wordsapiv1.p.rapidapi.com/words/?random=true", {
                headers: {
                    "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
                    "X-RapidAPI-Key": "cb3bf0c26amshedce2da26d08b30p1b486fjsnc56bc33c80b8"
                }
            }).then(response => {
                this.randomWord = response.data.word;
                
            })
        },
    }
</script>

<style scoped>
    .wotd {
        display:flex;
        justify-content: center;
    }
</style>