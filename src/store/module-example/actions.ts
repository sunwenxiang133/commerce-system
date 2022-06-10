import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { ExampleStateInterface } from './state';
import mutations from 'src/store/module-example/mutations';

const actions: ActionTree<ExampleStateInterface, StateInterface> = {
  someAction (context:ExampleStateInterface,prop:StateInterface) {
    mutations.someMutation(context,prop);
  }
};

export default actions;
