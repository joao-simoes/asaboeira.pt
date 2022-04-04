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
      <h6 class="mt-5"><b>{{ priceOneNight }}</b> uma noite</h6>
      <h6 class="mt-2"><b>{{ priceMoreNights }}</b> p/ noite</h6>
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
    priceOneNight: String,
    priceMoreNights: String,
    nrPeople: String,
    index: Number,
    extras: Array,
    imgsQt: Number,
  },
};
</script>

<style scoped lang="scss">
</style>
