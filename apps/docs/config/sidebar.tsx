import { HugeiconsIcon } from "@hugeicons/react";
import {
  BankIcon,
  BubbleChatIcon,
  ContactBookIcon,
  CpuChargeIcon,
  CreditCardIcon,
  Mail01Icon,
  SmsCodeIcon,
  StartUp02Icon,
  ToolsIcon,
  TransactionHistoryIcon,
} from "@hugeicons/core-free-icons";

export const sidebarNav = [
  {
    title: "Getting Started",
    icon: <HugeiconsIcon icon={StartUp02Icon} />,
    defaultOpen: true,
    pages: [
      { title: "Overview", href: "/docs/getting-started/overview" },
      { title: "Quickstart", href: "/docs/getting-started/quickstart" },
      { title: "Authentication", href: "/docs/getting-started/authentication" },
    ],
  },

  // ------------------------------------------------------
  // CORE
  // ------------------------------------------------------
  {
    title: "Core Concepts",
    icon: <HugeiconsIcon icon={CpuChargeIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Rate Limits", href: "/docs/core/rate-limits" },
      { title: "Error Handling", href: "/docs/core/errors" },
      { title: "Webhooks", href: "/docs/core/webhooks" },
      // { title: 'Idempotency', href: '/docs/core/idempotency' },
    ],
  },

  // ------------------------------------------------------
  // DEVELOPER TOOLS
  // ------------------------------------------------------
  {
    title: "Developer Tools",
    icon: <HugeiconsIcon icon={ToolsIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Sendexa UIs", href: "/docs/tools/exa-ui" },
      { title: "Playground", href: "/docs/tools/playground" },
      { title: "CLI Tool", href: "/docs/tools/cli" },
    ],
  },

  // ------------------------------------------------------
  // CREDIT + BILLING
  // ------------------------------------------------------
  {
    title: "Credit & Billing",
    icon: <HugeiconsIcon icon={CreditCardIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/billing/overview" },
      { title: "Check Balance", href: "/docs/billing/balance" },
      { title: "Top-Up Credits", href: "/docs/billing/topup" },
      { title: "Transaction History", href: "/docs/billing/transactions" },
    ],
  },

  {
    title: "Phonebook",
    icon: <HugeiconsIcon icon={ContactBookIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/phonebook/overview" },
      { title: "Contact", href: "/docs/phonebook/contact" },
      { title: "Group", href: "/docs/phonebook/group" },
      { title: "Webhooks", href: "/docs/phonebook/webhooks" },
      { title: "API Reference", href: "/docs/phonebook/v1" },
    ],
  },
  // ------------------------------------------------------
  // SMS API
  // ------------------------------------------------------
  {
    title: "SMS API",
    icon: <HugeiconsIcon icon={BubbleChatIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/sms/overview" },
      { title: "Send SMS", href: "/docs/sms/send" },
      { title: "Delivery Reports", href: "/docs/sms/dlr" },
      { title: "Webhooks", href: "/docs/sms/webhooks" },
      { title: "API Reference", href: "/docs/sms/v1" },
    ],
  },
  // ------------------------------------------------------
  // OTP / VERIFY API
  // ------------------------------------------------------
  {
    title: "OTP API",
    icon: <HugeiconsIcon icon={SmsCodeIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/verify/overview" },
      { title: "Request OTP", href: "/docs/verify/request" },
      { title: "Verify OTP", href: "/docs/verify/verify" },
      { title: "Resend OTP", href: "/docs/verify/resend" },
      { title: "Webhooks", href: "/docs/verify/webhooks" },
      { title: "API Reference", href: "/docs/verify/v1" },
    ],
  },
  // ------------------------------------------------------
  // EMAIL API
  // ------------------------------------------------------
  {
    title: "Email API",
    icon: <HugeiconsIcon icon={Mail01Icon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/email/overview" },
      { title: "Send Email", href: "/docs/email/send" },
      { title: "Templates", href: "/docs/email/templates" },
      { title: "Attachments", href: "/docs/email/attachments" },
      { title: "Webhooks", href: "/docs/email/webhooks" },
      { title: "API Reference", href: "/docs/email/v1" },
    ],
  },
  // ------------------------------------------------------
  // Dugble Pay – Payments API
  // ------------------------------------------------------
  {
    title: "Dugble Pay",
    icon: <HugeiconsIcon icon={BankIcon} />,
    defaultOpen: false,
    pages: [
      { title: "Overview", href: "/docs/payments/overview" },

      // Checkout (single flow, multiple modes)
      { title: "Hosted Checkout", href: "/docs/payments/checkout/hosted" },
      { title: "Modal Checkout", href: "/docs/payments/checkout/modal" },
      { title: "Webhook Events", href: "/docs/payments/checkout/webhooks" },

      // Charges (keep minimal)
      { title: "Charge API", href: "/docs/payments/charge/overview" },
      { title: "Mobile Money", href: "/docs/payments/charge/momo" },

      // Verification
      { title: "Transaction Verification", href: "/docs/payments/verify" },

      // API Reference
      { title: "API Reference", href: "/api/payments/v1" },
    ],
  },

  {
    title: "Changelog",
    icon: <HugeiconsIcon icon={TransactionHistoryIcon} />,
    defaultOpen: false,
    href: "/docs/changelog",
    pages: [],
  },
];
