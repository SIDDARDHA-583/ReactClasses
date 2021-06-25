import React , {useEffect,useState} from 'react'

const UseEffectFetch = () => {
 
    const [data , setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(result => setData(result));
    })

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3>UseEffetctFetch</h3>
                </div>
                <div>
                    {
                        data.map((item ,index) => {
                            return(
                                <p key={item.id}>{item.title}</p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default UseEffectFetch;