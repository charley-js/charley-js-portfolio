import Hero from "../components/hero";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Heading textAlign={"center"} fontSize={"2xl"} mb={20}>
        Home
      </Heading>
      <Hero />
    </Container>
  );
}
