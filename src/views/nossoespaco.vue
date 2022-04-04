<template>
  <div class="nossoespaco">
    <div class="container">
      <div class="py-5" style="position: relative; text-align: left">
        <img src="../assets/img/2.jpg" alt="Nosso Espaço #1" />
        <div class="infoBox p-3">
          <p>
            Nesta casa cheia de história, vamos acrescentar mais uma. História
            essa que me envolve, uma saboeira, nascida e criada na Vila de
            Belver, e por isso mesmo, sou com orgulho filha desta terra.
            Preservando e homenageando as pessoas que edificaram este espaço, o
            Sr. António Seara e o Sr. Giorgio Formica, que reconstruiu esta
            belíssima casa, com o seu toque pessoal, que se vê em cada canto e
            recanto, desejamos que quem por aqui passar sinta a história aqui
            presente. Outrora uma fábrica de alpergatas, que pertenceu ao Sr.
            António Seara, edificada por sugestão do chefe da estação de Belver,
            pelas vantagens evidentes de proximidade da estação. Este introduziu
            o fabrico de diversos novos modelos de alpergatas e tornou-se
            importador de uma grande diversidade de papéis de tabaco, sendo que
            duas marcas seriam exclusivas – O Alentejano e o Luce. Com o seu
            sentido de empreendedorismo e inovação, deu trabalho a mais de 100
            pessoas, tanto de Belver como do Gavião. Foi uma grande figura na
            história do concelho, sem dúvida. Mais tarde, tomou outro rumo pelas
            mãos do Sr. Giorgio Formica e família, com o desejo tornar o
            edifício num turismo rural. A primeira vez que a família Formica foi
            a Belver foi em 1996 e o adquiram a propriedade no ano seguinte. A
            restruturação ocorreu de 1997 até 2006, ano esse em que abriu ao
            público enquanto turismo rural.
          </p>
        </div>
      </div>
      <div class="py-5" style="position: relative; text-align: right">
        <img src="../assets/img/3.jpg" alt="Nosso Espaço #1" />
        <div class="infoBox2 p-3">
          <p>
            A serenidade do espaço e toda a sua envolvência natural é de extrema
            beleza, que aconselhamos vivamente a experienciar. Estamos de
            coração e braços abertos para vos receber. Venham fazer parte da
            nossa história. Esperamos que quem por aqui passar, leve aquilo que
            procurou ao escolher este lugar.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 15px;
  width: 75%;
}

.infoBox {
  position: absolute;
  top: 20%;
  right: 0;
  width: 50%;
  text-align: center;
  border-radius: 15px;
  background-color: #ffffff;
}

.infoBox2 {
  position: absolute;
  bottom: 20%;
  left: 0;
  width: 50%;
  text-align: center;
  border-radius: 15px;
  background-color: #ffffff;
}

@media only screen and (max-width: 767px) { 
  img {
  width: 100%;
}

.infoBox {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background: none;
  margin-top: 5%;
}

.infoBox2 {
  position: relative;
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background: none;
  margin-top: 5%;
}
}
</style>
