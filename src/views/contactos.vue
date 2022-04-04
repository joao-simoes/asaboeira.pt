
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3078.976368066847!2d-7.9592187843711635!3d39.49244821925324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd181a7785efbd9d%3A0x939c2f77edc9c008!2sA%20Saboeira%20-%20Turismo%20Rural!5e0!3m2!1spt-PT!2spt!4v1634390034130!5m2!1spt-PT!2spt"
        width="900" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  border-radius: 15px;
}
</style>
