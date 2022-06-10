import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';

const actions: ActionTree<StateInterface, ExampleStateInterface> = {
  someAction (/* context */) {
    // your code
  }
};

export default actions;
