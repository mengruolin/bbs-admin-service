// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdminUser from '../../../app/model/adminUser';
import ExportBbsReply from '../../../app/model/bbs_reply';
import ExportBbsTopic from '../../../app/model/bbs_topic';
import ExportBlogReply from '../../../app/model/blog_reply';
import ExportBlogTopic from '../../../app/model/blog_topic';
import ExportFeedback from '../../../app/model/feedback';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    AdminUser: ReturnType<typeof ExportAdminUser>;
    BbsReply: ReturnType<typeof ExportBbsReply>;
    BbsTopic: ReturnType<typeof ExportBbsTopic>;
    BlogReply: ReturnType<typeof ExportBlogReply>;
    BlogTopic: ReturnType<typeof ExportBlogTopic>;
    Feedback: ReturnType<typeof ExportFeedback>;
    User: ReturnType<typeof ExportUser>;
  }
}
