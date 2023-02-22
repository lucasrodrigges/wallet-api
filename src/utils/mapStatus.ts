import IStatus from '../interfaces/IStatus';

const status: IStatus = {
  OK: 200,
  CREATED: 201,
  NO_DATA: 204,
  REQUIRED_FIELD: 422,
  UNAUTHORIZED: 422,
  NOT_FOUND: 404,
  CONFLICT: 422,
  INVALID_VALUES: 422,
  DELETED: 204,
};

export default (type: string) => status[type] || 200;
