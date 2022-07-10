export default function (){
   let newPersons = localStorage.getItem("persons");
   newPersons = JSON.parse(newPersons);
   return newPersons 
    }