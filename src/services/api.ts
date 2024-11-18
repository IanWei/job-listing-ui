import axios from 'axios';
import { Job } from '../types/job';

const API_BASE_URL = 'http://localhost:5015/api';

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axios.get(`${API_BASE_URL}/Jobs`);
  return response.data;
};
