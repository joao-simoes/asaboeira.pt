<template>
  <div class="contactos">
    <div class="container py-5">
      <Room
        v-for="(room, i) in rooms"
        :key="i"
        :index="i"
        :name="room.name"
        :desc="room.desc"
        :priceOneNight="room.priceOneNight"
        :priceMoreNights="room.priceMoreNights"
        :nrPeople="room.nrPeople"
        :extras="room.extras"
        :imgsQt="room.imgsQt"
      />
    </div>
  </div>
</template>





<script>
import Room from "../components/re.vue";

export default {
  data() {
    return {
      rooms: [
        {
          name: "Quarto 1",
          priceOneNight: "70€",
          priceMoreNights: "65€",
          desc: "Quarto com uma cama de casal e uma cama de solteiro.",
          nrPeople: "3",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 4
        },
        {
          name: "Quarto 2",
          priceOneNight: "80€",
          priceMoreNights: "75€",
          desc: "Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo.",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV", "Vista Rio Tejo"],
          imgsQt: 3
        },
        {
          name: "Quarto 3",
          priceOneNight: "80€",
          priceMoreNights: "75€",
          desc: "Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo .",
          nrPeople: "3",
          extras: ["WC", "Ar-condicionado", "TV", "Vista Rio Tejo"],
          imgsQt: 2
        },
        {
          name: "Quarto 4",
          priceOneNight: "70€",
          priceMoreNights: "65€",
          desc: "Quarto com 1 cama de casal e uma cama de solteiro.",
          nrPeople: "3",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 2
        },
        {
          name: "Quarto 5",
          priceOneNight: "70€",
          priceMoreNights: "65€",
          desc: "Duas camas de solteiro.",
          nrPeople: "2",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 1
        },
        {
          name: "Quarto 6",
          priceOneNight: "70€",
          priceMoreNights: "65€",
          desc: "Quarto com 1 cama de casal .",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV"],
          imgsQt: 1
        },
        {
          name: "Quarto 7",
          priceOneNight: "70€",
          priceMoreNights: "65€",
          desc: "Quarto com 1 cama de casal.",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV"],
          imgsQt: 1
        },
        {
          name: "Quarto 8",
          priceOneNight: "100€",
          priceMoreNights: "120€",
          desc: "Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",
          nrPeople: "4",
          extras: ["WC Partilhado", "Sala e Cozinha comum", "Espaço independente da casa ", "TV"],
          imgsQt: 2
        },
        {
          name: "Quarto 9",
          priceOneNight: "100€",
          priceMoreNights: "120€",
          desc: "Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",
          nrPeople: "4",
          extras: ["WC Partilhado", "Espaço independente da casa ", "TV"],
          imgsQt: 1
        },
        {
          name: "Quarto 10",
          priceOneNight: "100€",
          priceMoreNights: "120€",
          desc: "Quarto com 1 cama de casal, 1 casa de solteiro e beliche. (Mínimo de 2 noites)",
          nrPeople: "3",
          extras: ["WC Privado", "Sala e Cozinha privativa", "Espaço Independente da Casa", "TV"],
          imgsQt: 1
        }
      ],
    };
  },

  components: {
    Room,
  },
};
</script>





<style scoped>
img {
  border-radius: 15px;
}
</style>
