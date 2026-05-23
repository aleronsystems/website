'use client';

import { useEffect } from 'react';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider } from 'posthog-js/react';

/**
 * PostHog analytics provider for Aleron Systems.
 *
 * Uses the modern App Router pattern (posthog-js >= 1.116.0):
 *
 *   - capture_pageview: 'history_change' tells PostHog to hook into
 *     the browser History API directly, so $pageview events fire
 *     correctly on Next.js client-side navigation without manual
 *     usePathname/useSearchParams tracking.
 *
 *   - Initialization is guarded by posthog.__loaded to prevent
 *     duplicate clients across React strict-mode double-renders
 *     and Next.js fast refresh.
 *
 *   - If NEXT_PUBLIC_POSTHOG_KEY is not set (e.g. local dev or a
 *     preview deploy without env vars), the provider becomes a
 *     transparent pass-through. No network calls, no errors.
 *
 * Features enabled:
 *   - Product Analytics (autocapture clicks, form submits, inputs)
 *   - Web Analytics (automatic $pageview on every route change)
 *   - Session Replay (full session recording with input masking)
 */

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!posthogKey) return;
    if (posthog.__loaded) return;

    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: 'history_change',
      capture_pageleave: true,
      autocapture: true,
      persistence: 'localStorage+cookie',
      session_recording: {
        maskAllInputs: false,
        maskInputOptions: {
          password: true,
          email: true,
        },
        maskTextSelector: '[data-ph-mask]',
      },
      disable_session_recording: false,
    });
  }, []);

  if (!posthogKey) {
    return <>{children}</>;
  }

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
