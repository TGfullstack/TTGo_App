// 'use client';
// import { Card, CardBody, CardHeader } from "@heroui/react";

import ProjectView from '@/components/projects/ProjectCard';

const { useParams } = require('next/navigation');
const { useEffect, useState } = require('react');

export default async function ProjectPage({ params }) {
  const { id } = await params;
  const response = await fetch(`http://localhost:8080/api/v1/projects/${id}`);
  const project = await response.json();
  console.log(project);
  // const response = fetch(`http://localhost:8080/api/v1/projects/${id}`);
  // const data = response.json()

  return (
    <div>
      <ProjectView project={project} />
    </div>
  );
}
