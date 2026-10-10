# Sample Space Privacy Policy

**Draft for review — not published.** Bracketed items require confirmation. Source-code inspection supports parts of this draft but does not establish production configuration, provider contracts, retention settings, or legal compliance.

**Effective date:** [date this policy takes effect]

## Who we are

Sample Space ("we", "us", or "our") operates the Sample Space website and frac.fyi, our main product.

This policy covers the Sample Space website and frac.fyi, including its apps, frac.bot, APIs, and integrations. Third-party AI applications are subject to their operators' privacy practices.

For privacy questions and requests, contact Sample Space at support@samplespace.ai. Our business mailing address is [business mailing address].

## Sample Space website

The current Sample Space landing page does not provide user accounts or collect information through forms. Its application code does not currently include advertising or visitor analytics. Our hosting and infrastructure providers receive technical information necessary to deliver the website, such as IP addresses, requested pages, request times, and browser information. They may retain security and operational logs.

If you email us, we receive your email address, the contents of your message, and any attachments. We use these to respond and handle your request.

[Confirm the production hosting provider, any platform-injected analytics or cookies, and log retention before publication.]

## frac.fyi

### Accounts and saved information

When you sign in, our authentication service processes account identifiers, your email address, and available profile information such as your name and profile image. We use this information to authenticate you, associate saved information with your account, administer access, and respond to support requests. Google Firebase Authentication and Firestore support account and saved-chat functionality.

### Service usage and analytics

frac.fyi uses Google Analytics to measure use of the service. Depending on the feature, events can include page views, searches, interactions with well information, and chat-related activity. Analytics events can be associated with your Firebase user ID. That identifier is pseudonymous; it does not make account-linked activity anonymous. Technical data and cookies may also be processed by the analytics service.

[Confirm current event payloads, whether question excerpts are sent, cookie/consent controls, and the configured analytics retention period. The existing frac.fyi policy discloses question excerpts; do not remove that disclosure without checking and, if necessary, changing the implementation.]

### frac.bot and AI processing

When you use frac.bot, your question, relevant conversation history, and information needed to answer your request are processed by our servers and the AI services handling the request. Saved chat history is associated with your account in Firestore. The app may also keep a local copy and preferences in browser storage.

The server supports OpenRouter and its downstream model providers, with a direct DeepSeek API route in some configurations. [Confirm which routes and models are enabled in production, what identifiers accompany requests, processing countries, and each provider's retention and model-training terms.]

Do not submit confidential business information or sensitive personal information unless the service and your agreement expressly support that use. [State the company's own policy on using customer content for model training after approval; do not infer a promise about downstream providers from API use alone.]

### Shared answers

If you use the sharing feature, a copy of the selected question, answer, and included charts or other content is saved separately and made available to anyone with the link. Recipients may forward or copy it. Deleting a private chat should not be assumed to delete a shared copy. Contact us with the link if you want to request its removal.

### Browser storage, apps, and integrations

Browser storage supports sign-in, preferences, and cached chats. Clearing it can sign you out and remove local preferences, but does not by itself delete server-side records.

When you connect an external AI assistant to frac.fyi, that assistant's operator handles your conversation under its own privacy terms. Our services receive the authentication information and tool requests sent to them to provide results and enforce access and usage limits.

[Confirm the current iOS build's account requirements, install identifiers, analytics, location permissions, and saved data. The existing policy describes an install identifier used for usage limits; this draft has not verified the current iOS implementation.]

## Why we use and disclose information

We use information to deliver requested features, authenticate users, maintain saved information, answer questions, provide support, understand product use where disclosed, diagnose failures, and protect the services against abuse.

We disclose information to service providers involved in those functions and when you direct us to share it. Disclosures may also be made where required or permitted by applicable law, including to respond to valid legal process or protect legal rights.

Providers identified in the inspected code and existing notices include Google/Firebase and Google Analytics, Cloudflare, Fly.io, and OpenRouter and downstream AI providers. The Sample Space notice also identifies Vercel. [Confirm this list and each provider's actual role and location against production deployments and agreements.]

Information may be processed outside your province or Canada and may be subject to the laws of the processing location. [Identify applicable countries or regions after verification.]

[Confirm whether the company sells personal information, uses it for targeted advertising, or discloses it for other secondary purposes, then state the approved practice explicitly.]

## Retention and deletion

We retain information for the purposes described here and to meet applicable legal obligations. Retention depends on the record type and purpose.

[Before publication, specify retention periods or meaningful criteria for accounts, chats, shared answers, analytics, security logs, support messages, and backups. Explain any legal holds and the timing of deletion from active systems and backups.]

You can delete saved chats through available product controls or contact our privacy contact to request access, correction, or deletion. Local copies, shared answers, and third-party records may require separate action. We will explain applicable limitations rather than promise that every copy disappears immediately.

## Your choices and privacy requests

Depending on applicable law, you may request access to and correction of personal information we hold about you, withdraw consent where processing relies on it, and request deletion. Withdrawal may affect features that need the information to operate. Browser settings can control cookies and local storage.

Contact support@samplespace.ai to make a request or raise a concern. We may need proportionate information to verify your identity and locate the records. We will respond within applicable legal time limits and explain any lawful exceptions. You may also contact the privacy regulator with jurisdiction over your concern, including the Office of the Privacy Commissioner of Canada or the applicable provincial regulator.

## Safeguards

[Describe verified safeguards, including transport encryption, access controls, administrative access, and incident handling. Do not promise end-to-end encryption or that only the user can ever access a chat unless those statements are technically accurate.]

## Changes and contact

We will update this policy when practices change and revise its effective date. Where required, we will give additional notice and obtain consent for new uses or disclosures.

Privacy contact: Sample Space, support@samplespace.ai, [business mailing address].

---

## Internal review notes — remove before publication

- The operator name and privacy email were supplied by the owner: Sample Space and support@samplespace.ai. Designate the person accountable for privacy internally and confirm the business mailing address.
- Coordinate updates at the parent and product privacy URLs. Do not silently displace existing product commitments, including the currently stated 30-day account deletion window, without reviewing their implementation and applicable notice or consent requirements.
- Existing frac.fyi wording says Google data is never transferred to third parties, yet the service uses processors. Clarify provider processing and prohibited secondary uses rather than keeping an absolute that could mislead.
- Shared answers exist separately from private chat history. This needs explicit disclosure and an operational removal process.
- Public or regulatory datasets can contain personal information; do not categorically describe every public dataset as non-personal.
- Do not publish claims about payments, private uploads, children's age limits, AI training, or retention without confirming the actual service and approved policy.
- Policy text does not replace collection notices, consent controls, deletion processes, or provider agreements. Have Canadian privacy counsel review the completed version for the company's actual jurisdiction and customers.

### Evidence reviewed

- `samplespace/app/privacy/page.tsx`: current landing-page-only policy.
- `fracfyi_web/app/privacy/page.tsx`: current product disclosures and deletion commitment.
- `fracfyi_web/lib/analytics.ts`, `lib/telemetry.ts`, `lib/chatStore.ts`: analytics identifiers, event forwarding, and saved chat operations.
- `fracfyi_server/src/chat.ts`, `src/share.ts`: provider routing and public shared-answer copies.
- Local code was inspected; deployed configuration and vendor agreements were not audited.

### Guidance

- [OPC: Guidelines for obtaining meaningful consent](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/appropriate-handling-of-personal-information/collecting-personal-information-and-consent/consent/gl_omc_201805/)
- [OPC: Businesses and your personal information](https://www.priv.gc.ca/en/privacy-topics/information-and-advice-for-individuals/your-privacy-rights/businesses-and-your-personal-information/)
