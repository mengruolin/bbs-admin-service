// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportBbs from '../../../app/controller/bbs';
import ExportHome from '../../../app/controller/home';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    bbs: ExportBbs;
    home: ExportHome;
    user: ExportUser;
  }
}
