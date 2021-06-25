import React, { useState } from 'react'
import data from './City.json';

const FilterMethod = () => {
    const [search , setSearch] = useState('');
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-primary font-weight-bold text-center mt-4">Filter Method</h3>
                </div>
                <div className="col-lg-12 mt-3">
                    <h4 className="text-center">Enter City</h4>
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <input type="text" className="form-control mt-3" placeholder="Search City" value={search} onChange={e => setSearch(e.target.value)} />
                </div>
                <div className="col-lg-4"></div>
                <div className="col-lg-12">
                    {
                        data.filter(city => city.name.toLowerCase().includes(search.toLowerCase())).map(city => {
                            return(
                                <div className="text-center col-lg-12 mt-3 p-2" style={{"border" : "1px solid black"}} key={city.id}>
                                    <p className="text-center">{city.name}</p>
                                    <p className="text-center">{city.state}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default FilterMethod;