import { OutlinedButton } from "@/components/ui/OutlinedButton";
import { settingsSidebarSate } from "@/recoil/UserSettingsAtom";
import { markdownFileTextSelector } from "@/recoil/UserSettingsSelectors";
import { Box, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { SetterOrUpdater, useRecoilState, useRecoilValue } from "recoil";

interface MarkdownFileTileProps {
  tileId: number;
}

export const MarkdownFileTile: React.FC<MarkdownFileTileProps> = ({
  tileId,
}) => {
  const color = `var(--text-color-${tileId})`;
  const sidebarOpen = useRecoilValue(settingsSidebarSate);
  const fileInputRef = useRef(null);
  const [markdownFileText, setMarkdownFileText] = useRecoilState(
    markdownFileTextSelector(tileId)
  ) as [string | undefined, SetterOrUpdater<string | undefined>];
  const [showingFileInput, setShowingFileInput] = useState<boolean>(
    !markdownFileText
  );

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    const fileExtension = fileObj.name.split(".").pop();
    if (fileExtension !== "md") {
      alert("Please choose a Markdown file to open");
      return;
    }

    const markdown = await fileObj.text();

    setShowingFileInput(false);
    setMarkdownFileText(markdown);
  };

  const clearCurrentFile = () => {
    setShowingFileInput(true);
    setMarkdownFileText("");
  };

  return (
    <Box color={color}>
      <Box px="6" py="4">
        <div className="markdown-body">
          <ReactMarkdown>{markdownFileText ?? ""}</ReactMarkdown>
        </div>
      </Box>
      {showingFileInput && (
        <Box textAlign="center" mb="4">
          <Text>Please select a markdown file:</Text>
          <Input
            ref={fileInputRef}
            type="file"
            onChange={handleFileChange}
            accept=".md,.txt"
            size="md"
            width="220px"
            p="1"
            mt="2"
          />
        </Box>
      )}
      {!showingFileInput && sidebarOpen && (
        <Box width="100%">
          <OutlinedButton
            fontSize="xs"
            marginLeft="auto"
            display="block"
            onClick={clearCurrentFile}
          >
            Change file
          </OutlinedButton>
        </Box>
      )}
    </Box>
  );
};
