<template>
  <div>
    <line-chart :data="chartData"></line-chart>
  </div>
</template>

<script>
export default {
  name: "graCasosCarrera",
  data() {
    return {
      chartData: {
        Hola: 8,
        Hola2: 11,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
