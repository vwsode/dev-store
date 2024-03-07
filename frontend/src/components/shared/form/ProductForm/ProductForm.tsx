import { FC } from 'react';
import { useFormik } from 'formik';

import SizeSelect from '@/components/SizeSelect/SizeSelect.tsx';
import { Button } from '@/components/shared/ui/index.ts';

import useProducts from '@/hooks/useProducts.ts';
import useCart from '@/hooks/useCart.ts';
import { schema } from '@utils/validationSchemas/productSchema.ts';

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
        onSubmit: (values) => {
            addItemToCart(product.id, 1, Number(values.size));

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
