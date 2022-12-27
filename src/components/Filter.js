import React from 'react'
import '../style/filter.scss';
//import {useDispatch} from "react-redux"

const Filter = ({handler}) => {
  return (
    <div className='container'>
       <div className='sort'>
        <p>Sort By: </p>
       <button onClick={(()=>handler)}>Price: -- Low to High</button>
       <button>Price: -- High to Low</button>
        </div>

        <div className='category'>

            <button> Veg </button>
            <button> Non-Veg </button>
            <button> Chinese </button>
            <button> Dessert </button>

        </div>
       

    </div>
  )
}

export default Filter