import { Box, Flex, Heading, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";

export default function NavBar() {
  return (
    <Box px={4} py={3} mb={14}>
      <Flex justify={"space-between"} align="center" width="100%" p={4}>
        <Flex justify="flex-start" align="center" flex="1">
          <Heading fontSize={"2xl"}>Charley</Heading>
        </Flex>
        <Flex gap={10} justify="center" align="center" flex="1" display={{ base: "none", md: "flex" }}>
          <ChakraLink fontSize={"xl"} _hover={{ color: "#008080", textDecoration: "underline" }} as={Link} href="/">
            Home
          </ChakraLink>
          <ChakraLink
            fontSize={"xl"}
            _hover={{ color: "#008080", textDecoration: "underline" }}
            as={Link}
            href="/projects"
          >
            Projects
          </ChakraLink>
          <ChakraLink fontSize={"xl"} _hover={{ color: "#008080", textDecoration: "underline" }} as={Link} href="/blog">
            Blog
          </ChakraLink>
          <ChakraLink
            fontSize={"xl"}
            _hover={{ color: "#008080", textDecoration: "underline" }}
            as={Link}
            href="/skills"
          >
            Skills
          </ChakraLink>
          <ChakraLink
            fontSize={"xl"}
            _hover={{ color: "#008080", textDecoration: "underline" }}
            as={Link}
            href="/contact"
          >
            Contact
          </ChakraLink>
        </Flex>
      </Flex>
    </Box>
  );
}
