const container = document.getElementById("klinik-container");
let html = "";

klinikHimti.forEach(item => {
  html += `
    <article class="card">
      <img class="item-images" src="${item.images}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.price ? 
        `<a href="https://shopee.co.id/lapakinformatika" class="btn cta">Beli - Rp${item.price.toLocaleString('id-ID')}</a>`
        : `<a href="https://api.whatsapp.com/send?phone=6285840407463" class="btn cta" target="_blank">Hubungi Kami</a>`
      }
    </article>
  `;
});

container.innerHTML = html;

