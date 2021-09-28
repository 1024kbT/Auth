/*
 * @Description:
 * @Version: 2.0
 * @Autor: lwq
 * @Date: 2021-09-28 13:23:36
 * @LastEditors: Seven
 * @LastEditTime: 2021-09-28 20:30:47
 */
module.exports = [
  {
    id: 2,
    pid: 0,
    name: 'Courses',
    path: '/course',
    title: '磕碜管理',
  },

  {
    id: 3,
    pid: 2,
    path: 'operator',
    name: 'Coursesoperator',
    link: '/course/operator',
    title: '课程操作',
  },
  {
    id: 4,
    pid: 3,
    path: 'info-data',
    name: 'CoursesInfodata',
    link: '/course/operator/info_data',
    title: '课程数据',
  },
  {
    id: 5,
    pid: 2,
    path: 'add',
    name: 'CoursesAdd',
    link: '/course/add',
    title: '课程添加',
  },
  {
    id: 6,
    pid: 0,
    path: '/student',
    name: 'Student',
    title: '学生管理',
  },
  {
    id: 7,
    pid: 6,
    path: 'operator',
    name: 'Studentoperator',
    link: '/student/operator',
    title: '学生操作',
  },
  {
    id: 8,
    pid: 6,
    path: 'add',
    name: 'StduentAdd',
    link: '/student/add',
    title: '增加学生'
  },
];
