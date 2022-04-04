<template>
  <div>
    <div class="d-flex justify-content-between align-items-end mt-4">
      <div class="text-start">
        <h5><b>A Saboeira - Turismo Rural</b></h5>
        <p>
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="me-2"
          />asaboeira@hotmail.com
        </p>
        <p>
          <font-awesome-icon icon="fa-solid fa-phone-alt" class="me-2" />+351
          241 094 913
        </p>
        <p>
          <font-awesome-icon icon="fa-solid fa-home" class="me-2" />Rua da
          Estação 3, 6040-024 Belver
        </p>
      </div>

      <div class="text-end w-25 w-md-50">
        <div>
          <a href="https://www.facebook.com/turismorural.asaboeira" target="_blank"
            ><font-awesome-icon icon="fab fa-facebook" size="xl" class="me-2"
          /></a>
          <a href="https://www.instagram.com/asaboeira.turismorural/" target="_blank"
            ><font-awesome-icon icon="fab fa-instagram" size="xl" class="me-2"
          /></a>
        </div>

        <div class="my-3">
          <a href="https://www.livroreclamacoes.pt/inicio/reclamacao " target="_blank"
            ><img
              src="../assets/livro_de_reclamacoes.jpeg"
              alt="Livro de Reclamações"
              width="40%"
          /></a>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-center">
      <p class="my-4 credits">
        All Rights Reserved ©
        <a href="https://www.joao-simoes.pt" target="_blank"
          ><b>João Simões</b></a
        >, {{ year }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
  data() {
    return {
      year: 0,
    };
  },
  mounted() {
    const today = new Date();
    this.year = today.getFullYear();
  },
};
</script>

<style scoped lang="scss">
ul {
  list-style: none;
}

a {
  color: #000000;
  text-decoration: none;
}

h5 {
  line-height: 50px;
}

p {
  line-height: 10px;
}

@media only screen and (max-width: 767px) { 
  p {
  font-size: 14px !important;
  }
}

.credits {
  font-size: 14px;
}
</style>
