import React from 'react'
import { Card, Image } from 'antd';
import { useParams } from 'react-router-dom';
// import Header from '../components/header';

const { Meta } = Card;

const HomePage = () => {

    return (

        <div>
            <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
        </div>

    )
}

export default HomePage