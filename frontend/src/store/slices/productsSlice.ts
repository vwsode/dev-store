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
                new_price: number;
                is_sale: boolean;
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
                newPrice: item.new_price,
                isSale: item.is_sale,
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
                style: data.product.styles,
                avgRating: data.product.avg_rating,
                category: data.product.category,
                reviews: data.product.reviews.map(
                    (item: {
                        star: number;
                        text: string;
                        time_created: string;
                        title: string;
                        user: { first_name: string; last_name: string };
                    }) => ({
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
            images: data.images[0],
            additionalProductItems: data.additional_product_items.map(
                (item: { id: number; main_image: string }) => ({
                    id: item.id,
                    mainImage: item.main_image,
                }),
            ),
            newPrice: data.new_price,
            price: data.price,
            isSale: data.is_sale,
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
            category: '',
            reviews: [],
            name: '',
            description: '',
            productSlug: '',
            style: '',
            avgRating: 0,
        },
        color: [],
        size: [],
        images: [],
        additionalProductItems: [],
        price: 180,
        isSale: false,
        newPrice: 190,
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
