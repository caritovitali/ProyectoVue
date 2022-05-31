
import axios from 'axios';

const apiUrl="https://629571d563b5d108c19e1e1c.mockapi.io"
const apiServices = {

  getProductos: async () => {
    try {
      const res = await axios.get(apiUrl + '/productos');
      return res.data;
    
    } catch (err) { console.log (err) }
  },

  saveProducto: async (product) => {
    try {
      const res = await axios.post(apiUrl + '/productos', product);
      return res.data;

    } catch (err) { console.log (err) }
  },

  // etc...
}

export default apiServices