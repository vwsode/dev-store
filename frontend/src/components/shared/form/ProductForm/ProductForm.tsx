import { FC } from 'react';
import { useFormik } from 'formik';
import { schema } from '@utils/validationSchemas/productSchema.ts';

import SizeSelect from '../../../product/SizeSelect/SizeSelect.tsx';
import Button from '../../ui/Button/Button.tsx';
import useProducts from '../../../../hooks/useProducts.ts';
import useCart from '../../../../hooks/useCart.ts';

import s from './ProductForm.module.scss';

interface Props {}

const ProductForm: FC<Props> = () => {
    const { product } = useProducts();
    const { isItemInCart, addItemToCart } = useCart();
    const formik = useFormik({
        initialValues: {
            size: '',
        },
        validationSchema: schema,
        onSubmit: () => {
            // console.log('add-to-cart');
            // console.log('remove-from-cart');

            addItemToCart(product.id, 1);
            // removeItemFormCart(Number(product.id));

            formik.resetForm();
        },
    });
    const { handleSubmit, values, errors, setFieldValue } = formik;

    const handleSizeChange = (size: string): void => {
        setFieldValue('size', size);
    };

    return (
        <form className={s['form']} onSubmit={handleSubmit}>
            <SizeSelect
                currentSize={values.size}
                onChange={handleSizeChange}
                sizes={product.size}
                name="size"
                isError={!!errors.size}
                hint={errors.size}
            />
            <div className={s['actions']}>
                <Button variant="dark">
                    {isItemInCart(product.id)
                        ? 'Remove from bag'
                        : 'Add to bag'}
                </Button>
                <Button variant="light">Favorite</Button>
            </div>
        </form>
    );
};

export default ProductForm;
