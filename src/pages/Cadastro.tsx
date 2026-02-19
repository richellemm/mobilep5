import { useState } from "react";
import { Box, Button, Input, VStack, Heading } from "@chakra-ui/react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nome, email, cpf, senha });
  };

  return (
    <Box maxW="300px" mx="auto" mt="100px">
      <Heading size="md" mb={6} textAlign="center">
        Cadastro
      </Heading>

      <form onSubmit={handleSubmit}>
        <VStack gap={4}>
          <Input
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <Input
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <Button type="submit" colorScheme="purple" width="100%">
            Cadastrar
          </Button>
        </VStack>
      </form>
    </Box>
  );
}