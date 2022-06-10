import { MutationTree } from 'vuex';
import { ExampleStateInterface } from './state';
// import state from './state'

const mutation: MutationTree<ExampleStateInterface> = {
  TEST(state:ExampleStateInterface,prop:boolean){
    state.prop=prop;
  }
};

export default mutation;
