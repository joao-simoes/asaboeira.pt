<template>
  <div id="app" class="text-center">
    <div class="container">
      <Nav />
    </div>
    <div>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </div>
  </div>
</template>

<script>
import Nav from "./components/Nav.vue";

export default {
  name: "App",
  components: {
    Nav: Nav,
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
  font-weight: 200;
  transition: 0.2s ease-in-out;
}

.activeTab {
  font-weight: 400 !important;
  background-color: rgba($color: $verdeClaro, $alpha: 0.2);
  transition: 0.5s ease-in-out;
  border-radius: 10px;
}

.overlay-left,
.overlay-right,
.overlay-top,
.overlay-bottom {
  background: #888888 !important;
}
</style>
