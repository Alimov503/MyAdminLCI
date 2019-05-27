/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/attendance',
    view: 'Attendance'
  },
  
  

  {
    path: '/add-student',
    view: "AddStudent",

  },
  {
    path: '/students-list',
    view: "StudentList",
    
  },
  {
    path: '/student-profile',
    view: "studentProfile",
   
  },
  {
    path: '/edit-student-profile',
    name: 'editStudentProfile',
    view: 'editStudentProfile'
  },
  {
    path: '/edit-teacher-profile',
    name: 'editTeacherProfile',
    view: 'editTeacherProfile'
  },
  {
    path: '/add-teacher',
    view: "AddTeacher",
    
  },
  {
    path: '/teachers-list',
    view: "TeacherList",
    
  },
  {
    path: '/teacher-profile',
    view: "teacherProfile",
  
  },
  {
    path: '/add-group',
    view: "AddGroup",
   
  },
  {
    path: '/groups-list',
    view: "GroupList",
   
  },
  {
    path: '/add-subject',
    view: "AddSubject",
   
  },
  {
    path: '/subjects-list',
    view: "SubjectList",
  
  },
  {
    path: '/add-exam',
    view: "AddExam",
    
  },
  {
    path: '/exams-list',
    view: "ExamList",
   
  },
  {
    path: '/teachers-fee',
    view: "TeachersFee",
 
  },
  {
    path: '/incoming-by-subject',
    view: "incomingBySubjects",
  
  },
  {
    path: '/incoming-by-groups',
    view: "incomingByGroups",
  
  },
  {
    path: '/groups-incoming',
    view: "groupsIncoming",
  
  },
  {
    path: '/monthly-consumption',
    view: 'MonthlyConsumption',
    
  },
  {
    path:'/calculation' ,
    view: "Calculation",

  },
  {
    path:'/noticeboard',
    view: "NoticeBoard",
    
  },
  {
    path: '/calendar',
    view: "Calendar",
    
  },
  {
    path: '/settings',
    view: "Settings",
    
  },
  {
    path: '/about',
    view: "About",
    
  },
  {
    path:'/room-control' ,
    view: "RoomControl",
    
  },

]
