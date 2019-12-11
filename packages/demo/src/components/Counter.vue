<template>
  <div>
    <fieldset>
      <legend>Root State</legend>

      <div class="number-display">
        <button @click="rootCountDown">-</button>
        <strong>{{ rootCountJP }}<br/>{{ rootCount }}</strong>
        <button @click="rootCountUp">+</button>
      </div>

      <fieldset>
        <legend>Bar Module State</legend>
        <div>
          <button @click="passCountToRoot">↑</button>
        </div>

      <div class="number-display">
        <button @click="barCountDown">-</button>
        <strong>{{ barCountJP }}<br/>{{ barCount }}</strong>
        <button @click="barCountUp">+</button>
      </div>

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
  vertical-align: text-bottom;
  font-size: 20px;
  border-radius: 4px;
  height: 50px;
  background-color: #ddd;
}

strong {
  font-size: 35px;
  text-align: center
}

.number-display > * {
  display: inline-block
}
</style>
