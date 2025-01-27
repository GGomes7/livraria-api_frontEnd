import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vast-flannel-nightgown-fish.cyclic.cloud', 
});


export const getLivros = () => {
  return api.get('/livros');
};

export const getCategorias = () => {
  return api.get('/categorias');
}
export default api;
