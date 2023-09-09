<template>
    <div class="sve">
        <div class="about-page">
            <div class="content">
                <h1>About Nationalize.io</h1>
                <p>Nationalize.io predicts the nationality of a person given their name.</p>
                <h3>Use Cases:</h3>
                <p>Rate Limiting: If you need to check more than 1000 names/day you need to obtain an API key.</p>
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

.about-page {
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
