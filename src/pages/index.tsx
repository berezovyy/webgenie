import Head from "next/head";
import { Flex, Box, Input, Button, HStack } from "@chakra-ui/react";
import { useState } from "react";
import parseJSONWithFixes from "~/utils/JSONParse";

export default function Home() {
  const [history, setHistory] = useState<any>([]);
  const [previewHtml, setPreviewHtml] = useState(``);
  const [isLoading, setIsLoading] = useState(false);

  const parseHtmlRes = (htmlRes: string, body: any) => {
    try {
      const { html } = parseJSONWithFixes(htmlRes);
      setPreviewHtml(html);
      setHistory([
        ...history,
        {
          html,
          body,
        },
      ]);
    } catch (error) {
      console.error("Oops, something went wrong!");
    }
  };

  console.log(history);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formTarget = e.target as HTMLFormElement;
    const formData = new FormData(formTarget);
    const fields = Object.fromEntries(formData) as {
      curse: string;
    };

    try {
      setIsLoading(true);
      const body = previewHtml
        ? {
            component: previewHtml,
            requestedImprovements: fields.curse,
          }
        : {
            component: fields.curse,
          };
      const res = await fetch(
        previewHtml ? "/api/improveComponent" : "/api/generateComponent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      ).then((res) => res.json());
      if (res.data) {
        parseHtmlRes(res.data, body);
      }
    } catch (error) {
      console.error("Oops, something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
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
              <Input name="curse" placeholder="Type something..." bg="white" />
              <Button type="submit" colorScheme="blue" isLoading={isLoading}>
                {previewHtml ? "Improve" : "Generate"}
              </Button>
            </HStack>
          </form>
          <Box>
            {history
              .map((item: any, index: number) => (
                <Box
                  key={
                    index + item?.body?.requestedImprovements ??
                    item?.body?.component
                  }
                  p="4"
                  bg="blue.100"
                  rounded="md"
                  border="1px solid"
                  borderColor="gray.200"
                  onMouseEnter={() => setPreviewHtml(item.html)}
                  onMouseLeave={() =>
                    setPreviewHtml(history[history.length - 1].html)
                  }
                  cursor="pointer"
                >
                  {index + 1}.{" "}
                  {item?.body?.requestedImprovements ?? item?.body?.component}
                </Box>
              ))
              .reverse()}
          </Box>
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
