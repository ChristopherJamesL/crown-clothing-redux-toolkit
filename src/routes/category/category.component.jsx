import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap } from '../../store/categories/category.selector';
import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? (
        <Spinner />
      ) : (
      <CategoryContainer>
        {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </CategoryContainer>
      )}
    </Fragment>
  );
};

export default Category;
