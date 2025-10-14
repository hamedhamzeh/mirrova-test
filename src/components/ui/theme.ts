import { createSystem, defaultConfig, defineConfig, Heading } from "@chakra-ui/react";

const customConfig = defineConfig({
    theme: {
        tokens: {
            fonts: {
                body: { value: `'Shabnam', sans-serif` },
                Heading: { value: `'Shabnam', sans-serif` }
            }
            // colors: {
            //     brand: {
            //         50: { value: "#EBF3FF" },
            //         100: { value: "#C1D9F8" },
            //         200: { value: "#90B9F1" },
            //         300: { value: "#669BE9" },
            //         400: { value: "#3F8CFF" },
            //         500: { value: "#1A6AD3" },
            //         600: { value: "#1451A0" },
            //         700: { value: "#161616" },
            //         900: { value: "#000000" }
            //     }
            // }
        },
        semanticTokens: {
            colors: {
                brand: {
                    background: { value: "#161616" },
                    cardbg: { value: "#000000" },
                    input: { value: "#454545" },
                    primary: { value: "#F59567" }
                }
            }
        }
    }
});

export const system = createSystem(defaultConfig, customConfig);
