/*generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
Buon Lavoro*/

// Const
const rowForEmail = document.getElementById('emailDivRow');

const buttonNewMail = document.getElementById('buttonstampnewmail');

const tableMail = document.getElementById('tablemail');

const alertWaiting = document.getElementById('waitingforgenerate');

// Mail counter for table
let countingMail = 0;

//Alert Gestione
alertWaiting.classList.remove('d-none');

let remaining = 10;

//Event Click

buttonNewMail.addEventListener('click', function () {
  tableMail.innerHTML = ``;
  countingMail = 0;
  remaining = 10;
  alertWaiting.classList.remove('d-none');

  for (let i = 0; i < 10; i++) {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        const randomMail = response.data.response;

        countingMail++;

        tableMail.innerHTML += `<tr>
          <th scope="row">${countingMail}</th>
          <td>${randomMail}</td>
        </tr>`;
      })

      .finally(() => {
        remaining--;

        if (remaining === 0) {
          alertWaiting.classList.add('d-none');
        }
      });
  }
});

/*
buttonNewMail.addEventListener('click', function () {
  rowForEmail.innerHTML = ``;

  for (let i = 0; i < 10; i++) {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        const randomMail = response.data.response;

        rowForEmail.innerHTML += `<div class="col gy-3">
          <h2 class="fs-200 text-center">${randomMail}</h2>`;

        console.log(randomMail);
      });
  }
});
*/

//Axios Call in For Cicle

for (let i = 0; i < 10; i++) {
  axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
      const randomMail = response.data.response;

      countingMail++;

      tableMail.innerHTML += `<tr>
          <th scope="row">${countingMail}</th>
          <td>${randomMail}</td>
        </tr>`;
    })

    .finally(() => {
      remaining--;

      if (remaining === 0) {
        alertWaiting.classList.add('d-none');
      }
    });
}

/*
for (let i = 0; i < 10; i++) {
  axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
      const randomMail = response.data.response;

      rowForEmail.innerHTML += `<div class="col gy-3">
          <h2 class="fs-200 text-center">${randomMail}</h2>`;

      console.log(randomMail);
    });
}
*/
