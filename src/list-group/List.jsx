import React from 'react'

const List = (props) => {


  return (
<>
    {props.items.length==0?<h2>No list found</h2>:<h2>List</h2>}

<ul className="list-group">
  {props.items.map((item)=>(
    //ternary*
  //  item=='jordan'?
     //<li key={item} className="list-group-item bg-warning">{item}</li>:<li key={item} className="list-group-item ">{item}</li>
     //bootstrap*
//<li key={item} className={`list-group-item ${item =="jordan" && 'bg-warning'}`}> {item}</li>
//css*
<li key={item} style={{"backgroundColor":item=='jordan' && "yellow"}} className="list-group-item" > {item}</li>



))}
</ul>





</>
  )
}

export default List