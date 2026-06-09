import { serverFetch } from '../core/server';

export const recruiterCompany = async recruiterId => {
  return serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
};
