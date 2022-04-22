<template>
  <div class="contactos">
    <div class="container py-5">
      <Room
        v-for="(room, i) in rooms"
        :key="i"
        :index="i"
        :name="room.name"
        :desc="room.desc"
        :priceOneNight2ppl="
          room.priceOneNight2ppl ? room.priceOneNight2ppl : 'NA'
        "
        :priceOneNight3ppl="
          room.priceOneNight3ppl ? room.priceOneNight3ppl : 'NA'
        "
        :priceMoreNights2ppl="
          room.priceMoreNights2ppl ? room.priceMoreNights2ppl : 'NA'
        "
        :priceMoreNights3ppl="
          room.priceMoreNights3ppl ? room.priceMoreNights3ppl : 'NA'
        "
        :priceMoreNights4ppl="
          room.priceMoreNights4ppl ? room.priceMoreNights4ppl : 'NA'
        "
        :nrPeople="room.nrPeople"
        :extras="room.extras"
        :imgsQt="room.imgsQt"
        :conditions="room.conditions ? room.conditions : 'NA'"
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
          priceOneNight2ppl: "75€",
          priceMoreNights2ppl: "70€",
          priceOneNight3ppl: "85€",
          priceMoreNights3ppl: "80€",
          desc: "Quarto com uma cama de casal e uma cama de solteiro.",
          nrPeople: "2 - 3",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 2,
        },
        {
          name: "Quarto 2",
          priceOneNight2ppl: "85€",
          priceMoreNights2ppl: "80€",
          desc: "Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo.",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV", "Vista Rio Tejo"],
          imgsQt: 2,
        },
        {
          name: "Quarto 3",
          priceOneNight2ppl: "80€",
          priceMoreNights2ppl: "85€",
          desc: "Quarto com 1 cama de casal, com uma deslumbrante vista para o Rio Tejo .",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV", "Vista Rio Tejo"],
          imgsQt: 2,
        },
        {
          name: "Quarto 4",
          priceOneNight2ppl: "75€",
          priceMoreNights2ppl: "70€",
          priceOneNight3ppl: "80€",
          priceMoreNights3ppl: "85€",
          desc: "Quarto com 1 cama de casal e uma cama de solteiro.",
          nrPeople: "2 - 3",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 2,
        },
        {
          name: "Quarto 5",
          priceOneNight2ppl: "75€",
          priceMoreNights2ppl: "70€",
          desc: "Duas camas de solteiro.",
          nrPeople: "2",
          extras: ["WC", "Aquecimento", "TV"],
          imgsQt: 1,
        },
        {
          name: "Quarto 6",
          priceOneNight2ppl: "75€",
          priceMoreNights2ppl: "70€",
          desc: "Quarto com uma cama de casal.",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV"],
          imgsQt: 1,
        },
        {
          name: "Quarto 7",
          priceOneNight2ppl: "75€",
          priceMoreNights2ppl: "70€",
          desc: "Quarto com uma cama de casal.",
          nrPeople: "2",
          extras: ["WC", "Ar-condicionado", "TV"],
          imgsQt: 1,
        },
        {
          name: "Quarto 8",
          priceMoreNights3ppl: "110€",
          priceMoreNights4ppl: "130€",
          desc: "Quarto com uma cama de casal, uma cama de solteiro e beliche. ",
          nrPeople: "3 - 4",
          extras: [
            "WC Partilhado",
            "Sala e Cozinha comum",
            "Espaço independente da casa ",
            "TV",
          ],
          imgsQt: 3,
          conditions: "Mínimo de 2 noites",
        },
        {
          name: "Quarto 9",
          priceMoreNights3ppl: "110€",
          priceMoreNights4ppl: "130€",
          desc: "Quarto com uma cama de casal, uma cama de solteiro e beliche. ",
          nrPeople: "3 - 4",
          extras: ["WC Partilhado", "Espaço independente da casa ", "TV"],
          imgsQt: 3,
          conditions: "Mínimo de 2 noites",
        },
        {
          name: "Quarto 10",
          priceMoreNights3ppl: "110€",
          priceMoreNights4ppl: "130€",
          desc: "Quarto com uma cama de casal, uma cama de solteiro e beliche. ",
          nrPeople: "3 - 4",
          extras: [
            "WC Privado",
            "Sala e Cozinha privadas",
            "Espaço Independente da Casa",
            "TV",
          ],
          imgsQt: 3,
          conditions: "Mínimo de 2 noites",
        },
        {
          name: "Casa Azul",
          priceMoreNights3ppl: "120€",
          desc: "Quarto com uma cama de casal, uma cama de solteiro e beliche. ",
          nrPeople: "3",
          extras: [
            "WC Privado",
            "Sala e Cozinha privadas",
            "Espaço Independente da Casa",
            "TV",
          ],
          imgsQt: 4,
          conditions: "Mínimo de 2 noites",
        },
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
