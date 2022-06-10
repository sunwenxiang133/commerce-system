import request from 'src/request/request';

export const ShoppingItems=(data:any)=>request.get('/goods/list');
