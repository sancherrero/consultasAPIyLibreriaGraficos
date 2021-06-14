import {mostrarJobs} from "./showJobs.js";
const botonEnviarTema = document.getElementById("botonEnviarTema");
const dibujarGrafica = document.getElementById("botonDibujarGrafica");
const ctx = document.getElementById("myChart").getContext("2d");
const works = [
  "customer-support",
  "data",
  "devops",
  "marketing",
  "software-dev",
  "design",
];
const jobsName = [];
const jobsData = [];
var firstTime = true;

const getData = async function () {
    works.map((item) => {
        getWorks(item);
    });
};

const setTarjetas = () => {
  if (firstTime != false) {
    jobsName.forEach((element) => {
      mostrarJobs(element);
    });
    desplazar();
    firstTime = false;
  } else {
    desplazar();
  }
}

const desplazar = () => {
  window.scroll({
    top: 1000,
    behavior: "smooth",
  });
}
const setGraphic = async function () {
  const chart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: jobsName,
      datasets: [
        {
          label: "# of votes",
          data: jobsData,
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
        },
      ],
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    },
  });
  window.scroll({
    top: 1500,
    behavior: "smooth",
  });
};


const getWorks = async function (param) {
  try {
    const response = await fetch(
      "https://remotive.io/api/remote-jobs?category=" + param
    );
    if (!response.ok) {
      throw new Error(
        `${response.status}...vaya, el servidor se ha quedado dormido. Inténtalo más tarde.`
      );
    }
    const data = await response.json();
    jobsData.push(data.jobs.length);
    jobsName.push(param);
  } catch (err) {
    console.log(`${err.message}`);
  }
};

window.addEventListener("load", getData);
botonEnviarTema.addEventListener("click", setTarjetas);
dibujarGrafica.addEventListener("click", setGraphic);
