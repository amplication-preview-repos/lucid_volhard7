import { Module } from "@nestjs/common";
import { CourseModule } from "./course/course.module";
import { RoleModule } from "./role/role.module";
import { SubmissionsModule } from "./submissions/submissions.module";
import { ClassModelModule } from "./classModel/classModel.module";
import { ClassStudentsModule } from "./classStudents/classStudents.module";
import { LessonModule } from "./lesson/lesson.module";
import { AssignmentsModule } from "./assignments/assignments.module";
import { UserModule } from "./user/user.module";
import { ClassStudentModule } from "./classStudent/classStudent.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CourseModule,
    RoleModule,
    SubmissionsModule,
    ClassModelModule,
    ClassStudentsModule,
    LessonModule,
    AssignmentsModule,
    UserModule,
    ClassStudentModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
