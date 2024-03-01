import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductById, getProducts } from '../../api/productApi.ts';
import type { ProductCard, ProductDetails } from '@/types/product.type.ts';

export const fetchProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async () => {
        const data = await getProducts();

        return data.map(
            (item: {
                id: number;
                product: { id: number; name: string; category: string };
                price: number;
                sale_price: number;
                main_image: string;
                item_slug: string;
            }) => ({
                id: item.id,
                product: {
                    id: item.product.id,
                    name: item.product.name,
                    category: item.product.category,
                },
                price: item.price,
                salePrice: item.sale_price,
                mainImage: item.main_image,
                itemSlug: item.item_slug,
            }),
        );
    },
);

export const fetchProduct = createAsyncThunk(
    'products/fetchProduct',
    async (id: number) => {
        const data = await getProductById(id);

        return {
            id: data.id,
            product: {
                id: data.product.id,
                category: data.product.category,
                reviews: data.product.reviews.map(
                    (item: {
                        id: number;
                        star: number;
                        text: string;
                        time_created: string;
                        title: string;
                        user: { first_name: string; last_name: string };
                    }) => ({
                        id: item.id,
                        star: item.star,
                        text: item.text,
                        timeCreated: item.time_created,
                        title: item.title,
                        user: {
                            firstName: item.user.first_name,
                            lastName: item.user.last_name,
                        },
                    }),
                ),
                name: data.product.name,
                description: data.product.description,
                productSlug: data.product.product_slug,
            },
            color: data.color,
            size: data.size,
            images: data.images,
            additionalProductItems: data.additional_product_items.map(
                (item: { id: number; main_image: string }) => ({
                    id: item.id,
                    mainImage: item.main_image,
                }),
            ),
            price: data.price,
            salePrice: data.sale_price,
            itemSlug: data.item_slug,
            mainImage: data.main_image,
        };
    },
);

interface ProductsState {
    products: ProductCard[];
    loading: boolean;
    product: ProductDetails;
}

const initialState: ProductsState = {
    products: [],
    loading: false,
    product: {
        id: 0,
        product: {
            id: 1,
            category: '',
            reviews: [],
            name: '',
            description: '',
            productSlug: '',
        },
        color: [],
        size: [],
        images: [],
        additionalProductItems: [],
        price: 180,
        salePrice: 190,
        itemSlug: '',
        mainImage: '',
    },
};

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchProducts.rejected, (state) => {
            state.loading = false;
        });
        builder.addCase(fetchProduct.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            state.product = action.payload;
            state.loading = false;
        });
        builder.addCase(fetchProduct.rejected, (state) => {
            state.loading = false;
        });
    },
});

export default productsSlice.reducer;
