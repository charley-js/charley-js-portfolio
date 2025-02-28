import Hero from "../components/hero";
import Services from "../components/services";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Heading textAlign={"center"} fontSize={"2xl"} mb={20}>
        Home
      </Heading>
      <Hero />
      <Services />
    </Container>
  );
}
