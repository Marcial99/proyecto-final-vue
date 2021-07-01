<template>
  <div class="container">
    <h1 class="text-center">Conteo de casos activos</h1>
    <charts-css
      show-heading
      heading="Casos activos por carrera"
      type="column"
      :labels="coffeeLabels"
      :datasets="coffeeDatasets"
      id="my-chart"
      :data-spacing="10"
      show-legend
      show-labels
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "graCasosCarrera",
  data() {
    return {
      coffeeLabels: ["Casos activos"],
      coffeeDatasets: [
        {
          name: "Sistemas",
          values: [4],
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
      try {
        const casos = await axios.get(
          "https://proyecto-tedw.herokuapp.com/alumnos/total/contagios"
        );
        for (let a = 0; a < casos.data.length; a++) {
          this.data[a] = {
            name: casos.data[a].carrera,
            values: [parseInt(casos.data[a].contagios)],
          };
        }
        this.coffeeDatasets = this.data;
        console.log(this.data);
        console.log(this.coffeeDatasets);
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
  height: 400px;
  max-width: 500px;
  margin: 0 auto;
}
#my-chart {
  height: 200px;
  --heading-size: 5rem;
}
#my-chart caption {
  font-size: 1rem;
  font-weight: bold;
  line-height: 0rem;
}
</style>
