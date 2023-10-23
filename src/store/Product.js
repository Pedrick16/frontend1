import { create } from 'zustand';
import axios from 'axios';

export const useProductStore = create((set, get) => ({
  // state
  activeProduct: [],
  allProduct:[],
  getEditProduct:[],

  // function
  fetchActiveProduct: async () => {
    try {
      const response = await axios.get('/get-active-products');// Replace with your API endpoint
      set({  activeProduct: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  fetchAllProduct: async () => {
    try {
        const response = await axios.get('/all-products');
        set({  allProduct: response.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },

  editProduct: async (id) => {
    try {
      
      const response = await axios.get(`/edit-product/${id}`)
      set({ getEditProduct: response.data });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  },


  updateProduct: async (productId, updatedProductData) => {
    try {
      // Send a PUT request to update the product
      await axios.put(`/update-product/${productId}`, updatedProductData); // Replace with your API endpoint
      // Optionally, you can update the local state if needed
      const { allProduct } = get();
     
      const updatedProducts = allProduct.map((product) =>
        product.id === productId ? { ...product, updatedProductData } : product
      );
     
      set({ allProduct: updatedProducts });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  },


  addProduct: async (newProduct) => {
    try {

      const response = await axios.post('/add-product', newProduct);
      const currentAllProduct = get().allProduct;
      const updatedAllProduct = [...currentAllProduct, response.data];
      set({ allProduct: updatedAllProduct });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  },

  deleteProduct: async (id) => {
    try {
      await axios.delete(`/delete-product/${id}`); // Correct the URL by adding a slash before the ID.
      
      // Remove the deleted product from the state.
      const currentAllProduct = get().allProduct;
      const updatedAllProduct = currentAllProduct.filter(product => product.id !== id);
      set({ allProduct: updatedAllProduct });
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  }


}));


