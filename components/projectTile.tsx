import {
  CardBody,
  CardDescription,
  CardRoot,
  CardTitle,
  Badge,
  ButtonGroup,
  Button,
  DataList,
  HStack,
  Status,
} from "@chakra-ui/react";
import { Project } from "../database/models/project";
import Image from "next/image";
import Link from "next/link";

interface TileProps {
  project: Project;
}

export default function ProjectTile({ project }: TileProps) {
  return (
    <CardRoot w={500} mt={16}>
      <CardBody>
        {project.image && <Image src={project.image} alt={project.title} width={500} height={100} />}
        <HStack align={"left"} mt={4} mb={4} gap={6}>
          <Status.Root colorPalette={"blue"}>
            <Status.Indicator />
            In Progress
          </Status.Root>
          <Badge size={"md"} w={"fit"}>
            {project.stage}
          </Badge>
        </HStack>
        <CardTitle>{project.title}</CardTitle>
        {project.tech && project.tech.map((tech, index) => <Badge key={index}>{tech}</Badge>)}
        <DataList.Root>
          <DataList.Item key={project.created_at.toISOString()}>
            <DataList.ItemLabel>Created</DataList.ItemLabel>
            <DataList.ItemValue>{project.created_at.toLocaleDateString()}</DataList.ItemValue>
          </DataList.Item>
          {project.updated_at && (
            <DataList.Item key={project.created_at.toISOString()}>
              <DataList.ItemLabel>Updated</DataList.ItemLabel>
              <DataList.ItemValue>{project.updated_at.toLocaleDateString()}</DataList.ItemValue>
            </DataList.Item>
          )}
        </DataList.Root>
        <CardDescription>{project.description}</CardDescription>
        {(project.github || project.live) && (
          <ButtonGroup>
            {project.github && (
              <Button asChild>
                <Link href={project.github}>Github</Link>
              </Button>
            )}
            {project.live && (
              <Button asChild>
                <Link href={project.live}>Live</Link>
              </Button>
            )}
          </ButtonGroup>
        )}
      </CardBody>
    </CardRoot>
  );
}
