import * as Yup from "yup";
export interface IProduct {
    id: number;
    name: string;
    price: number;
    original_price: number;
    description: string;
    image: string;
    brand: string;
}
export const productSchema = Yup.object().shape({
    name: Yup.string().required("Không được để trống!"),
    image: Yup.mixed().required("Không được để trống!"),
    price: Yup.string().required("Không được để trống!"),
    original_price: Yup.string().required("Không được để trống!"),
    brand: Yup.string().oneOf(["Samsung", "Apple"], "Hãy chọn 1 trường!"),
    description: Yup.string()
        .min(20, "Phải nhiều hơn 20 ký tự")
        .required("Không được để trống!"),
});

export type ProductForm = Yup.InferType<typeof productSchema>;


