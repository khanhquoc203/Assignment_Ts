import { useEffect, useState } from 'react'
import { addProduct, getAllProduct, removeProduct, updateProduct } from './api/products';
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import AddProductPage from './pages/admin/AddProduct';
import { IProduct } from './interfaces/product';
import ProductDetailPage from './pages/ProductDetailPage';
import UpdateProductPage from './pages/admin/UpdateProduct';
import Signin from './pages/signin';
import Signup from './pages/signup';
import ProductManagement from './pages/admin/ProductManagement';
import AdminLayout from './components/adminLayout';
import RootLayout from './components/rootLayout';
import ListUsers from './pages/admin/listUser';


function App() {

  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    getAllProduct().then(({ data }) => setProducts(data));
  }, [])

  const onHandleRemove = (id: number) => {
    const confirm = window.confirm('Are you sure you want to remove')
    if (confirm) {
      removeProduct(id)
        .then(() => setProducts(products.filter(product => product.id !== id)))
    }
  }

  const onHandleAdd = (product: IProduct) => {
    addProduct(product)
      .then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product)
      .then(() => getAllProduct().then(({ data }) => setProducts(data)))
  }

  return (
    <div className="App">
      <Routes>
        <Route path='signin' element={<Signin />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/' element={<RootLayout />}>
          {/* <Route index element={<HomePage />} /> */}
          <Route index element={<ProductsPage products={products} onRemove={onHandleRemove} />} />
          <Route path=':id' element={<ProductDetailPage products={products} />} />

        </Route>
        <Route path='/admin' element={<AdminLayout />}>
          <Route path='products'>
            <Route index element={<ProductManagement products={products} onRemove={onHandleRemove} />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
            <Route path='update/:id' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
          </Route>
          <Route path="user" element={<ListUsers />} >

          </Route>
        </Route>
      </Routes>
    </div >
  )
}

export default App
