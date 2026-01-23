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

const numberOfMails = 10;

// Mail counter for table
let countingMail = 0;

//Alert Gestione
alertWaiting.classList.remove('d-none');
//Counter per far rimuovere o aggiungere il loader
let remaining = 10;

//Number Mail Array

const receivedEmails = [];

//Container HTML

let containerHtml = '';

// Control on Fetching

let isEmailFetching = false;

//Event Click
buttonNewMail.addEventListener('click', function () {
  if (isEmailFetching) return;

  //Reset dei dati
  tableMail.innerHTML = ``;
  countingMail = 0;
  remaining = 10;
  alertWaiting.classList.remove('d-none');
  receivedEmails.length = 0;
  containerHtml = '';
  buttonNewMail.disabled = true;
  isEmailFetching = true;

  //Ciclo For

  for (let i = 0; i < numberOfMails; i++) {
    axios
      .get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((response) => {
        const randomMail = response.data.response;
        receivedEmails.push(randomMail);

        countingMail++;

        containerHtml += `<tr>
          <th scope="row">${countingMail}</th>
          <td>${randomMail}</td>
        </tr>`;

        if (receivedEmails.length === numberOfMails) {
          tableMail.innerHTML = containerHtml;
        }
      })

      .finally(() => {
        remaining--;

        if (remaining === 0) {
          alertWaiting.classList.add('d-none');
          buttonNewMail.disabled = false;
          isEmailFetching = false;
        }
      });
  }
});

/*Another Solution
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

for (let i = 0; i < numberOfMails; i++) {
  axios
    .get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => {
      const randomMail = response.data.response;
      receivedEmails.push(randomMail);

      countingMail++;

      containerHtml += `<tr>
          <th scope="row">${countingMail}</th>
          <td>${randomMail}</td>
        </tr>`;

      if (receivedEmails.length === numberOfMails) {
        tableMail.innerHTML = containerHtml;
      }
    })

    .finally(() => {
      remaining--;

      if (remaining === 0) {
        alertWaiting.classList.add('d-none');
      }
    });
}

/* Another solution
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
