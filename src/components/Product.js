import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import { useDispatch } from 'react-redux';
import {useDispatch} from 'react-redux'
import { add } from '../store/cartSlice';
export default function Product() {
    const dispatch= useDispatch()
    const [products,getproducts]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res)=> res.json())
        .then((data)=>getproducts(data))

    },[])
    const addtoCart=(product)=>{
        dispatch(add(product))

    }
    const cards = products.map((product)=>{
        return <div className='col-md-3' style={{marginBottom: '15px'}}>
                  <Card  key={product.id} className='h-100 w-80'>
                     <div className='text-center'>
                        <Card.Img variant="top" src={product.image} />
                     </div>
                     <Card.Body className='text-center'>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                         INR. {product.price}
                       </Card.Text>
                     
                       </Card.Body>
                       <Card.Footer style={{backgroundColor: "white"}} className='text-center'>
                          <Button variant="primary" onClick={()=>addtoCart(product)}>Add To Cart</Button>
                       </Card.Footer>
                         </Card>

        </div>
    })
  return (
    <div>
        <div className='row'>
           {cards}

        </div>
    </div>
  )
}
