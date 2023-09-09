<template>
    <div class="sve">
        <div class="home-page">
            <div class="content">
                <h1>Welcome to Vue.js API project!</h1>
                <p>This project utilizes the Nationalize.io API to predict the nationality of a name.</p>
                <p>The API is free for up to 1000 names/day. No sign up or API key needed.</p>
                <p>Use the API for analytics, ad segmenting, demographic statistics, and more.</p>
                <p>Be sure to check out our use cases for more information on how you can utilize this API.</p>
                <h2>Kristijan Džaja</h2>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
.sve {
    background-image: url('../assets/slika.jpeg');
    background-size: cover;
    background-position: center;
    height: calc(100vh - 64px);
    width: 100%;
}

.home-page {
    text-align: center;
    margin-top: 2rem;
    font-family: Arial, sans-serif;
    color: white;
    padding: 2rem;
}

.content {
    background-color: rgba(18, 17, 17, 0.808);
    padding: 2rem;
    border-radius: 10px;
}

h1 {
    color: #14e679;
    margin-bottom: 1rem;
}

p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
}
</style>
  