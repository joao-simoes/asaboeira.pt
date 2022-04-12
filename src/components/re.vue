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
      <h2 class="mt-5"><b>{{ name }}</b></h2>
      <h6 class="mt-4">{{ desc }}</h6>
      <h6 v-if="priceOneNight2ppl != 'NA'"><b>{{ priceOneNight2ppl }}</b> uma noite</h6>
      <h6 v-if="priceMoreNights2ppl != 'NA'"><b>{{ priceMoreNights2ppl }}</b> p/ noite</h6>
      <h6 v-if="priceOneNight3ppl != 'NA'" ><b>{{ priceOneNight3ppl }}</b> uma noite</h6>
      <h6 v-if="priceMoreNights3ppl != 'NA'"><b>{{ priceMoreNights3ppl }}</b> p/ noite</h6>
      <h6 v-if="priceMoreNights4ppl != 'NA'"><b>{{ priceMoreNights4ppl }}</b> p/ noite</h6>
      <h6 class="mt-4">Nr. Pessoas: <b>{{ nrPeople }}</b></h6>
      <h6 class="mt-4"><b>Extras:</b></h6>
      <ul>
        <li v-for="extra in extras" :key="extra">
          {{extra}}
        </li>
      </ul>
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
  },
};
</script>

<style scoped lang="scss">
</style>
