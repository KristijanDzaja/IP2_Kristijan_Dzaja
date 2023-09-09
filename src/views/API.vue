<template>
    <div class="sve">
        <div class="blur-background"></div>
        <div class="api-page">
            <h1>API Page</h1>
            <input v-model="name" @input="fetchData" placeholder="Enter a name">
            <h2>Name: {{ name }}</h2>
            <p>Number of entries: {{ count }}</p>
            <ul>
                <li v-for="country in countries" :key="country.country_id">
                    <img :src="getFlagUrl(country.country_id)" alt="flag" width="20" height="15">
                    {{ country.country_id }} - {{ country.probability }}
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            name: '',
            countries: [],
            count: 0,
        };
    },
    methods: {
        async fetchData() {
            try {
                const response = await axios.get(`https://api.nationalize.io?name=${this.name}`);
                this.countries = response.data.country;
                this.count = response.data.count;
            } catch (error) {
                console.error(error);
            }
        },
        getFlagUrl(countryCode) {
            return `https://flagcdn.com/w20/${countryCode.toLowerCase()}.png`;
        },
    },
};
</script>
  

<style scoped>
.api-page {
    text-align: center;
    margin-top: 2rem;
    font-family: Arial, sans-serif;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    position: relative;
    z-index: 1;
}

.sve {
    position: relative;
    height: calc(100vh - 64px);
    width: 100%;
}

.blur-background {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url('../assets/slika.jpeg');
    background-size: cover;
    background-position: center;
    filter: blur(4px);
    -webkit-filter: blur(1.5px);
    z-index: -1;
}

h1 {
    color: #ffffff;
    text-shadow: 2px 2px 4px #000000;
}

label {
    font-size: 1.2rem;
}

input {
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 1rem;
}

.results {
    margin-top: 2rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #14e679;
    margin: 0.5rem;
    padding: 0.5rem;
}
</style>
