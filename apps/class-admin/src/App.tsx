import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { SubmissionsList } from "./submissions/SubmissionsList";
import { SubmissionsCreate } from "./submissions/SubmissionsCreate";
import { SubmissionsEdit } from "./submissions/SubmissionsEdit";
import { SubmissionsShow } from "./submissions/SubmissionsShow";
import { ClassModelList } from "./classModel/ClassModelList";
import { ClassModelCreate } from "./classModel/ClassModelCreate";
import { ClassModelEdit } from "./classModel/ClassModelEdit";
import { ClassModelShow } from "./classModel/ClassModelShow";
import { ClassStudentsList } from "./classStudents/ClassStudentsList";
import { ClassStudentsCreate } from "./classStudents/ClassStudentsCreate";
import { ClassStudentsEdit } from "./classStudents/ClassStudentsEdit";
import { ClassStudentsShow } from "./classStudents/ClassStudentsShow";
import { LessonList } from "./lesson/LessonList";
import { LessonCreate } from "./lesson/LessonCreate";
import { LessonEdit } from "./lesson/LessonEdit";
import { LessonShow } from "./lesson/LessonShow";
import { AssignmentsList } from "./assignments/AssignmentsList";
import { AssignmentsCreate } from "./assignments/AssignmentsCreate";
import { AssignmentsEdit } from "./assignments/AssignmentsEdit";
import { AssignmentsShow } from "./assignments/AssignmentsShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ClassStudentList } from "./classStudent/ClassStudentList";
import { ClassStudentCreate } from "./classStudent/ClassStudentCreate";
import { ClassStudentEdit } from "./classStudent/ClassStudentEdit";
import { ClassStudentShow } from "./classStudent/ClassStudentShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Class"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Submissions"
          list={SubmissionsList}
          edit={SubmissionsEdit}
          create={SubmissionsCreate}
          show={SubmissionsShow}
        />
        <Resource
          name="ClassModel"
          list={ClassModelList}
          edit={ClassModelEdit}
          create={ClassModelCreate}
          show={ClassModelShow}
        />
        <Resource
          name="ClassStudents"
          list={ClassStudentsList}
          edit={ClassStudentsEdit}
          create={ClassStudentsCreate}
          show={ClassStudentsShow}
        />
        <Resource
          name="Lesson"
          list={LessonList}
          edit={LessonEdit}
          create={LessonCreate}
          show={LessonShow}
        />
        <Resource
          name="Assignments"
          list={AssignmentsList}
          edit={AssignmentsEdit}
          create={AssignmentsCreate}
          show={AssignmentsShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="ClassStudent"
          list={ClassStudentList}
          edit={ClassStudentEdit}
          create={ClassStudentCreate}
          show={ClassStudentShow}
        />
      </Admin>
    </div>
  );
};

export default App;
