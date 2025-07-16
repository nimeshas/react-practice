//rendering list
function List(){
    const fruits = [
  { id:1, name: 'apple', cal: 95 },
  { id:2, name: 'orange', cal: 62 },
  { id:3, name: 'coconut', cal: 283 },
  { id:4, name: 'banana', cal: 105 },
  { id:5, name: 'mango', cal: 201 }
];
fruits.sort((a,b)=>a.name.localeCompare(b.name)); //alphabetical, for reverse alphabet: swap a and b
// enclose all elements in curly braces to make them objects
    const listItems=fruits.map(fruit=> <li key={fruit.id}>one {fruit.name} has {fruit.cal} calories.</li>);
//const lowCal=fruits.filter(fruit=>fruit.cal<100);---- replace fruit with lowCal to filter out low cal fruits only in the above return statement
//return(fruits); //returns one large string
    return(<ol>{listItems}</ol>);
}
export default List
