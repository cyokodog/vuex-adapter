import { Component, Vue } from 'vue-property-decorator';

import Counter from './components/Counter.vue';

@Component({
  components: {
    Counter,
  },
})
export default class App extends Vue {}
