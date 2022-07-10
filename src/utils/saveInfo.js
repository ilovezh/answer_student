export default function (object){
    let jsonStr = JSON.stringify(object);
    localStorage.setItem("persons",jsonStr)
    }