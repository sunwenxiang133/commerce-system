export interface ExampleStateInterface {
  prop: boolean;
  hahaha:string;
  hihihi:number;
}

function state(): ExampleStateInterface {
  return {
    prop: false,
    hahaha:'13',
    hihihi:54,
  }
}

export default state;
