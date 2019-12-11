import { Component, Vue } from 'vue-property-decorator';

import { getRootAdapter } from '../store/root/adapter';
import { getBarAdapter } from '../store/root/modules/bar/adapter';

const rootStore = getRootAdapter();
const barStore = getBarAdapter();

@Component
export default class Counter extends Vue {
  get rootCount(): number {
    // return this.$store.state.count;
    return rootStore.state.count;
  }

  get rootCountJP(): string {
    // return this.$store.getters.countJP;
    return rootStore.getters.countJP;
  }

  get barCount(): number {
    // return this.$store.state.bar.count;
    return barStore.state.count;
  }

  get barCountJP(): string {
    // return this.$store.getters['bar/countJP'];
    return barStore.getters.countJP;
  }

  rootCountUp() {
    // this.$store.commit('addCount', { qty: 1 });
    rootStore.committers.addCount({ qty: 1 });
  }

  rootCountDown() {
    // this.$store.commit('addCount', { qty: -1 });
    rootStore.committers.addCount({ qty: -1 });
  }

  barCountUp() {
    // this.$store.commit('bar/addCount', { qty: 10 });
    barStore.committers.addCount({ qty: 10 });
  }

  barCountDown() {
    // this.$store.commit('bar/addCount', { qty: -10 });
    barStore.committers.addCount({ qty: -10 });
  }

  passCountToRoot() {
    // this.$store.dispatch('bar/passCountToRoot');
    barStore.dispatchers.passCountToRoot();
  }
}
