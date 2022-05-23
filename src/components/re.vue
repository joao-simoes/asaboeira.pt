<template>
  <div class="row py-5">
    <div class="col-12 col-md-7">
      <carousel :perPage="1">
        <slide v-for="i in imgsQt" :key="i">
          <img
            :src="require(`../assets/img/quarto${index + 1}/${i}.jpg`)"
            :alt="'Quarto' + i"
            width="100%"
          />
        </slide>
      </carousel>
    </div>
    <div class="col-12 col-md-5 text-start ps-5">
      <h2 class="mt-1">
        <b>{{ name }}</b>
      </h2>
      <h6 class="my-4">{{ desc }}</h6>
      <h5 v-if="priceMoreNights2ppl != 'NA' || priceOneNight2ppl != 'NA'">
        2 pessoas:
      </h5>
      <h6 v-if="priceOneNight2ppl != 'NA'">
        <b>{{ priceOneNight2ppl }}</b> p/ noite -> reservas de apenas uma noite
      </h6>
      <h6 v-if="priceMoreNights2ppl != 'NA'">
        <b>{{ priceMoreNights2ppl }}</b>  p/ noite -> reservas superiores a 1 noite
      </h6>
      <h5 v-if="priceOneNight3ppl != 'NA' || priceMoreNights3ppl != 'NA'">
        3 pessoas:
      </h5>
      <h6 v-if="priceOneNight3ppl != 'NA'">
        <b>{{ priceOneNight3ppl }}</b> p/ noite -> reservas de apenas uma noite
      </h6>
      <h6 v-if="priceMoreNights3ppl != 'NA'">
        <b>{{ priceMoreNights3ppl }}</b>  p/ noite -> reservas superiores a 1 noite
      </h6>
      <h5 v-if="priceMoreNights4ppl != 'NA'">4 pessoas:</h5>
      <h6 v-if="priceMoreNights4ppl != 'NA'">
        <b>{{ priceMoreNights4ppl }}</b>  p/ noite -> reservas superiores a 1 noite
      </h6>
      <h6 class="mt-4">
        <font-awesome-icon class="me-3" icon="fas fa-user-friends" /><b>{{
          nrPeople
        }}</b>
      </h6>
      <h6 class="mt-4"><b>Extras:</b></h6>
      <ul>
        <li v-for="extra in extras" :key="extra">
          {{ extra }}
        </li>
      </ul>
      <h6 v-if="conditions != 'NA'" class="mt-4"><b>Condições:</b></h6>
      <p v-if="conditions != 'NA'">{{ conditions }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    desc: String,
    priceOneNight2ppl: String,
    priceOneNight3ppl: String,
    priceMoreNights2ppl: String,
    priceMoreNights3ppl: String,
    priceMoreNights4ppl: String,
    nrPeople: String,
    index: Number,
    extras: Array,
    imgsQt: Number,
    conditions: String,
  },
};
</script>

<style scoped lang="scss">
</style>
