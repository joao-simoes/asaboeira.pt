<template>
  <div class="row m-4">
    <div class="col-3">
      <img
        src="../assets/logo.png"
        alt="A Saboeira"
        width="100%"
        height="auto"
      />
    </div>
    <div class="col-9">
      <ul class="d-flex justify-content-around align-items-end h-100">
        <li class="p-2" id="home"><router-link to="/">Home</router-link></li>
        <li class="p-2" id="nossoespaco">
          <router-link to="/nossoespaco">O nosso espaço</router-link>
        </li>
        <li class="p-2" id="alojamento">
          <router-link to="/">Alojamentos</router-link>
        </li>
        <li class="p-2" id="servicos">
          <router-link to="/servicos">Serviços</router-link>
        </li>
        <li class="p-2" id="contactos">
          <router-link to="/contactos">Contactos</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: "home",
    };
  },
  methods: {
    setActive(id) {
      document.getElementById(this.active).classList.remove("activeTab"); //remove style from previous
      this.active = id; //set new
      document.getElementById(this.active).classList.add("activeTab"); //add style to new
    },
  },
  mounted() {
    document.getElementById(this.active).classList.add("activeTab");

    const tabs = document.querySelectorAll("li");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        this.setActive(tab.id);
      });
    });
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
</style>
