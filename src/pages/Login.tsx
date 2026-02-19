import { useState } from "react";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Box maxW="300px" mx="auto" mt="100px">
      <Heading size="md" mb={6} textAlign="center">
        Login
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack gap={4}>
          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" colorScheme="purple" width="100%">
            Entrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
}