export default function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()
    let day = date.getDate()
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let time = `${year}年${month + 1}月${day}日${hour}时${minute}分${second}秒`
    return time;
}