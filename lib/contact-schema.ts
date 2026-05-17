import { z } from 'zod';

/**
 * Contact form validation schema.
 *
 * Used server-side for hard validation on the API route. The frontend uses
 * native HTML validation (required, type=email) for UX; this schema is the
 * source of truth for what actually gets accepted.
 *
 * Honeypot field `website` is checked in the route, not here. Populated
 * honeypots are silently dropped before validation runs.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required.')
    .max(120, 'Name is too long.'),
  email: z
    .string()
    .trim()
    .email('A valid email is required.')
    .max(254, 'Email is too long.'),
  company: z
    .string()
    .trim()
    .max(200, 'Company name is too long.')
    .optional()
    .default(''),
  engagementType: z
    .string()
    .trim()
    .max(80, 'Engagement type is too long.')
    .optional()
    .default(''),
  message: z
    .string()
    .trim()
    .min(1, 'Message is required.')
    .max(5000, 'Message is too long.'),
});

export type ContactPayload = z.infer<typeof contactSchema>;
