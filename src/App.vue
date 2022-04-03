<template>
  <div id="app" class="text-center">
    <div class="container">
      <Nav />
    </div>
    <div class="mt-5 pages">
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </div>
    <div class="container">
      <Footer />
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Nav: Nav,
    Footer: Footer,
  },
};
</script>



<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap");

$poppins: "Poppins", sans-serif;
$verdeClaro: #a1a275;
$verdeEscuro: #3c5446;
$castanhoClaro: #e5d6bb;
$bege: #aa7d6f;

#app {
  font-family: $poppins;
  font-weight: 300;
  transition: 0.2s ease-in-out;
}

.activeTab {
  font-weight: 600 !important;
  background-color: rgba($color: $verdeClaro, $alpha: 0.2);
  transition: 0.5s ease-in-out;
  border-radius: 10px;
}

.pages {
  background-color: rgba(#a1a275, 0.5);
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #888888 !important;
}

.pages {
  box-shadow: inset 0px 4px 16px -4px rgba(51, 51, 51, 0.62);
}
</style>
