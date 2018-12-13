//格式化时间
export function  formaTime(time){
let min = parseInt(time%3600/60)+'';
let sec = parseInt(time%60)+''
    return min.padStart(2,'0')+':'+sec.padStart(2,'0')
}
export function toSec(time){
    let arr = time.split(':');
    return (arr[0]*60+arr[1]*1).toFixed(2);
  }