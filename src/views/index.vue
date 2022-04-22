<template>
  <div class="container py-5 my-5">
    <div class="position-relative">
      <img src="../assets/img/0.jpg" alt="Rio Tejo" width="90%">
      <img class="d-none d-md-block" src="../assets/img/1.jpg" alt="Pessoa" width="22%" style="position: absolute; bottom: -5%; right: 10%;">
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style lang="scss" scoped>
  img {
    border-radius: 20px;
    box-shadow: -3px -3px 10px -3px rgb(57, 86, 59);
  }
  @media only screen and (max-width: 767px) { 
    .container {
      min-height: 50vh;
    }
    img {
      width: 100% !important;
    }
}
</style>
