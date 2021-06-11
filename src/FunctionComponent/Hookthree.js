import React , {useState} from 'react'

const HookThree = () => {
    const[books , updatedbooks] = useState(["java" , "PHP"])
    const[newbook , processBook] = useState("");
    const[msg, processMsg] = useState("")


   const Save = () => {
      if(bookid === -1){
           //let newbook = prompt("Enter Book Name")
       updatedbooks(books => [...books,newbook])
       //a = a + b
       processMsg("Item Added Successfully " + newbook)
      }else{
          books[bookid] = newbook;
          updatedbooks(books => [...books]);
          proceessid(-1)
          processMsg("Update book Successfully")
      }

       processBook("")// clear the input box
   }

   const [bookid , proceessid] = useState(-1);

   const Edit = (index) => {
       processBook(books[index]);
       proceessid(index)
   }

   const DeleteBook = (index) => {
       books.splice(index , 1)
       updatedbooks(books => [...books])
       //            books = remainingbooks
       processMsg("deleted book successfully" )
   }

    return(
         <div className="container mt-4">
             <div className="row">
                 <div className="col-lg-12 text-center mb-3">
                    <h3>UseState () add , delete , list in array Example</h3>
                    <p className="text-danger">{msg}</p>
                 </div>
                 <div className="col-lg-4 mb-3">
                     <label>Enter Item Name</label>
                     <input type="text"
                      className="form-control"
                      value={newbook}
                       onChange = {obj => processBook(obj.target.value)}></input>
                 </div>
                 <div className="col-lg-4 mb-3">
                     <button className="btn btn-success btn-sm rounded-pill mt-4" onClick={Save}>Save Book</button>
                 </div>
                 <div className="col-lg-4 mb-3">{newbook}</div>
                 {
                     books.map((book,index) => {
                         return(
                             <div className="col-lg-4 text-center" key={index}>
                                 <div className="border p-2">
                                     <p >{book}</p>
                                     <button className="btn btn-sm rounded-pill btn-success" onClick={Edit.bind(this , index)}>Edit</button>
                                     <button className="btn btn-sm rounded-pill btn-danger" onClick={DeleteBook.bind(this , index)}>Delete</button>
                                 </div>
                             </div>
                         )
                     })
                 }
             </div>
         </div>
    )
}
export default HookThree;