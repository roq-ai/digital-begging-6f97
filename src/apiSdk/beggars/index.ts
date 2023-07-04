import axios from 'axios';
import queryString from 'query-string';
import { BeggarInterface, BeggarGetQueryInterface } from 'interfaces/beggar';
import { GetQueryInterface } from '../../interfaces';

export const getBeggars = async (query?: BeggarGetQueryInterface) => {
  const response = await axios.get(`/api/beggars${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createBeggar = async (beggar: BeggarInterface) => {
  const response = await axios.post('/api/beggars', beggar);
  return response.data;
};

export const updateBeggarById = async (id: string, beggar: BeggarInterface) => {
  const response = await axios.put(`/api/beggars/${id}`, beggar);
  return response.data;
};

export const getBeggarById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/beggars/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteBeggarById = async (id: string) => {
  const response = await axios.delete(`/api/beggars/${id}`);
  return response.data;
};
