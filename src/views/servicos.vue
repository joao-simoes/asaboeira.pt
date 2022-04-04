
<template>
  <div class="nossoespaco">
    <div class="container">
      <div class="py-5" style="position: relative; text-align: left">
        <img src="../assets/img/4.jpg" alt="Serviços #1" />
        <img class="imgOver d-none d-md-block" src="../assets/img/5.jpg" alt="Serviços #2" />
      </div>
      <div class="pb-5" style="text-align: left">
        <h4 class="my-5">
          Podemos ser o elo de ligação para diversos tipos de atividades *, tais
          como:
        </h4>
        <ul>
          <li
            class="mt-4 mb-2"
            style="border-bottom: 1px solid black; width: 20%"
          >
            <h5><b>Desporto / Aventura</b></h5>
          </li>
          <li>
            <a href="https://gaviadventure.com/" target="_blank"
              >GaviAdventure
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right"
            /></a>
          </li>
          <li
            class="mt-4 mb-2"
            style="border-bottom: 1px solid black; width: 20%"
          >
            <h5><b>Cultura</b></h5>
          </li>
          <li>
            <a href="http://www.cm-gaviao.pt/pt/turismo/museus" target="_blank"
              >Núcleo Museológico das Mantas e Tapeçarias de Belver
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right"
            /></a>
          </li>
          <li>
            <a href="http://www.cm-gaviao.pt/pt/turismo/museus" target="_blank"
              >Museu do Sabão
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right"
            /></a>
          </li>
          <li
            class="mt-4 mb-2"
            style="border-bottom: 1px solid black; width: 20%"
          >
            <h5><b>Restaurantes em Belver</b></h5>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Belver
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right" />
            </a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Castelo
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right"
            /></a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Dente Leve
              <font-awesome-icon icon="fa-solid fa-long-arrow-alt-right"
            /></a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Alamal</a
            ><font-awesome-icon icon="fa-solid fa-long-arrow-alt-right" />
          </li>
        </ul>
        <p>
          <b>* todas as atividades devem ser solicitadas antecipadamente!</b>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  margin-left: 10%;
  border-radius: 15px;
  width: 65%;
}

.imgOver {
  position: absolute;
  top: 25%;
  right: 5%;
  width: 25%;
  text-align: center;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: -2px -2px 10px -3px rgba(161, 162, 117, 0.5);
}

a {
  color: #000000;
  text-decoration: none;
}

@media only screen and (max-width: 767px) { 
  img {
    margin-left: 0;
    border-radius: 15px;
    width: 100%;
  }
  li {
    width: 60% !important;
  }
}
</style>
