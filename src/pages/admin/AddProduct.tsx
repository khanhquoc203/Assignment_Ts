import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { IProduct } from '../../interfaces/product';
import { Button, Checkbox, Form, Input, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';


interface IProps {
    onAdd: (product: IProduct) => void;
}

const AddProductPage = (props: IProps) => {

    const navigate = useNavigate();
    // const { register, handleSubmit } = useForm<IFormInput>();

    // const onHandleSubmit: SubmitHandler<IFormInput> = (data: IProduct) => {
    //     props.onAdd(data);
    // }
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            {/* <form onSubmit={handleSubmit(onHandleSubmit)}>
                <input type="text" {...register('name')} />
                <input type="number" {...register('price')} />
                <button type='submit'>Add New Product</button>
            </form> */}
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your product name!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Image"
                    name="image"
                    rules={[{ required: true, message: '!' }]}
                >
                    {/* <Upload
                    // action="http://localhost:3000/products"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                        {fileList.length >= 8 ? null : uploadButton}
                    </Upload> */}
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Add New Product
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage