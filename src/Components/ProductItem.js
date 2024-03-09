import {useState, useEffect, useContext} from 'react'
import { CartContext } from '../Context/CartContext';


export default function ProductItem()
{
    const [products, setProducts] = useState([]);
    const [loading, setLoading ] = useState(true);
    const {data, AddItem} = useContext(CartContext);

    console.log(data);

    const getProducts = async () => {

        try
        {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            setProducts(data)
        }
        catch(error){
            console.error('error: ', error);
        }
        finally{
            setLoading(false);
        }

        // console.log(data)

        //separar productitem e productList
    };

    useEffect(() => {
        getProducts();
    }, [])
    

    return (
        <div>
            {loading ? (
                <span>Carregando...</span>
                ) : (
                <ul>
                    {products?.map((product, key) => (
                    <li onClick={() => AddItem(product)} key={key}>{product.title}</li>
                    ))}
                </ul>
            )}   
        </div>
    );
}