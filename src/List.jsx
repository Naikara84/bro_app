 
 function List(props){
    const itemList = props.items
   
    const listitems = itemList.map(item => <li key={item.id}>
                                      {item.name}: &nbsp; 
                                 <b>{item.calories}</b></li>
        )

    return (<ul>{listitems}</ul>)

 }
 export default List