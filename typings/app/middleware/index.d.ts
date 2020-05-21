// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportJwtRequire from '../../../app/middleware/jwt_require';

declare module 'egg' {
  interface IMiddleware {
    jwtRequire: typeof ExportJwtRequire;
  }
}
