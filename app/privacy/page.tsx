import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Sample Space",
  description: "How Sample Space handles personal information across its website and frac.fyi.",
};

const updated = "October 9, 2026";

export default function Privacy() {
  return (
    <main className="legal">
      <Link href="/" className="legal-back">← Sample Space</Link>
      <h1>Privacy Policy</h1>
      <p className="legal-updated">Last updated {updated}</p>

      <p>Sample Space (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates this website and frac.fyi, our main product. This policy describes how we handle personal information through the Sample Space website and frac.fyi, including its apps, frac.bot, APIs, and integrations.</p>
      <p>For privacy questions or requests, contact <a href="mailto:support@samplespace.ai">support@samplespace.ai</a>.</p>

      <h2>Sample Space website</h2>
      <p>The Sample Space landing page does not provide accounts or collect information through forms. It does not include advertising or visitor analytics. Hosting and infrastructure providers receive technical information needed to deliver the site, such as your IP address, browser information, requested pages, and request times. They may retain operational and security logs.</p>
      <p>If you contact us, we receive your email address, message, and any attachments. We use this information to respond and handle your request.</p>

      <h2>frac.fyi accounts and saved information</h2>
      <p>When you sign in, our authentication service processes account identifiers, your email address, and available profile information such as your name and profile image. We use this information to authenticate you, associate saved information with your account, administer access, and provide support. Google Firebase Authentication and Firestore support account and saved-chat functionality.</p>

      <h2>Usage information and analytics</h2>
      <p>frac.fyi uses Google Analytics to understand how the service is used and to help improve it. Events include page views, searches, interactions with wells and reports, and chat activity, which may include excerpts from questions you ask frac.bot. Events can be linked to your Firebase user ID, rather than your name or email. This identifier is pseudonymous; account-linked activity is not anonymous.</p>
      <p>Analytics services also process technical information, such as device and browser information and approximate location derived from your IP address, and use cookies. Our servers process request information to operate the service, diagnose problems, prevent abuse, and enforce usage limits.</p>

      <h2>frac.bot and AI processing</h2>
      <p>When you use frac.bot, your question, relevant conversation history, and information needed to answer your request are processed by our servers and the AI services handling the request. These services include OpenRouter and the model providers it routes to. Depending on the service configuration, requests may also be processed directly through DeepSeek.</p>
      <p>Saved chat history is associated with your account in Firestore. The app may keep a local copy and preferences in browser storage. AI providers process requests under the terms and privacy practices applicable to those services. Please do not enter confidential business information or sensitive personal information in frac.bot.</p>

      <h2>Shared answers</h2>
      <p>If you share an answer, a separate copy of the selected question, answer, and included charts or other content is saved and made available to anyone with the link. Recipients can forward or copy it. Deleting a private chat does not necessarily delete a shared copy. Contact us with the shared link to request its removal.</p>

      <h2>Browser storage, apps, and integrations</h2>
      <p>frac.fyi uses browser storage for sign-in, preferences, and cached chats. You can clear cookies and browser storage through your browser settings. Doing so may sign you out or remove local preferences, but does not by itself delete server-side records.</p>
      <p>The iOS app uses an install identifier with requests to support usage limits and abuse prevention. Product-specific information about the app is available in the <a href="https://frac.fyi/privacy">frac.fyi privacy notice</a>.</p>
      <p>When you connect an external AI assistant to frac.fyi, that assistant handles your conversation under its own privacy terms. Our services receive the authentication information and tool requests sent to them to provide results and enforce access and usage limits.</p>

      <h2>How we use and disclose information</h2>
      <p>We use information to deliver requested features, authenticate users, maintain saved information, answer questions, provide support, understand product use as described above, diagnose failures, and protect the services against abuse.</p>
      <p>We disclose information to providers involved in these functions and when you direct us to share it. These providers include Google for authentication, data storage, and analytics; hosting and infrastructure services such as Vercel, Cloudflare, and Fly.io; and the AI services described above. We may also disclose information where required or permitted by applicable law, including to respond to valid legal process or protect legal rights.</p>
      <p>Providers may process information outside Canada, including in the United States, where it is subject to the laws of the processing location. Third-party sites and independently operated AI applications have their own privacy practices.</p>

      <h2>Retention and deletion</h2>
      <p>We retain account and saved information while needed to provide the service, and support and operational records while needed to respond to requests, resolve problems, protect the service, or meet applicable legal obligations. Analytics retention depends on the settings of the analytics service.</p>
      <p>You can delete saved chats using available product controls or contact us to request access, correction, or deletion. Local copies, shared answers, and third-party records may require separate action. Clearing browser storage does not delete your account, and deleting an account does not recall copies already saved by recipients of shared links.</p>
      <p>The <a href="https://frac.fyi/privacy">frac.fyi privacy notice</a> includes additional product details and its account-deletion commitment. This policy does not reduce that commitment. When handling your request, we will explain any applicable retention requirements or limitations.</p>

      <h2>Your choices and privacy requests</h2>
      <p>Depending on applicable law, you may request access to and correction of your personal information, withdraw consent where processing relies on it, and request deletion. Withdrawal may affect features that need the information to operate.</p>
      <p>Email <a href="mailto:support@samplespace.ai">support@samplespace.ai</a> to make a request or raise a concern. We may need information to verify your identity and locate the relevant records. We will respond within applicable legal time limits and explain any lawful exceptions. You may also contact the privacy regulator with jurisdiction over your concern, including the Office of the Privacy Commissioner of Canada or the applicable provincial regulator.</p>

      <h2>Security</h2>
      <p>Our services use HTTPS for transport encryption and authentication and access controls for account information. No system is completely secure. Shared links make the content you choose to share accessible to their recipients.</p>

      <h2>Changes to this policy</h2>
      <p>We will update this policy when our practices change and revise the date above. Where required, we will provide additional notice and obtain consent for new uses or disclosures.</p>

      <h2>Contact</h2>
      <p>Sample Space<br/><a href="mailto:support@samplespace.ai">support@samplespace.ai</a></p>
    </main>
  );
}
