// src/main.jsx (atau index.jsx)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // Ini akan mengimpor Tailwind core dan tema kustom
import './styles/tailwind.utilities.css'; // Ini akan mengimpor utilitas kustom Anda
import App from './App.jsx'
import React from 'react';

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://5c5477b4f20441455dd49e6d7ba87474@o4509649051451392.ingest.us.sentry.io/4509649053220864",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.reactRouterV6BrowserTracingIntegration({
      useEffect: React.useEffect,
    }),
    Sentry.replayIntegration({
      maskAllText: false,
      blcokAllMedia: false,
    })
  ],
  // Tracing
  tracesSampleRate: 1.0, 
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0 
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)