import {request} from "./request";

export function getHomeMultidata(){
  return request({
    url: '/api/home/multiple'
  })
}

export function getHomeGoods(sort,page){
  return request({
    url: '/api/home/data',
    params:{
      sort,
      page
    }
  })
}
