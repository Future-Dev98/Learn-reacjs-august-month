import React, {useEffect} from 'react';
import productApi from '../../api/productApi';

function CallApi(props) {
    useEffect(() => {
        const fetchProducts = async () => {
            const productList = await productApi.getAll();
            console.log(productList);
        }
        fetchProducts();
    }, [])
    return (<div></div>);
}

export default CallApi;