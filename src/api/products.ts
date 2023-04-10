import { AxiosResponse } from "axios";
import instance from "./instance"

interface IProduct {
    id: number,
    name: string,
    price: number,
}

const getAllProduct = () => {
    return instance.get('/products');
}
const getOneProduct = (id: number) => {
    return instance.get('/products/' + id);
}
const addProduct = (product: IProduct) => {
    return instance.post('/products', product);
}
const updateProduct = (product: IProduct) => {
    return instance.patch('/products/' + product.id, product);
}
const removeProduct = (id: number) => {
    return instance.delete('/products/' + id);
}
export { getAllProduct, getOneProduct, addProduct, updateProduct, removeProduct }
