/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
               // APP 
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'app/Dashboard',
    meta: {layout: 'main'}
  },
  {
    path: '/login',
    view: 'app/login',
    meta: {layout: 'empty'}
  },
  {
    path: '/logini',
    view: 'app/Logini',
    meta: {layout: 'empty'}
  },
  {
    path: '/register',
    view: 'app/register',
    meta: {layout: 'empty'}
  },
  {
    path: '/attendance',
    view: 'app/Attendance',
    meta: {layout: 'main'}
  },
  {
    path: '/noticeboard',
    view: 'app/NoticeBoard',
    meta: {layout: 'main'}

  },
  {
    path: '/settings',
    view: 'app/Settings',
    meta: {layout: 'main'}

  },
  {
    path: '/about',
    view: 'app/About',
    meta: {layout: 'main'}

  },
            // STUDENTS
  {
    path: '/add-student',
    view: 'students/AddStudent',
    meta: {layout: 'main'}

  },
  {
    path: '/students-list',
    view: 'students/StudentList',
    meta: {layout: 'main'}

  },
  {
    path: '/student-profile',
    view: 'students/studentProfile',
    meta: {layout: 'main'}

  },
  {
    path: '/edit-student-profile',
    name: 'editStudentProfile',
    view: 'students/editStudentProfile',
    meta: {layout: 'main'}
  },

              // TEACHERS
  {
    path: '/edit-teacher-profile',
    name: 'editTeacherProfile',
    view: 'teachers/editTeacherProfile',
    meta: {layout: 'main'}
  },
  {
    path: '/add-teacher',
    view: 'teachers/AddTeacher',
    meta: {layout: 'main'}

  },
  {
    path: '/teachers-list',
    view: 'teachers/TeacherList',
    meta: {layout: 'main'}

  },
  {
    path: '/teacher-profile',
    view: 'teachers/teacherProfile',
    meta: {layout: 'main'}

  },
          // GROUPS
  {
    path: '/add-group',
    view: 'groups/AddGroup',
    meta: {layout: 'main'}

  },
  {
    path: '/groups-list',
    view: 'groups/GroupList',
    meta: {layout: 'main'}

  }, 
          // Btanch
  {
    path: '/subjects-list',
    view: 'branch/SubjectList',
    meta: {layout: 'main'}

  },
  {
    path: '/exams-list',
    view: 'branch/ExamList',
    meta: {layout: 'main'}

  },   
  {
    path: '/room-control',
    view: 'branch/RoomControl',
    meta: {layout: 'main'}

  },
            // Calculation
  {
    path: '/teachers-fee',
    view: 'calculation/TeachersFee',
    meta: {layout: 'main'}

  },
  {
    path: '/incoming-by-subject',
    view: 'calculation/incomingBySubjects',
    meta: {layout: 'main'}

  },
  {
    path: '/incoming-by-groups',
    view: 'calculation/incomingByGroups',
    meta: {layout: 'main'}

  },
  {
    path: '/groups-incoming',
    view: 'calculation/groupsIncoming',
    meta: {layout: 'main'}

  },
  {
    path: '/monthly-consumption',
    view: 'calculation/MonthlyConsumption',
    meta: {layout: 'main'}

  },
  {
    path: '/calculation',
    view: 'calculation/Calculation',
    meta: {layout: 'main'}

  },

]
