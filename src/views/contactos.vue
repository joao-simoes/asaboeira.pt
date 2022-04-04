
<template>
  <div class="contactos">
    <div class="container">
      <div class="row py-4">
        <div class="col-6">
          <div style="position: relative">
            <img
              src="../assets/img/7.jpg"
              alt="Contactos #1"
              width="70%"
              height="auto"
            />
          </div>
        </div>
        <div class="col-6 my-5 py-3" style="text-align: left">
          <p>
            A Saboeira gostaria de vos pedir que deixem aqui as vossas opiniões,
            sugestões ou dúvidas, para que desta forma possamos oferecer-vos a
            melhor estadia, neste paraíso junto ao Rio Tejo.
          </p>
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
          <img
            class="mt-4"
            src="../assets/img/6.jpg"
            alt="Contactos #2"
            width="105%"
            height="auto"
          />
        </div>
      </div>
      <div class="row py-4">
        <form class="w-50 mx-auto" id="request_form">
          <h3 class="mb-2">Formulário</h3>
          <div class="my-3">
            <input
              id="client_name"
              type="text"
              name="client_name"
              placeholder="Nome"
              class="form-control rounded-pill"
            />
          </div>
          <div class="my-3">
            <input
              id="client_email"
              type="email"
              name="client_email"
              placeholder="oteu@mail.pt"
              class="form-control rounded-pill"
            />
          </div>
          <div class="my-3">
            <textarea
              id="client_desc"
              type="text"
              name="client_desc"
              placeholder="Descrição"
              class="form-control rounded-3"
              rows="15"
            ></textarea>
          </div>
          <button
            id="btt_submit"
            type="submit"
            class="btn"
            style="background-color: #202020; color: white"
          >
            Enviar
          </button>
        </form>
      </div>
      <div class="row py-4">
        <iframe width="900" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=900&amp;height=500&amp;hl=en&amp;q=Saboeira%20Belver+()&amp;t=k&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> 
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 15px;
}
</style>
