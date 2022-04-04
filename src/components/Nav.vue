<template>
  <div class="row m-4">
    <div class="col-8 col-md-3">
      <img
        src="../assets/logo.png"
        alt="A Saboeira"
        width="100%"
        height="auto"
      />
    </div>

    <!--Desktop-->
    <div class="col-4 col-md-9 d-none d-md-block">
      <ul class="d-flex justify-content-around align-items-end h-100">
        <li class="p-2" id="home"><router-link to="/">Home</router-link></li>
        <li class="p-2" id="nossoespaco">
          <router-link to="/nossoespaco">O nosso espaço</router-link>
        </li>
        <li class="p-2" id="alojamento">
          <router-link to="/alojamentos">Alojamentos</router-link>
        </li>
        <li class="p-2" id="servicos">
          <router-link to="/servicos">Serviços</router-link>
        </li>
        <li class="p-2" id="contactos">
          <router-link to="/contactos">Contactos</router-link>
        </li>
      </ul>
    </div>
    <!--Desktop-->

    <!--Mobile-->
    <div class="col-4 col-md-9 d-block d-md-none">
      <font-awesome-icon
        style="z-index: 1000"
        @click="menu()"
        icon="fa-solid fa-bars"
        class="
          fa-lg
          d-block d-md-none
          position-fixed
          top-25
          end-0
          me-4
          text-end
        "
      />
      <div class="sideMenu" id="sideMenu">
        <div class="position-relative">
          <ul style="margin-top: 30%;">
            <li class="py-4" id="home" @click="menu()">
              <router-link to="/">Home</router-link>
            </li>
            <li class="py-4" id="nossoespaco" @click="menu()">
              <router-link to="/nossoespaco">O nosso espaço</router-link>
            </li>
            <li class="py-4" id="alojamento" @click="menu()">
              <router-link to="/alojamentos">Alojamentos</router-link>
            </li>
            <li class="py-4" id="servicos" @click="menu()">
              <router-link to="/servicos">Serviços</router-link>
            </li>
            <li class="py-4" id="contactos" @click="menu()">
              <router-link to="/contactos">Contactos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--Mobile-->
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      active: "home",
      open: false,
    };
  },
  methods: {
    setActive(id) {
      document.getElementById(this.active).classList.remove("activeTab"); //remove style from previous
      this.active = id; //set new
      document.getElementById(this.active).classList.add("activeTab"); //add style to new
    },
    menu() {
      let menu = document.getElementById("sideMenu");

      if (this.open) {
        menu.style.right = "-100%";
      } else {
        menu.style.right = "0";
      }

      this.open = !this.open;
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

.sideMenu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 100vw;
  height: 100vh;
  background-color: white;
  z-index: 900;
  transition: 0.2s ease-in-out;
}
</style>
