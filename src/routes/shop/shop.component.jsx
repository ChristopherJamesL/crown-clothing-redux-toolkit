import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories, setIsLoading } from '../../store/categories/category.reducer';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCategoriesMap = async () => {
      dispatch(setIsLoading(true));
      try {
        const categoriesArray = await getCategoriesAndDocuments('categories');
        dispatch(setCategories(categoriesArray));
      } catch (error) {
        console.log('Error fetching categories', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    }
    fetchCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
