import { Button, Container, Heading, Text, Flex, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Hero() {
  return (
    <Container mt={10} centerContent maxW="container.md">
      <Flex align="center" justify="center" direction={{ base: "column", md: "row" }} maxW="1000px" gap={40}>
        <VStack align="start" gap={6} maxW="600px">
          <Heading>Welcome!</Heading>
          <Text>
            This is my portfolio, which contains my projects and blog posts. You can also find my skills and services I
            offer, as well as how to get in touch.
          </Text>
          <Button colorScheme="blue">Get In Touch</Button>
        </VStack>

        <Image
          width={150}
          height={150}
          src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM="
          alt="A placeholder image, for now..."
        />
      </Flex>
    </Container>
  );
}
