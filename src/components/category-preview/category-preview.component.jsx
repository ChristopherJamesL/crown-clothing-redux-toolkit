import { useSelector } from 'react-redux';

import { selectCategoriesIsLoading } from '../../store/categories/category.selector';

import ProductCard from '../product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(selectCategoriesIsLoading);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
      )}
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
