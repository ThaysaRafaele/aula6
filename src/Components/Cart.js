import {useState, useEffect} from 'react'

export default function Cart()
{
    const [items, setItems] = useState([]);


    useEffect(() => {
      const getItems = async () => {
        const response = await fetch('https://fakestoreapi.com/carts?userId=1');
        const data = await response.json();

        console.log(data)

      };

    //   const getProdutos = async () => {
    //     const response = await fetch('https://fakestoreapi.com/carts?userId=1');
    //     const data = await response.json();

    //     console.log(data)

    //   };
    
      getItems();
    }, [])
    

    return (

        <div>

        </div>
    );
}