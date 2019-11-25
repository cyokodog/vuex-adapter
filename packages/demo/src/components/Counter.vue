<template>
  <div>
    <fieldset>
      <legend>Root State</legend>

      <button @click="rootCountDown">-</button>
      <strong>{{ rootCount }}</strong>
      <button @click="rootCountUp">+</button>

      <fieldset>
        <legend>Bar Module State</legend>
        <div>
          <button @click="passCountToRoot">↑</button>
        </div>

        <button @click="barCountDown">-</button>
        <strong>{{ barCount }}</strong>
        <button @click="barCountUp">+</button>

      </fieldset>
    </fieldset>
  </div>
</template>

<script lang="ts" src="./Counter.ts"></script>

<style lang="scss" scoped>
fieldset {
  margin: 40px 100px;
  padding: 40px;
  border: solid 1px #aaa;
}

legend {
  padding: 0 20px;
  font-size: 20px;
}

button {
  padding: 10px 50px;
  margin: 10px;
  font-size: 20px;
  border-radius: 4px;
  height: 50px;
  background-color: #ddd;
}

strong {
  font-size: 35px;
}
</style>
