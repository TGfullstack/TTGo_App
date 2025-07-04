'use client';
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from '@heroui/react';
import Image from 'next/image';
import { DateFormatter } from '../common/DateFormatter';
import TaskListView from '../tasks/TaskListView';

export default function ProjectCard({ project, loading, onClick }) {
  if (loading) return <p>Loading...</p>;

  return (
    <Card
      isPressable
      onPress={() => onClick(project)}
      className=" p-4 hover:shadow-lg"
    >
      <CardHeader>
        <Image
          src={project.image}
          alt={`${project.name} Image`}
          width={300}
          height={200}
        />
      </CardHeader>
      <CardBody>
        <h1 className="text-xl font-bold justify-center items-center">
          {project.name}
        </h1>
        <div className="flex flex-row gap-3">
          <h2 className="text-lg">
            {`${project.owner?.first_name}` +
              ' ' +
              `${project.owner?.last_name}`}
          </h2>
          <Avatar src={project.owner?.image} alt="User Image" />
        </div>
        <p>{project.description}</p>
        <p>{project.createdAt.toLocaleString('en-US')}</p>
        <span className="text-tiny text-gray-400">
          Updated <DateFormatter date={project.updatedAt} />
        </span>
        {project.tasks ? (
          <TaskListView tasks={project.tasks} />
        ) : (
          <div>No Tasks</div>
        )}
      </CardBody>
      <CardFooter className="text-blue-500">
        <Link className="hover:text-blue-500" href={`/projects/${project._id}`}>
          View Projects
        </Link>
      </CardFooter>
    </Card>
  );
}
