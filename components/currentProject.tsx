import ProjectTile from "./projectTile";
import { Container } from "@chakra-ui/react";
import { getCurrentProject } from "../lib/projects";

export default async function CurrentProject() {
  const project = await getCurrentProject();
  return (
    <Container>
      <ProjectTile project={project} />
    </Container>
  );
}
