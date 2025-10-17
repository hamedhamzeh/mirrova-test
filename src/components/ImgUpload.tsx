import { Box, Icon, VStack, Text, Input } from "@chakra-ui/react";
import { LuUpload } from "react-icons/lu";
import React, { useRef, useState } from "react";

//TODO: Functionality must be implemented
const ImgUpload: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selected = event.target.files?.[0];
        if (selected) setFile(selected);
    };

    const handleClick = () => {
        inputRef.current?.click();
    };

    return (
        <Box mt={2}>
            <Box
                onClick={handleClick}
                borderWidth="2px"
                borderStyle="dashed"
                borderRadius="2xl"
                borderColor="brand.primary"
                h="110px" // 👈 adjustable height
                display="flex"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                cursor="pointer"
            >
                <VStack>
                    <Icon as={LuUpload} boxSize={8} color="brand.primary" />
                    {/* <Text fontSize="sm" color="gray.500">
                        برای آپلود کلیک کنید یا فایل را بکشید
                    </Text> */}
                </VStack>
                <Input ref={inputRef} type="file" accept="image/*" onChange={handleFileChange} display="none" />
            </Box>

            {file && (
                <Box mt={3} textAlign="center">
                    <Text fontSize="sm" color="gray.600">
                        فایل انتخاب شده: {file.name}
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default ImgUpload;
