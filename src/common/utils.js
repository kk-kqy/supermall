// 防抖函数
export function doubance(func,delay){
    let timer = null
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() =>{
        func.apply(this,args)
      },delay)
    }
}
