import React , {useState , useEffect} from 'react'

const UseEffect = () => {

    const [itemlist , processItem] = useState([]);
    const [booklist , updateBooks] = useState([]);

    const getItem = () => {
        fetch("item.json")
        .then(response => response.json())
        .then(allItem => processItem(allItem))
    }

    const getBook = () => {
        fetch("book.json")
        .then(response => response.json())
        .then(allBooks => updateBooks(allBooks))
    }

    useEffect(() => {
        getItem() // to get call along with the useEffect()
        getBook();
    },[true])
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-lg-12 text-center">
                     <h2 className="text-primary">useEffect() Example to call a function on load</h2>
                     <h1>Available Items : {itemlist.length}</h1>
                     
                </div>
                <div className="col-lg-6">
                    <table className="table">
                       <thead className="bg-warning table-bordered">
                           <tr>
                               <th>Item No</th>
                               <th>Item Name</th>
                               <th>Item Price</th>
                               <th>Item Quantity</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               itemlist.map((item ,index) => {
                                   return(
                                       <tr key={index}>
                                           <td>{index + 1}</td>
                                           <td>{item.name}</td>
                                           <td>{item.price}</td>
                                           <td>{item.qty}</td>
                                       </tr>
                                   )
                               })
                           }
                       </tbody>
                    </table>
                </div>
                <div className="col-lg-6">
                   <h5>Available Books : {booklist.length}</h5>
                   {
                       booklist.map((book,index) => {
                           return(
                               <p key={index}>
                                   {book}
                               </p>
                           )
                       })
                   }
                </div>
            </div>
        </div>
    )
}
export default UseEffect;