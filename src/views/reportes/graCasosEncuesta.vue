<template>
  <div class="container border mt-5 mb-5 p-3 shadow-lg rounded">
    <h1 class="text-center">Encuestas aplicadas</h1>
    <hr />
    <br /><br />

    <h4 class="text-center">Encuestas aplicadas por carrera</h4>
    <charts-css
      heading="Encuestas realizadas por carrera"
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
    <h4 class="text-center">Encuestas aplicadas por departamento</h4>
    <charts-css
      heading="Encuestas realizadas por carrera"
      type="column"
      :labels="Labels"
      :datasets="Dataset2"
      id="my-chart2"
      :data-spacing="10"
      show-legend
      show-labels
      show-tooltips
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "graCasosEncuesta",
  data() {
    return {
      Labels: ["Encuestas realizadas"],
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
      Dataset2: [
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
      data2: [],
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
          "https://proyecto-tedw.herokuapp.com/encuestas/carrera/encuestas"
        );
        for (let a = 0; a < casos.data.length; a++) {
          this.data[a] = {
            name: casos.data[a].carrera,
            values: [parseInt(casos.data[a].encuestas)],
          };
        }
        this.Dataset1 = this.data;
        console.log(this.data);
        this.cargado = false;
      } catch (err) {
        console.log(err);
      }
      try {
        const casos = await axios.get(
          "https://proyecto-tedw.herokuapp.com/encuestas/dep/encuestas"
        );
        for (let a = 0; a < casos.data.length; a++) {
          this.data2[a] = {
            name: casos.data[a].departamento,
            values: [parseInt(casos.data[a].encuestas)],
          };
        }
        this.Dataset2 = this.data2;
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
