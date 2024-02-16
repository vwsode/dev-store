import { useEffect } from "react";

import Container from "../../components/shared/ui/Container/Container.tsx";
import { Grid } from "../../components/product/index.ts";

import useProducts from "../../hooks/useProducts.ts";

const Catalog = () => {
  const { products, setProducts } = useProducts();

  useEffect(() => {
    setProducts();
  }, []);

  return (
    <div>
      <Container>
        <Grid products={products} />
      </Container>
    </div>
  );
};

export default Catalog;
