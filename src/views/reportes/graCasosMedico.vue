<template>
  <div class="container border mt-5 mb-5 p-3 shadow-lg rounded">
    <h1 class="text-center">Consultas atendidas</h1>
    <hr />
    <br /><br />

    <h4 class="text-center">Consultas atendidas por médicos</h4>
    <charts-css
      heading="Consultas atendidas por medicos"
      type="column"
      :labels="Labels"
      :datasets="Dataset1"
      id="my-chart"
      :data-spacing="10"
      show-legend
      show-labels
      show-tooltips
    />
    <br />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "graCasosMedico",
  data() {
    return {
      Labels: ["Consultas atendidas"],
      Dataset1: [
        {
          name: "Sistemas",
          values: [3],
        },
        {
          name: "Industrial",
          values: [9],
        },
        {
          name: "Ambiental",
          values: [5],
        },
      ],
      data: [],
    };
  },
  created() {
    this.getNotificaciones();
  },
  methods: {
    async getNotificaciones() {
      //
      try {
        const casos = await axios.get(
          "https://proyecto-tedw.herokuapp.com/consultas/reportes/total"
        );
        for (let a = 0; a < casos.data.length; a++) {
          this.data[a] = {
            name: casos.data[a].nombre,
            values: [parseInt(casos.data[a].consultas)],
          };
        }
        this.Dataset1 = this.data;
        console.log(this.data);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
#my-chart .charts-css.column {
  height: 300px;
  max-width: 500px;
  margin: 0px auto;
}
#my-chart caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 0rem;
}
.legend {
  margin-bottom: 50px;
}
#my-chart2 .charts-css.column {
  height: 300px;
  max-width: 500px;
  margin: 0px auto;
}
#my-chart2 caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 0rem;
}
</style>
