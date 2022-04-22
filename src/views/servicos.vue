
<template>
  <div class="nossoespaco">
    <div class="container">
      <div class="py-5" style="position: relative; text-align: left">
        <img src="../assets/img/4.jpg" alt="Serviços #1" />
        <img
          class="imgOver d-none d-md-block"
          src="../assets/img/5.jpg"
          alt="Serviços #2"
        />
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
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
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
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
          </li>
          <li>
            <a href="http://www.cm-gaviao.pt/pt/turismo/museus" target="_blank"
              >Museu do Sabão
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
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
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon class="ms-2" icon="fa-solid fa-angle-right"
              /></span>
            </a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Castelo
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Dente Leve
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
          </li>
          <li>
            <a
              href="http://www.cm-gaviao.pt/pt/turismo/gastronomia"
              target="_blank"
              >O Alamal
              <span class="seeMore"
                >(ver mais)
                <font-awesome-icon
                  class="ms-2"
                  icon="fa-solid fa-angle-right" /></span
            ></a>
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
  width: 75%;
}

.imgOver {
  position: absolute;
  top: 25%;
  right: 2%;
  width: 27%;
  text-align: center;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: -3px -3px 10px -3px rgb(57, 86, 59);
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

.seeMore {
  font-size: 12px;
}
</style>
