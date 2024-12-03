import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';



import { MantineProvider} from '@mantine/core';
import theme from "./Themes.ts";


createRoot(document.getElementById('root')!).render(

    <StrictMode>
        <MantineProvider theme={theme}>
            <App/>
        </MantineProvider>

    </StrictMode>,
)
