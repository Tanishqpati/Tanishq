import React,{useState,useEffect} from 'react'
import '../App'
// import { useState } from 'react'
import axios from 'axios'
// import { useAppContext } from './context/AppContext'

const BooksPage = () => {

    const [books,setBooks]=useState([])

    // const{favourites,addToFavourites,removeFromFavourites}= useAppContext();

    // console.log('favourites are',favourites)

    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/books?_limit=50').then(
            resp=>{
                console.log(resp.data)
                setBooks(resp.data)
            }).catch((err)=>console.log(err))
    },[])

  return (
    <div className='bookpage'>
    <div className="search">
    <input type="text" placeholder='search...'/>
    <button><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    <div className="booklist">
    {books.map((book)=>(
        <div key={book.id} className='card'>
            <div><h4>{book.title}</h4></div>
            <div><img src={book.image_url} alt="#" /></div>
            {/* <div><button onClick={()=>addToFavourites(book)}>Add Favourite</button></div> */}
            <div>Rating {book.rating}</div>
        </div>
    )

    )}

    </div>

    </div>
  )
}

export default BooksPage