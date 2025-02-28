import { Container, Flex, Icon, HStack, VStack, Text } from "@chakra-ui/react";
import { FaCode, FaPaintBrush, FaServer, FaChartLine, FaTrademark } from "react-icons/fa";

export default function Services() {
  const services = [
    { icon: FaCode, title: "Service 1", description: "..." },
    { icon: FaPaintBrush, title: "Service 2", description: "..." },
    { icon: FaServer, title: "Service 3", description: "..." },
    { icon: FaChartLine, title: "Service 4", description: "..." },
    { icon: FaTrademark, title: "Service 5", description: "..." },
  ];

  return (
    <Container mt={20} centerContent maxW="container.md">
      <Flex direction="column" align="center" gap={6} maxW="800px">
        <HStack gap={16} align="center">
          {services.map((service, index) => (
            <VStack key={index} align="center" gap={1}>
              <Icon boxSize={8}>
                <service.icon />
              </Icon>
              <Text textAlign="center" fontWeight="bold" fontSize="md">
                {service.title}
              </Text>
              <Text textAlign="center" fontSize="sm">
                {service.description}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Flex>
    </Container>
  );
}
