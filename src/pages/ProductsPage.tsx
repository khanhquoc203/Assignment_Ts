import { useEffect, useState } from "react"
import { IProduct } from "../interfaces/product"
import { Card, Col, Row, Image } from 'antd';
interface IProps {
    products: IProduct[],
    onRemove: (id: number) => void
}
const ProductPage = (props: IProps) => {
    /*
        {
            products: [
                {},{}
            ]
            onRemove: (id) => void
        }
    */
    const [data, setData] = useState<IProduct[]>([])
    useEffect(() => {
        setData(props.products)
    }, [props])

    const { Meta } = Card;
    return (
        <div className="w-full grid grid-cols-3 space-x-5">

            {
                data.map(product => {
                    return (
                        <div >

                            <Card hoverable>
                                <Image
                                    src={product.image}
                                />
                                <Meta title={product.name} description={product.price} />
                            </Card>




                        </div>
                        // <article className="container max-w-7xl mx-auto">
                        //     <div className="flex justify-between">
                        //         {data.map(product =>
                        //             <a href="#" className="relative block group">
                        //                 <img
                        //                     src={product.image}
                        //                     alt=""
                        //                     className=" object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
                        //                 />

                        //                 <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                        //                     <h3 className="text-xl font-medium text-white">{product.name}</h3>

                        //                     <p className="mt-1.5 max-w-[40ch] text-xs text-white">
                        //                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi
                        //                         dicta impedit aperiam ipsum!
                        //                     </p>

                        //                     <span
                        //                         className="inline-block px-5 py-3 mt-3 text-xs font-medium tracking-wide text-white uppercase bg-black"
                        //                     >
                        //                         Shop Now
                        //                     </span>
                        //                 </div>
                        //             </a>
                        //         )
                        //         }
                        //     </div>
                        // </article>
                    )
                })
            }
        </div >
    )
}

export default ProductPage