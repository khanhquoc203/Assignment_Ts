import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IProduct } from '../../interfaces/product';
import { Space, Table, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useLocalStorage } from '../../hook';



interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
interface DataType {
    id: number;
    name: string;
    price: number;

}
const ProductManagementPage = (props: IProps) => {
    const [user, setUser] = useLocalStorage("user", null);
    const onHandleLogout = () => {
        setUser("");
    };
    // const [data, setData] = useState<DataType[]>([])
    // useEffect(() => {
    //     setData(props.products)
    // }, [props])
    const removeProduct = (id: number) => {
        props.onRemove(id)
    }
    const navigate = useNavigate();
    const updateProduct = (id: number) => {
        return navigate(`/admin/products/update/${id}`)
    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Product Image',
            dataIndex: 'image',
            key: 'image',
            render: (imgLink) => <img src={imgLink} alt="" width={500} />,
        },
        {
            title: 'Product Name',
            dataIndex: 'name',
            key: 'name',
        },

        {
            title: 'Product Price',
            key: 'price',
            dataIndex: 'price',

        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className='bg-green-500 px-2 py-1 text-white rounded-lg' onClick={() => updateProduct(record.id)}>Update</button>
                    <button className='bg-red-500 px-2 py-1 text-white rounded-lg' onClick={() => removeProduct(record.id)} >Delete</button>
                </Space>
            ),
        },
    ];
    const data: DataType[] = props.products.map((item: IProduct) => {
        return {
            key: item.id,
            ...item
        }
    })
    return (
        <div>
            <Button className='bg-green-500 text-white mb-4'><Link to={'/admin/products/add'}>Add New Product</Link></Button>

            <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
        </div>
    )
}

export default ProductManagementPage