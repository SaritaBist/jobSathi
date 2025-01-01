
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dates/styles.css';

import { MantineProvider} from '@mantine/core';
import theme from "./Themes.ts";
import ObserverProvider from "../ObserverProvider.tsx";


createRoot(document.getElementById('root')!).render(

    <ObserverProvider>
    <MantineProvider defaultColorScheme={'dark'} theme={theme}>
            <App/>
        </MantineProvider>
    </ObserverProvider>


)
