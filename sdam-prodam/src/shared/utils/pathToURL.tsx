import { AnyObject } from '../types';

export const pathToURL = (path: string, data: AnyObject) =>
  path.replace(/:(\w+)/g, (_, key) => data[key]);
