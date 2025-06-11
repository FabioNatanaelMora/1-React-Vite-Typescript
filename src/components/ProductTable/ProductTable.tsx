import { useEffect, useState } from "react";
import type { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import Loader from "../Loader/Loader";
import { Table } from "react-bootstrap";

const ProductTable = () => {
     //Variable que va a contener los datos recibidos por la API
     const [products, setProducts] = useState<Product[]>([]);

     //Variable que muestra el componente Loader hasta que se reciba los datos de la API
     const [isLoading, setIsLoading]= useState(true);

     //Este hook se va a ejecutar cada vez que se renderice el componente
     useEffect(() =>{
        //Llamamos a la funcion para obtener todos los productos declarados en el ProductService
        const fetchProducts= async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };
        fetchProducts();
     },[]);

     //Test, este log está modificado para que muestre los datos de una manera más legible.
     console.log(JSON.stringify(products, null, 2));
     //stringify es convertir un objeto JavaScript en una cadena JSON
    return(
        <>
           {isLoading ? <Loader/> : (
             <Table hover>
                <thead>
                    <tr>
                        <th> Titulo </th>
                        <th> Precio </th>
                        <th> Descripcion </th>
                        <th> Categoria </th>
                        <th> Imagen </th>
                    </tr>
                </thead>
                <tbody>
                   {products.map( product => (
                       <tr key={product.id}>
                           <td>{product.title}</td>
                           <td>{product.price}</td>
                           <td>{product.description}</td>
                           <td>{product.category}</td>
                           <td><img src={product.image} alt={product.title}
                           style={{width:'50px'}}/></td>
                       </tr>
                   ))}
                </tbody>
             </Table>
           )}
        
        </>

    )
}
export default ProductTable;