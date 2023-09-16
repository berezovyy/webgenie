import Head from "next/head";
import { Flex, Box, Input, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [previewHtml, setPreviewHtml] = useState(``);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {};
  return (
    <>
      <Head>
        <title>Webgenie</title>
      </Head>
      <Flex minH="100vh" minW="100vw">
        <Box p="5" flex="1" borderColor="gray.200" borderRight="1px solid">
          <form onSubmit={handleSubmit}>
            <HStack
              spacing={4}
              bg="orange.100"
              p="4"
              rounded="md"
              border="1px solid"
              borderColor="gray.200"
            >
              <Input placeholder="Type something..." bg="white" />
              <Button type="submit" colorScheme="blue">
                Submit
              </Button>
            </HStack>
          </form>
        </Box>
        <Flex flex="1">
          {previewHtml && (
            <Box
              as="iframe"
              p="5"
              flex="1"
              title="result"
              srcDoc={`<style>@import "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.17/dist/tailwind.min.css";</style>${previewHtml}`}
            />
          )}
        </Flex>
      </Flex>
    </>
  );
}
