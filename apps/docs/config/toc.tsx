type TocPage = {
  title: string;
  href: string;
};

type TocSection = {
  title: string;
  href: string;
  pages?: TocPage[];
};

type TocData = {
  [key: string]: TocSection[];
};

// Your TocData object with the correct types
export const TocData: TocData = {
  'getting-started/overview': [
    {
      title: 'Overview',
      href: '/docs/getting-started/overview',
      pages: [
        {
          title: 'What is Sendexa',
          href: '/docs/getting-started/overview#what-is-sendexa',
        },
        {
          title: 'Why Sendexa',
          href: '/docs/getting-started/overview#why-sendexa',
        },
        {
          title: 'Core API Categories',
          href: '/docs/getting-started/overview#core-api-categories',
        },
        {
          title: 'Base URLs',
          href: '/docs/getting-started/overview#base-urls',
        },
        {
          title: 'Authentication',
          href: '/docs/getting-started/overview#authentication',
        },
        {
          title: 'What You Can Do',
          href: '/docs/getting-started/overview#what-you-can-do',
        },
        {
          title: 'Next Steps',
          href: '/docs/getting-started/overview#next-steps',
        },
      ],
    },
  ],
  'getting-started/quickstart': [
    {
      title: 'Quickstart Guide',
      href: '/docs/getting-started/quickstart',
      pages: [
        {
          title: 'Get Your API Token',
          href: '/docs/getting-started/quickstart#1-get-your-api-token',
        },
        {
          title: 'Base URL',
          href: '/docs/getting-started/quickstart#2-base-url',
        },
        {
          title: 'Send Your First SMS',
          href: '/docs/getting-started/quickstart#3-send-your-first-sms',
        },
        {
          title: 'Example cURL Request',
          href: '/docs/getting-started/quickstart#4-example-curl-request',
        },
        {
          title: 'Response Structure',
          href: '/docs/getting-started/quickstart#5-response-structure',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/getting-started/quickstart#6-troubleshooting',
        },
      ],
    },
  ],
  'getting-started/authentication': [
    {
      title: 'Authentication',
      href: '/docs/getting-started/authentication',
      pages: [
        {
          title: 'How Authentication Works',
          href: '/docs/getting-started/authentication#how-authentication-works',
        },
        {
          title: 'Creating an API Token',
          href: '/docs/getting-started/authentication#creating-an-api-token',
        },
        {
          title: 'Using Tokens in API Requests',
          href: '/docs/getting-started/authentication#using-tokens-in-api-requests',
        },
        {
          title: 'Token Scopes (Coming Soon)',
          href: '/docs/getting-started/authentication#token-scopes-coming-soon',
        },
        {
          title: 'Securing Your Tokens',
          href: '/docs/getting-started/authentication#securing-your-tokens',
        },
        {
          title: 'Rotating or Revoking Tokens',
          href: '/docs/getting-started/authentication#rotating-or-revoking-tokens',
        },
        {
          title: 'Testing Authentication',
          href: '/docs/getting-started/authentication#testing-authentication',
        },
      ],
    },
  ],
  'billing/overview': [
    {
      title: 'Billing Overview',
      href: '/docs/billing/overview',
      pages: [
        {
          title: 'How Billing Works',
          href: '/docs/billing/overview#how-billing-works',
        },
        {
          title: 'Credit System',
          href: '/docs/billing/overview#credit-system',
        },
        {
          title: 'Payment Methods',
          href: '/docs/billing/overview#payment-methods',
        },
        {
          title: 'Auto Top-Up',
          href: '/docs/billing/overview#auto-top-up',
        },
        {
          title: 'Billing Dashboard',
          href: '/docs/billing/overview#billing-dashboard',
        },
        {
          title: 'Invoice & Receipts',
          href: '/docs/billing/overview#invoice--receipts',
        },
        {
          title: 'Support',
          href: '/docs/billing/overview#support',
        },
      ],
    },
  ],
  'billing/balance': [
    {
      title: 'Check Balance',
      href: '/docs/billing/balance',
      pages: [
        {
          title: 'API Endpoint',
          href: '/docs/billing/balance#api-endpoint',
        },
        {
          title: 'Request Example',
          href: '/docs/billing/balance#request-example',
        },
        {
          title: 'Response Structure',
          href: '/docs/billing/balance#response-structure',
        },
        {
          title: 'Error Responses',
          href: '/docs/billing/balance#error-responses',
        },
        {
          title: 'Check Balance in Dashboard',
          href: '/docs/billing/balance#check-balance-in-dashboard',
        },
        {
          title: 'Low Balance Alerts',
          href: '/docs/billing/balance#low-balance-alerts',
        },
        {
          title: 'Best Practices',
          href: '/docs/billing/balance#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/billing/balance#support',
        },
      ],
    },
  ],
  'billing/topup': [
    {
      title: 'Top-Up Credits',
      href: '/docs/billing/topup',
      pages: [
        {
          title: 'Top-Up Methods',
          href: '/docs/billing/topup#top-up-methods',
        },
        {
          title: 'Dashboard Top-Up',
          href: '/docs/billing/topup#dashboard-top-up',
        },
        {
          title: 'API Top-Up',
          href: '/docs/billing/topup#api-top-up',
        },
        {
          title: 'Request Example',
          href: '/docs/billing/topup#request-example',
        },
        {
          title: 'Request Parameters',
          href: '/docs/billing/topup#request-parameters',
        },
        {
          title: 'Response Structure',
          href: '/docs/billing/topup#response-structure',
        },
        {
          title: 'Payment Flow',
          href: '/docs/billing/topup#payment-flow',
        },
        {
          title: 'Webhook Notification',
          href: '/docs/billing/topup#webhook-notification',
        },
        {
          title: 'Error Responses',
          href: '/docs/billing/topup#error-responses',
        },
        {
          title: 'Minimum Top-Up Amounts',
          href: '/docs/billing/topup#minimum-top-up-amounts',
        },
        {
          title: 'Auto Top-Up',
          href: '/docs/billing/topup#auto-top-up',
        },
        {
          title: 'Support',
          href: '/docs/billing/topup#support',
        },
      ],
    },
  ],

  'core/errors': [
    {
      title: 'Error Handling',
      href: '/docs/core/errors',
      pages: [
        {
          title: 'Error Response Format',
          href: '/docs/core/errors#error-response-format',
        },
        {
          title: 'HTTP Status Codes',
          href: '/docs/core/errors#http-status-codes',
        },
        {
          title: 'Common Error Codes',
          href: '/docs/core/errors#common-error-codes',
        },
        {
          title: 'Authentication Errors',
          href: '/docs/core/errors#authentication-errors',
        },
        {
          title: 'Validation Errors',
          href: '/docs/core/errors#validation-errors',
        },
        {
          title: 'Business Logic Errors',
          href: '/docs/core/errors#business-logic-errors',
        },
        {
          title: 'Rate Limiting Errors',
          href: '/docs/core/errors#rate-limiting-errors',
        },
        {
          title: 'Server Errors',
          href: '/docs/core/errors#server-errors',
        },
        {
          title: 'Error Code Reference',
          href: '/docs/core/errors#error-code-reference',
        },
        {
          title: 'Handling Errors in Your Code',
          href: '/docs/core/errors#handling-errors-in-your-code',
        },
        {
          title: 'Best Practices',
          href: '/docs/core/errors#best-practices',
        },
        {
          title: 'Testing Error Scenarios',
          href: '/docs/core/errors#testing-error-scenarios',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/errors#need-help',
        },
      ],
    },
  ],
  'core/rate-limits': [
    {
      title: 'Rate Limits',
      href: '/docs/core/rate-limits',
      pages: [
        {
          title: 'Overview',
          href: '/docs/core/rate-limits#overview',
        },
        {
          title: 'Global Rate Limits',
          href: '/docs/core/rate-limits#global-rate-limits',
        },
        {
          title: 'Endpoint-Specific Limits',
          href: '/docs/core/rate-limits#endpoint-specific-limits',
        },
        {
          title: 'Rate Limit Headers',
          href: '/docs/core/rate-limits#rate-limit-headers',
        },
        {
          title: 'Rate Limit Exceeded Response',
          href: '/docs/core/rate-limits#rate-limit-exceeded-response',
        },
        {
          title: 'Best Practices',
          href: '/docs/core/rate-limits#best-practices',
        },
        {
          title: 'Advanced Strategies',
          href: '/docs/core/rate-limits#advanced-strategies',
        },
        {
          title: 'Plan-Based Limits',
          href: '/docs/core/rate-limits#plan-based-limits',
        },
        {
          title: 'Monitoring & Alerts',
          href: '/docs/core/rate-limits#monitoring--alerts',
        },
        {
          title: 'Testing Rate Limits',
          href: '/docs/core/rate-limits#testing-rate-limits',
        },
        {
          title: 'Frequently Asked Questions',
          href: '/docs/core/rate-limits#frequently-asked-questions',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/rate-limits#need-help',
        },
      ],
    },
  ],
  'core/webhooks': [
    {
      title: 'Webhooks',
      href: '/docs/core/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/core/webhooks#overview',
        },
        {
          title: 'How Webhooks Work',
          href: '/docs/core/webhooks#how-webhooks-work',
        },
        {
          title: 'Configuration',
          href: '/docs/core/webhooks#configuration',
        },
        {
          title: 'Event Types',
          href: '/docs/core/webhooks#event-types',
        },
        {
          title: 'SMS Events',
          href: '/docs/core/webhooks#sms-events',
        },
        {
          title: 'OTP Events',
          href: '/docs/core/webhooks#otp-events',
        },
        {
          title: 'Billing Events',
          href: '/docs/core/webhooks#billing-events',
        },
        {
          title: 'Implementing Webhook Handlers',
          href: '/docs/core/webhooks#implementing-webhook-handlers',
        },
        {
          title: 'Security',
          href: '/docs/core/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/core/webhooks#retry-policy',
        },
        {
          title: 'Testing Webhooks',
          href: '/docs/core/webhooks#testing-webhooks',
        },
        {
          title: 'Monitoring & Debugging',
          href: '/docs/core/webhooks#monitoring--debugging',
        },
        {
          title: 'Common Issues',
          href: '/docs/core/webhooks#common-issues',
        },
        {
          title: 'Sendexa IP Addresses',
          href: '/docs/core/webhooks#sendexa-ip-addresses',
        },
        {
          title: 'Best Practices Checklist',
          href: '/docs/core/webhooks#best-practices-checklist',
        },
        {
          title: 'Need Help?',
          href: '/docs/core/webhooks#need-help',
        },
      ],
    },
  ],

  'lookup/overview': [
    {
      title: 'Lookup API Overview',
      href: '/docs/lookup/overview',
      pages: [
        {
          title: 'Why Choose Sendexa Lookup?',
          href: '/docs/lookup/overview#why-choose-sendexa-lookup',
        },
        {
          title: 'Key Features',
          href: '/docs/lookup/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/lookup/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/lookup/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/lookup/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/lookup/overview#api-endpoints-summary',
        },
        {
          title: 'Pricing',
          href: '/docs/lookup/overview#pricing',
        },
        {
          title: 'Supported Countries',
          href: '/docs/lookup/overview#supported-countries',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/lookup/overview#common-use-cases',
        },
        {
          title: 'Response Format',
          href: '/docs/lookup/overview#response-format',
        },
        {
          title: 'Best Practices',
          href: '/docs/lookup/overview#best-practices',
        },
        {
          title: 'Data Privacy & Compliance',
          href: '/docs/lookup/overview#data-privacy--compliance',
        },
        {
          title: 'Integration Examples',
          href: '/docs/lookup/overview#integration-examples',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/overview#testing',
        },
        {
          title: 'Rate Limits',
          href: '/docs/lookup/overview#rate-limits',
        },
        {
          title: 'SDKs & Libraries',
          href: '/docs/lookup/overview#sdks--libraries',
        },
        {
          title: 'Support',
          href: '/docs/lookup/overview#support',
        },
      ],
    },
  ],

  'lookup/carrier': [
    {
      title: 'Carrier Lookup',
      href: '/docs/lookup/carrier',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/lookup/carrier#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/lookup/carrier#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/lookup/carrier#request-parameters',
        },
        {
          title: 'Parameter Details',
          href: '/docs/lookup/carrier#parameter-details',
        },
        {
          title: 'Response Format',
          href: '/docs/lookup/carrier#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/lookup/carrier#code-examples',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/lookup/carrier#common-use-cases',
        },
        {
          title: 'Bulk Carrier Lookup',
          href: '/docs/lookup/carrier#bulk-carrier-lookup',
        },
        {
          title: 'Caching Best Practices',
          href: '/docs/lookup/carrier#caching-best-practices',
        },
        {
          title: 'Error Handling',
          href: '/docs/lookup/carrier#error-handling',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/carrier#testing',
        },
      ],
    },
  ],

  'lookup/validate': [
    {
      title: 'Phone Number Validation',
      href: '/docs/lookup/validate',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/lookup/validate#quick-start',
        },
        {
          title: 'What Gets Validated',
          href: '/docs/lookup/validate#what-gets-validated',
        },
        {
          title: 'Request Parameters',
          href: '/docs/lookup/validate#request-parameters',
        },
        {
          title: 'Response Format',
          href: '/docs/lookup/validate#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/lookup/validate#code-examples',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/lookup/validate#common-use-cases',
        },
        {
          title: 'Validation Rules',
          href: '/docs/lookup/validate#validation-rules',
        },
        {
          title: 'Error Codes',
          href: '/docs/lookup/validate#error-codes',
        },
        {
          title: 'Best Practices',
          href: '/docs/lookup/validate#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/validate#testing',
        },
      ],
    },
  ],

  'lookup/email-verification': [
    {
      title: 'Email Verification',
      href: '/docs/lookup/email-verification',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/lookup/email-verification#quick-start',
        },
        {
          title: 'What Gets Verified',
          href: '/docs/lookup/email-verification#what-gets-verified',
        },
        {
          title: 'Request Parameters',
          href: '/docs/lookup/email-verification#request-parameters',
        },
        {
          title: 'Response Format',
          href: '/docs/lookup/email-verification#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/lookup/email-verification#code-examples',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/lookup/email-verification#common-use-cases',
        },
        {
          title: 'Email Quality Score',
          href: '/docs/lookup/email-verification#email-quality-score',
        },
        {
          title: 'Disposable Email Detection',
          href: '/docs/lookup/email-verification#disposable-email-detection',
        },
        {
          title: 'Role-Based Email Detection',
          href: '/docs/lookup/email-verification#role-based-email-detection',
        },
        {
          title: 'Catch-All Detection',
          href: '/docs/lookup/email-verification#catch-all-detection',
        },
        {
          title: 'Email Suggestions',
          href: '/docs/lookup/email-verification#email-suggestions',
        },
        {
          title: 'Best Practices',
          href: '/docs/lookup/email-verification#best-practices',
        },
        {
          title: 'Error Handling',
          href: '/docs/lookup/email-verification#error-handling',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/email-verification#testing',
        },
      ],
    },
  ],

  'lookup/line-type': [
    {
      title: 'Line Type Detection',
      href: '/docs/lookup/line-type',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/lookup/line-type#quick-start',
        },
        {
          title: 'Line Types',
          href: '/docs/lookup/line-type#line-types',
        },
        {
          title: 'Request Parameters',
          href: '/docs/lookup/line-type#request-parameters',
        },
        {
          title: 'Response Format',
          href: '/docs/lookup/line-type#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/lookup/line-type#code-examples',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/lookup/line-type#common-use-cases',
        },
        {
          title: 'Line Type Distribution Analysis',
          href: '/docs/lookup/line-type#line-type-distribution-analysis',
        },
        {
          title: 'Bulk Line Type Detection',
          href: '/docs/lookup/line-type#bulk-line-type-detection',
        },
        {
          title: 'Best Practices',
          href: '/docs/lookup/line-type#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/line-type#testing',
        },
      ],
    },
  ],

  'lookup/v1': [
    {
      title: 'Lookup API v1 Reference',
      href: '/docs/lookup/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/lookup/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/lookup/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/lookup/v1#endpoints-overview',
        },
        {
          title: 'Carrier Lookup',
          href: '/docs/lookup/v1#carrier-lookup',
        },
        {
          title: 'Phone Number Validation',
          href: '/docs/lookup/v1#phone-number-validation',
        },
        {
          title: 'Email Verification',
          href: '/docs/lookup/v1#email-verification',
        },
        {
          title: 'Line Type Detection',
          href: '/docs/lookup/v1#line-type-detection',
        },
        {
          title: 'Bulk Lookup',
          href: '/docs/lookup/v1#bulk-lookup',
        },
        {
          title: 'Error Codes',
          href: '/docs/lookup/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/lookup/v1#rate-limits',
        },
        {
          title: 'Response Field Reference',
          href: '/docs/lookup/v1#response-field-reference',
        },
        {
          title: 'SDKs',
          href: '/docs/lookup/v1#sdks',
        },
        {
          title: 'Testing',
          href: '/docs/lookup/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/lookup/v1#best-practices',
        },
        {
          title: 'Pricing Summary',
          href: '/docs/lookup/v1#pricing-summary',
        },
        {
          title: 'Support',
          href: '/docs/lookup/v1#support',
        },
      ],
    },
  ],

  'phonebook/overview': [
    {
      title: 'Phonebook API Overview',
      href: '/docs/phonebook/overview',
      pages: [
        {
          title: 'Why Choose Sendexa Phonebook?',
          href: '/docs/phonebook/overview#why-choose-sendexa-phonebook',
        },
        {
          title: 'Key Features',
          href: '/docs/phonebook/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/phonebook/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/phonebook/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/phonebook/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/phonebook/overview#api-endpoints-summary',
        },
        {
          title: 'Contact Structure',
          href: '/docs/phonebook/overview#contact-structure',
        },
        {
          title: 'Group Structure',
          href: '/docs/phonebook/overview#group-structure',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/phonebook/overview#common-use-cases',
        },
        {
          title: 'Custom Fields',
          href: '/docs/phonebook/overview#custom-fields',
        },
        {
          title: 'Tags System',
          href: '/docs/phonebook/overview#tags-system',
        },
        {
          title: 'Opt-In/Opt-Out Management',
          href: '/docs/phonebook/overview#opt-inopt-out-management',
        },
        {
          title: 'Best Practices',
          href: '/docs/phonebook/overview#best-practices',
        },
        {
          title: 'Data Privacy & GDPR',
          href: '/docs/phonebook/overview#data-privacy--gdpr',
        },
        {
          title: 'Rate Limits',
          href: '/docs/phonebook/overview#rate-limits',
        },
        {
          title: 'Support',
          href: '/docs/phonebook/overview#support',
        },
      ],
    },
  ],

  'phonebook/contact': [
    {
      title: 'Contact Management',
      href: '/docs/phonebook/contact',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/phonebook/contact#quick-start',
        },
        {
          title: 'Create Contact',
          href: '/docs/phonebook/contact#create-contact',
        },
        {
          title: 'List Contacts',
          href: '/docs/phonebook/contact#list-contacts',
        },
        {
          title: 'Get Contact',
          href: '/docs/phonebook/contact#get-contact',
        },
        {
          title: 'Update Contact',
          href: '/docs/phonebook/contact#update-contact',
        },
        {
          title: 'Delete Contact',
          href: '/docs/phonebook/contact#delete-contact',
        },
        {
          title: 'Bulk Import',
          href: '/docs/phonebook/contact#bulk-import',
        },
        {
          title: 'Search Contacts',
          href: '/docs/phonebook/contact#search-contacts',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/phonebook/contact#common-use-cases',
        },
      ],
    },
  ],

  'phonebook/group': [
    {
      title: 'Group Management',
      href: '/docs/phonebook/group',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/phonebook/group#quick-start',
        },
        {
          title: 'Create Group',
          href: '/docs/phonebook/group#create-group',
        },
        {
          title: 'List Groups',
          href: '/docs/phonebook/group#list-groups',
        },
        {
          title: 'Add Contact to Group',
          href: '/docs/phonebook/group#add-contact-to-group',
        },
        {
          title: 'Remove Contact from Group',
          href: '/docs/phonebook/group#remove-contact-from-group',
        },
        {
          title: 'List Group Contacts',
          href: '/docs/phonebook/group#list-group-contacts',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/phonebook/group#common-use-cases',
        },
      ],
    },
  ],

  'phonebook/webhooks': [
    {
      title: 'Phonebook Webhooks',
      href: '/docs/phonebook/webhooks',
      pages: [
        {
          title: 'Webhook Events',
          href: '/docs/phonebook/webhooks#webhook-events',
        },
        {
          title: 'Webhook Payload',
          href: '/docs/phonebook/webhooks#webhook-payload',
        },
        {
          title: 'Setup Webhooks',
          href: '/docs/phonebook/webhooks#setup-webhooks',
        },
        {
          title: 'Implementing Webhook Handler',
          href: '/docs/phonebook/webhooks#implementing-webhook-handler',
        },
      ],
    },
  ],

  'phonebook/v1': [
    {
      title: 'Phonebook API v1 Reference',
      href: '/docs/phonebook/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/phonebook/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/phonebook/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/phonebook/v1#endpoints-overview',
        },
        {
          title: 'Contact Endpoints',
          href: '/docs/phonebook/v1#contact-endpoints',
        },
        {
          title: 'Group Endpoints',
          href: '/docs/phonebook/v1#group-endpoints',
        },
        {
          title: 'Error Codes',
          href: '/docs/phonebook/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/phonebook/v1#rate-limits',
        },
        {
          title: 'SDKs',
          href: '/docs/phonebook/v1#sdks',
        },
        {
          title: 'Support',
          href: '/docs/phonebook/v1#support',
        },
      ],
    },
  ],

  'sms/overview': [
    {
      title: 'SMS API Overview',
      href: '/docs/sms/overview',
      pages: [
        {
          title: 'Why Choose Sendexa SMS?',
          href: '/docs/sms/overview#why-choose-sendexa-sms',
        },
        {
          title: 'Key Features',
          href: '/docs/sms/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/sms/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/sms/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/sms/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/sms/overview#api-endpoints-summary',
        },
        {
          title: 'Message Pricing',
          href: '/docs/sms/overview#message-pricing',
        },
        {
          title: 'Message Status Lifecycle',
          href: '/docs/sms/overview#message-status-lifecycle',
        },
        {
          title: 'Supported Countries',
          href: '/docs/sms/overview#supported-countries',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/sms/overview#common-use-cases',
        },
        {
          title: 'Best Practices',
          href: '/docs/sms/overview#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/sms/overview#testing',
        },
        {
          title: 'Migration Guide',
          href: '/docs/sms/overview#migration-guide',
        },
        {
          title: 'SDKs & Libraries',
          href: '/docs/sms/overview#sdks--libraries',
        },
        {
          title: 'Rate Limits',
          href: '/docs/sms/overview#rate-limits',
        },
        {
          title: 'Support',
          href: '/docs/sms/overview#support',
        },
        {
          title: 'Next Steps',
          href: '/docs/sms/overview#next-steps',
        },
      ],
    },
  ],
  'sms/send': [
    {
      title: 'Send SMS',
      href: '/docs/sms/send',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/sms/send#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/sms/send#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/sms/send#request-parameters',
        },
        {
          title: 'Response Format',
          href: '/docs/sms/send#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/sms/send#code-examples',
        },
        {
          title: 'Advanced Features',
          href: '/docs/sms/send#advanced-features',
        },
        {
          title: 'Best Practices',
          href: '/docs/sms/send#best-practices',
        },
        {
          title: 'Common Errors',
          href: '/docs/sms/send#common-errors',
        },
        {
          title: 'Testing',
          href: '/docs/sms/send#testing',
        },
        {
          title: 'Next Steps',
          href: '/docs/sms/send#next-steps',
        },
      ],
    },
  ],
  'sms/dlr': [
    {
      title: 'Delivery Reports',
      href: '/docs/sms/dlr',
      pages: [
        {
          title: 'Overview',
          href: '/docs/sms/dlr#overview',
        },
        {
          title: 'Message Lifecycle',
          href: '/docs/sms/dlr#message-lifecycle',
        },
        {
          title: 'Check Delivery Status',
          href: '/docs/sms/dlr#check-delivery-status',
        },
        {
          title: 'Request',
          href: '/docs/sms/dlr#request',
        },
        {
          title: 'Response',
          href: '/docs/sms/dlr#response',
        },
        {
          title: 'Code Examples',
          href: '/docs/sms/dlr#code-examples',
        },
        {
          title: 'Bulk Status Check',
          href: '/docs/sms/dlr#bulk-status-check',
        },
        {
          title: 'Polling Best Practices',
          href: '/docs/sms/dlr#polling-best-practices',
        },
        {
          title: 'Delivery Reports via Webhook',
          href: '/docs/sms/dlr#delivery-reports-via-webhook',
        },
        {
          title: 'Error Handling',
          href: '/docs/sms/dlr#error-handling',
        },
        {
          title: 'Message History',
          href: '/docs/sms/dlr#message-history',
        },
        {
          title: 'Analytics',
          href: '/docs/sms/dlr#analytics',
        },
        {
          title: 'Dashboard Reports',
          href: '/docs/sms/dlr#dashboard-reports',
        },
        {
          title: 'Best Practices',
          href: '/docs/sms/dlr#best-practices',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/sms/dlr#troubleshooting',
        },
        {
          title: 'Next Steps',
          href: '/docs/sms/dlr#next-steps',
        },
      ],
    },
  ],
  'sms/webhooks': [
    {
      title: 'SMS Webhooks',
      href: '/docs/sms/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/sms/webhooks#overview',
        },
        {
          title: 'Webhook Events',
          href: '/docs/sms/webhooks#webhook-events',
        },
        {
          title: 'Configuration',
          href: '/docs/sms/webhooks#configuration',
        },
        {
          title: 'Implementing Webhook Handlers',
          href: '/docs/sms/webhooks#implementing-webhook-handlers',
        },
        {
          title: 'Security',
          href: '/docs/sms/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/sms/webhooks#retry-policy',
        },
        {
          title: 'Testing Webhooks',
          href: '/docs/sms/webhooks#testing-webhooks',
        },
        {
          title: 'Monitoring & Debugging',
          href: '/docs/sms/webhooks#monitoring--debugging',
        },
        {
          title: 'Advanced Patterns',
          href: '/docs/sms/webhooks#advanced-patterns',
        },
        {
          title: 'Common Issues',
          href: '/docs/sms/webhooks#common-issues',
        },
        {
          title: 'Sendexa IP Addresses',
          href: '/docs/sms/webhooks#sendexa-ip-addresses',
        },
        {
          title: 'Best Practices Checklist',
          href: '/docs/sms/webhooks#best-practices-checklist',
        },
        {
          title: 'Need Help?',
          href: '/docs/sms/webhooks#need-help',
        },
      ],
    },
  ],
  'sms/v1': [
    {
      title: 'SMS API v1 Reference',
      href: '/docs/sms/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/sms/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/sms/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/sms/v1#endpoints-overview',
        },
        {
          title: 'Send SMS',
          href: '/docs/sms/v1#send-sms',
        },
        {
          title: 'Check Status',
          href: '/docs/sms/v1#check-status',
        },
        {
          title: 'Bulk Status Check',
          href: '/docs/sms/v1#bulk-status-check',
        },
        {
          title: 'Resend Message',
          href: '/docs/sms/v1#resend-message',
        },
        {
          title: 'Message History',
          href: '/docs/sms/v1#message-history',
        },
        {
          title: 'Cancel Scheduled Message',
          href: '/docs/sms/v1#cancel-scheduled-message',
        },
        {
          title: 'Error Codes',
          href: '/docs/sms/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/sms/v1#rate-limits',
        },
        {
          title: 'Message Status Values',
          href: '/docs/sms/v1#message-status-values',
        },
        {
          title: 'Webhooks',
          href: '/docs/sms/v1#webhooks',
        },
        {
          title: 'SDKs & Code Examples',
          href: '/docs/sms/v1#sdks--code-examples',
        },
        {
          title: 'Testing',
          href: '/docs/sms/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/sms/v1#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/sms/v1#support',
        },
        {
          title: 'Changelog',
          href: '/docs/sms/v1#changelog',
        },
      ],
    },
  ],

  'smpp/overview': [
    {
      title: 'SMPP Direct Overview',
      href: '/docs/smpp/overview',
      pages: [
        {
          title: 'Why Choose SMPP Direct?',
          href: '/docs/smpp/overview#why-choose-smpp-direct',
        },
        {
          title: 'SMPP vs HTTP API',
          href: '/docs/smpp/overview#smpp-vs-http-api',
        },
        {
          title: 'SMPP Protocol Version',
          href: '/docs/smpp/overview#smpp-protocol-version',
        },
        {
          title: 'Connection Details',
          href: '/docs/smpp/overview#connection-details',
        },
        {
          title: 'Getting Started',
          href: '/docs/smpp/overview#getting-started',
        },
        {
          title: 'Message Flow',
          href: '/docs/smpp/overview#message-flow',
        },
        {
          title: 'Supported Operations',
          href: '/docs/smpp/overview#supported-operations',
        },
        {
          title: 'Message Types',
          href: '/docs/smpp/overview#message-types',
        },
        {
          title: 'Pricing',
          href: '/docs/smpp/overview#pricing',
        },
        {
          title: 'Connection Types',
          href: '/docs/smpp/overview#connection-types',
        },
        {
          title: 'Throttling & Throughput',
          href: '/docs/smpp/overview#throttling--throughput',
        },
        {
          title: 'Delivery Reports (DLR)',
          href: '/docs/smpp/overview#delivery-reports-dlr',
        },
        {
          title: 'Character Encoding',
          href: '/docs/smpp/overview#character-encoding',
        },
        {
          title: 'TLV Parameters',
          href: '/docs/smpp/overview#tlv-parameters',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/overview#best-practices',
        },
        {
          title: 'Security',
          href: '/docs/smpp/overview#security',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/smpp/overview#troubleshooting',
        },
        {
          title: 'Monitoring & Logs',
          href: '/docs/smpp/overview#monitoring--logs',
        },
        {
          title: 'Testing',
          href: '/docs/smpp/overview#testing',
        },
        {
          title: 'Migration from HTTP API',
          href: '/docs/smpp/overview#migration-from-http-api',
        },
        {
          title: 'Support',
          href: '/docs/smpp/overview#support',
        },
        {
          title: 'Next Steps',
          href: '/docs/smpp/overview#next-steps',
        },
      ],
    },
  ],
  'smpp/connect': [
    {
      title: 'Connect to SMPP',
      href: '/docs/smpp/connect',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/smpp/connect#quick-start',
        },
        {
          title: 'Connection Parameters',
          href: '/docs/smpp/connect#connection-parameters',
        },
        {
          title: 'Bind Types',
          href: '/docs/smpp/connect#bind-types',
        },
        {
          title: 'Connection Examples',
          href: '/docs/smpp/connect#connection-examples',
        },
        {
          title: 'Connection Pooling',
          href: '/docs/smpp/connect#connection-pooling',
        },
        {
          title: 'Keep-Alive (Enquire Link)',
          href: '/docs/smpp/connect#keep-alive-enquire-link',
        },
        {
          title: 'Error Handling',
          href: '/docs/smpp/connect#error-handling',
        },
        {
          title: 'TLS/SSL Connection',
          href: '/docs/smpp/connect#tlsssl-connection',
        },
        {
          title: 'Testing Connection',
          href: '/docs/smpp/connect#testing-connection',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/connect#best-practices',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/smpp/connect#troubleshooting',
        },
        {
          title: 'Next Steps',
          href: '/docs/smpp/connect#next-steps',
        },
      ],
    },
  ],
  'smpp/send': [
    {
      title: 'Send SMS via SMPP',
      href: '/docs/smpp/send',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/smpp/send#quick-start',
        },
        {
          title: 'Submit_SM Parameters',
          href: '/docs/smpp/send#submit_sm-parameters',
        },
        {
          title: 'Standard SMS',
          href: '/docs/smpp/send#standard-sms',
        },
        {
          title: 'Unicode SMS',
          href: '/docs/smpp/send#unicode-sms',
        },
        {
          title: 'Long Messages',
          href: '/docs/smpp/send#long-messages',
        },
        {
          title: 'Flash SMS',
          href: '/docs/smpp/send#flash-sms',
        },
        {
          title: 'Delivery Reports',
          href: '/docs/smpp/send#delivery-reports',
        },
        {
          title: 'Scheduled Messages',
          href: '/docs/smpp/send#scheduled-messages',
        },
        {
          title: 'Validity Period',
          href: '/docs/smpp/send#validity-period',
        },
        {
          title: 'Submit Multiple (submit_multi)',
          href: '/docs/smpp/send#submit-multiple-submit_multi',
        },
        {
          title: 'Code Examples',
          href: '/docs/smpp/send#code-examples',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/send#best-practices',
        },
        {
          title: 'Common Errors',
          href: '/docs/smpp/send#common-errors',
        },
        {
          title: 'Next Steps',
          href: '/docs/smpp/send#next-steps',
        },
      ],
    },
  ],
  'smpp/dlr': [
    {
      title: 'SMPP Delivery Reports',
      href: '/docs/smpp/dlr',
      pages: [
        {
          title: 'Overview',
          href: '/docs/smpp/dlr#overview',
        },
        {
          title: 'Quick Start',
          href: '/docs/smpp/dlr#quick-start',
        },
        {
          title: 'DLR Format',
          href: '/docs/smpp/dlr#dlr-format',
        },
        {
          title: 'DLR Status Codes',
          href: '/docs/smpp/dlr#dlr-status-codes',
        },
        {
          title: 'registered_delivery Options',
          href: '/docs/smpp/dlr#registered_delivery-options',
        },
        {
          title: 'Handling DLRs',
          href: '/docs/smpp/dlr#handling-dlrs',
        },
        {
          title: 'DLR Error Codes',
          href: '/docs/smpp/dlr#dlr-error-codes',
        },
        {
          title: 'Code Examples',
          href: '/docs/smpp/dlr#code-examples',
        },
        {
          title: 'DLR vs Webhooks',
          href: '/docs/smpp/dlr#dlr-vs-webhooks',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/dlr#best-practices',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/smpp/dlr#troubleshooting',
        },
        {
          title: 'Next Steps',
          href: '/docs/smpp/dlr#next-steps',
        },
      ],
    },
  ],
  'smpp/webhooks': [
    {
      title: 'SMPP Webhooks',
      href: '/docs/smpp/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/smpp/webhooks#overview',
        },
        {
          title: 'Configuration',
          href: '/docs/smpp/webhooks#configuration',
        },
        {
          title: 'Webhook Events',
          href: '/docs/smpp/webhooks#webhook-events',
        },
        {
          title: 'Implementation',
          href: '/docs/smpp/webhooks#implementation',
        },
        {
          title: 'Security',
          href: '/docs/smpp/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/smpp/webhooks#retry-policy',
        },
        {
          title: 'Testing',
          href: '/docs/smpp/webhooks#testing',
        },
        {
          title: 'Hybrid Approach',
          href: '/docs/smpp/webhooks#hybrid-approach',
        },
        {
          title: 'Monitoring & Debugging',
          href: '/docs/smpp/webhooks#monitoring--debugging',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/webhooks#best-practices',
        },
        {
          title: 'Common Errors',
          href: '/docs/smpp/webhooks#common-errors',
        },
        {
          title: 'Webhook vs SMPP DLR Comparison',
          href: '/docs/smpp/webhooks#webhook-vs-smpp-dlr-comparison',
        },
        {
          title: 'Next Steps',
          href: '/docs/smpp/webhooks#next-steps',
        },
      ],
    },
  ],
  'smpp/v1': [
    {
      title: 'SMPP API v1 Reference',
      href: '/docs/smpp/v1',
      pages: [
        {
          title: 'Protocol Version',
          href: '/docs/smpp/v1#protocol-version',
        },
        {
          title: 'Connection Details',
          href: '/docs/smpp/v1#connection-details',
        },
        {
          title: 'PDU Structure',
          href: '/docs/smpp/v1#pdu-structure',
        },
        {
          title: 'Bind Operations',
          href: '/docs/smpp/v1#bind-operations',
        },
        {
          title: 'Submit Operations',
          href: '/docs/smpp/v1#submit-operations',
        },
        {
          title: 'Receive Operations',
          href: '/docs/smpp/v1#receive-operations',
        },
        {
          title: 'Session Management',
          href: '/docs/smpp/v1#session-management',
        },
        {
          title: 'Command IDs',
          href: '/docs/smpp/v1#command-ids',
        },
        {
          title: 'Command Status Codes',
          href: '/docs/smpp/v1#command-status-codes',
        },
        {
          title: 'Type of Number (TON)',
          href: '/docs/smpp/v1#type-of-number-ton',
        },
        {
          title: 'Numbering Plan Indicator (NPI)',
          href: '/docs/smpp/v1#numbering-plan-indicator-npi',
        },
        {
          title: 'ESM Class',
          href: '/docs/smpp/v1#esm-class',
        },
        {
          title: 'Data Coding',
          href: '/docs/smpp/v1#data-coding',
        },
        {
          title: 'registered_delivery',
          href: '/docs/smpp/v1#registered_delivery',
        },
        {
          title: 'TLV Parameters',
          href: '/docs/smpp/v1#tlv-parameters',
        },
        {
          title: 'Message Concatenation',
          href: '/docs/smpp/v1#message-concatenation',
        },
        {
          title: 'Time Formats',
          href: '/docs/smpp/v1#time-formats',
        },
        {
          title: 'Rate Limits',
          href: '/docs/smpp/v1#rate-limits',
        },
        {
          title: 'Best Practices',
          href: '/docs/smpp/v1#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/smpp/v1#testing',
        },
        {
          title: 'Support',
          href: '/docs/smpp/v1#support',
        },
        {
          title: 'SMPP Resources',
          href: '/docs/smpp/v1#smpp-resources',
        },
      ],
    },
  ],

  'verify/overview': [
    {
      title: 'Enhanced OTP API Overview',
      href: '/docs/verify/overview',
      pages: [
        {
          title: 'Why Choose Enhanced OTP API?',
          href: '/docs/verify/overview#why-choose-enhanced-otp-api',
        },
        {
          title: 'Key Features',
          href: '/docs/verify/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/verify/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/verify/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/verify/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/verify/overview#api-endpoints-summary',
        },
        {
          title: 'PIN Configuration',
          href: '/docs/verify/overview#pin-configuration',
        },
        {
          title: 'Message Templates',
          href: '/docs/verify/overview#message-templates',
        },
        {
          title: 'Expiry Configuration',
          href: '/docs/verify/overview#expiry-configuration',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/verify/overview#common-use-cases',
        },
        {
          title: 'Rate Limits',
          href: '/docs/verify/overview#rate-limits',
        },
        {
          title: 'Pricing',
          href: '/docs/verify/overview#pricing',
        },
        {
          title: 'Best Practices',
          href: '/docs/verify/overview#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/verify/overview#testing',
        },
        {
          title: 'Error Handling',
          href: '/docs/verify/overview#error-handling',
        },
        {
          title: 'Support',
          href: '/docs/verify/overview#support',
        },
        {
          title: 'Next Steps',
          href: '/docs/verify/overview#next-steps',
        },
      ],
    },
  ],
  'verify/v1': [
    {
      title: 'Enhanced OTP API v1 Reference',
      href: '/docs/verify/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/verify/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/verify/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/verify/v1#endpoints-overview',
        },
        {
          title: 'Request OTP',
          href: '/docs/verify/v1#request-otp',
        },
        {
          title: 'Verify OTP',
          href: '/docs/verify/v1#verify-otp',
        },
        {
          title: 'Resend OTP',
          href: '/docs/verify/v1#resend-otp',
        },
        {
          title: 'HTTP Status Codes',
          href: '/docs/verify/v1#http-status-codes',
        },
        {
          title: 'Error Code Reference',
          href: '/docs/verify/v1#error-code-reference',
        },
        {
          title: 'Rate Limits',
          href: '/docs/verify/v1#rate-limits',
        },
        {
          title: 'PIN Configuration',
          href: '/docs/verify/v1#pin-configuration',
        },
        {
          title: 'Message Templates',
          href: '/docs/verify/v1#message-templates',
        },
        {
          title: 'Expiry Configuration',
          href: '/docs/verify/v1#expiry-configuration',
        },
        {
          title: 'Webhook Events',
          href: '/docs/verify/v1#webhook-events',
        },
        {
          title: 'SDKs & Code Examples',
          href: '/docs/verify/v1#sdks--code-examples',
        },
        {
          title: 'Testing',
          href: '/docs/verify/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/verify/v1#best-practices',
        },
        {
          title: 'Pricing',
          href: '/docs/verify/v1#pricing',
        },
        {
          title: 'Support',
          href: '/docs/verify/v1#support',
        },
        {
          title: 'Changelog',
          href: '/docs/verify/v1#changelog',
        },
      ],
    },
  ],
  'verify/request': [
    {
      title: 'Request OTP',
      href: '/docs/verify/request',
      pages: [
        {
          title: 'Endpoint',
          href: '/docs/verify/request#endpoint',
        },
        {
          title: 'Authentication',
          href: '/docs/verify/request#authentication',
        },
        {
          title: 'Request Body',
          href: '/docs/verify/request#request-body',
        },
        {
          title: 'Request Examples',
          href: '/docs/verify/request#request-examples',
        },
        {
          title: 'Response',
          href: '/docs/verify/request#response',
        },
        {
          title: 'Code Examples',
          href: '/docs/verify/request#code-examples',
        },
        {
          title: 'Template Messages',
          href: '/docs/verify/request#template-messages',
        },
        {
          title: 'PIN Configuration',
          href: '/docs/verify/request#pin-configuration',
        },
        {
          title: 'Error Responses',
          href: '/docs/verify/request#error-responses',
        },
        {
          title: 'Best Practices',
          href: '/docs/verify/request#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/verify/request#testing',
        },
        {
          title: 'Next Steps',
          href: '/docs/verify/request#next-steps',
        },
      ],
    },
  ],
  'verify/resend': [
    {
      title: 'Resend OTP',
      href: '/docs/verify/resend',
      pages: [
        {
          title: 'Endpoint',
          href: '/docs/verify/resend#endpoint',
        },
        {
          title: 'Authentication',
          href: '/docs/verify/resend#authentication',
        },
        {
          title: 'Request Body',
          href: '/docs/verify/resend#request-body',
        },
        {
          title: 'How It Works',
          href: '/docs/verify/resend#how-it-works',
        },
        {
          title: 'Request Examples',
          href: '/docs/verify/resend#request-examples',
        },
        {
          title: 'Response',
          href: '/docs/verify/resend#response',
        },
        {
          title: 'Error Responses',
          href: '/docs/verify/resend#error-responses',
        },
        {
          title: 'Code Examples',
          href: '/docs/verify/resend#code-examples',
        },
        {
          title: 'Frontend Integration',
          href: '/docs/verify/resend#frontend-integration',
        },
        {
          title: 'Best Practices',
          href: '/docs/verify/resend#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/verify/resend#testing',
        },
        {
          title: 'Next Steps',
          href: '/docs/verify/resend#next-steps',
        },
      ],
    },
  ],
  'verify/verify': [
    {
      title: 'Verify OTP',
      href: '/docs/verify/verify',
      pages: [
        {
          title: 'Endpoint',
          href: '/docs/verify/verify#endpoint',
        },
        {
          title: 'Authentication',
          href: '/docs/verify/verify#authentication',
        },
        {
          title: 'Request Body',
          href: '/docs/verify/verify#request-body',
        },
        {
          title: 'Security Features',
          href: '/docs/verify/verify#security-features',
        },
        {
          title: 'Request Examples',
          href: '/docs/verify/verify#request-examples',
        },
        {
          title: 'Response',
          href: '/docs/verify/verify#response',
        },
        {
          title: 'Error Responses',
          href: '/docs/verify/verify#error-responses',
        },
        {
          title: 'Code Examples',
          href: '/docs/verify/verify#code-examples',
        },
        {
          title: 'Frontend Integration',
          href: '/docs/verify/verify#frontend-integration',
        },
        {
          title: 'Best Practices',
          href: '/docs/verify/verify#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/verify/verify#testing',
        },
        {
          title: 'Next Steps',
          href: '/docs/verify/verify#next-steps',
        },
      ],
    },
  ],
  'verify/webhooks': [
    {
      title: 'OTP Webhooks',
      href: '/docs/verify/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/verify/webhooks#overview',
        },
        {
          title: 'Configuration',
          href: '/docs/verify/webhooks#configuration',
        },
        {
          title: 'Webhook Events',
          href: '/docs/verify/webhooks#webhook-events',
        },
        {
          title: 'Implementing Webhook Handlers',
          href: '/docs/verify/webhooks#implementing-webhook-handlers',
        },
        {
          title: 'Security',
          href: '/docs/verify/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/verify/webhooks#retry-policy',
        },
        {
          title: 'Testing Webhooks',
          href: '/docs/verify/webhooks#testing-webhooks',
        },
        {
          title: 'Monitoring',
          href: '/docs/verify/webhooks#monitoring',
        },
        {
          title: 'Use Cases',
          href: '/docs/verify/webhooks#use-cases',
        },
        {
          title: 'Best Practices Checklist',
          href: '/docs/verify/webhooks#best-practices-checklist',
        },
        {
          title: 'Need Help?',
          href: '/docs/verify/webhooks#need-help',
        },
        {
          title: 'Next Steps',
          href: '/docs/verify/webhooks#next-steps',
        },
      ],
    },
  ],

  'push/overview': [
    {
      title: 'Push Notification API Overview',
      href: '/docs/push/overview',
      pages: [
        {
          title: 'Why Choose Sendexa Push?',
          href: '/docs/push/overview#why-choose-sendexa-push',
        },
        {
          title: 'Key Features',
          href: '/docs/push/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/push/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/push/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/push/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/push/overview#api-endpoints-summary',
        },
        {
          title: 'Notification Types',
          href: '/docs/push/overview#notification-types',
        },
        {
          title: 'Supported Platforms',
          href: '/docs/push/overview#supported-platforms',
        },
        {
          title: 'Pricing',
          href: '/docs/push/overview#pricing',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/push/overview#common-use-cases',
        },
        {
          title: 'Best Practices',
          href: '/docs/push/overview#best-practices',
        },
        {
          title: 'Notification Anatomy',
          href: '/docs/push/overview#notification-anatomy',
        },
        {
          title: 'Analytics & Tracking',
          href: '/docs/push/overview#analytics--tracking',
        },
        {
          title: 'Testing',
          href: '/docs/push/overview#testing',
        },
        {
          title: 'Migration Guide',
          href: '/docs/push/overview#migration-guide',
        },
        {
          title: 'SDKs & Libraries',
          href: '/docs/push/overview#sdks--libraries',
        },
        {
          title: 'Supported Features by Platform',
          href: '/docs/push/overview#supported-features-by-platform',
        },
        {
          title: 'Support',
          href: '/docs/push/overview#support',
        },
      ],
    },
  ],

  'push/send': [
    {
      title: 'Send Push Notifications',
      href: '/docs/push/send',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/push/send#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/push/send#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/push/send#request-parameters',
        },
        {
          title: 'Parameter Details',
          href: '/docs/push/send#parameter-details',
        },
        {
          title: 'Response Format',
          href: '/docs/push/send#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/push/send#code-examples',
        },
        {
          title: 'Topic Broadcasting',
          href: '/docs/push/send#topic-broadcasting',
        },
        {
          title: 'Advanced Features',
          href: '/docs/push/send#advanced-features',
        },
        {
          title: 'Platform-Specific Features',
          href: '/docs/push/send#platform-specific-features',
        },
        {
          title: 'Best Practices',
          href: '/docs/push/send#best-practices',
        },
        {
          title: 'Error Handling',
          href: '/docs/push/send#error-handling',
        },
        {
          title: 'Testing',
          href: '/docs/push/send#testing',
        },
      ],
    },
  ],

  'push/devices': [
    {
      title: 'Manage Push Devices',
      href: '/docs/push/devices',
      pages: [
        {
          title: 'Overview',
          href: '/docs/push/devices#overview',
        },
        {
          title: 'Register Device',
          href: '/docs/push/devices#register-device',
        },
        {
          title: 'SDK Integration',
          href: '/docs/push/devices#sdk-integration',
        },
        {
          title: 'Get Device Details',
          href: '/docs/push/devices#get-device-details',
        },
        {
          title: 'List Devices',
          href: '/docs/push/devices#list-devices',
        },
        {
          title: 'Update Device',
          href: '/docs/push/devices#update-device',
        },
        {
          title: 'Delete Device',
          href: '/docs/push/devices#delete-device',
        },
        {
          title: 'Topic Subscriptions',
          href: '/docs/push/devices#topic-subscriptions',
        },
        {
          title: 'Managing Topics in SDK',
          href: '/docs/push/devices#managing-topics-in-sdk',
        },
        {
          title: 'User Preferences',
          href: '/docs/push/devices#user-preferences',
        },
        {
          title: 'Best Practices',
          href: '/docs/push/devices#best-practices',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/push/devices#troubleshooting',
        },
      ],
    },
  ],

  'push/v1': [
    {
      title: 'Push Notification API v1 Reference',
      href: '/docs/push/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/push/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/push/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/push/v1#endpoints-overview',
        },
        {
          title: 'Send Notification',
          href: '/docs/push/v1#send-notification',
        },
        {
          title: 'Send to Topic',
          href: '/docs/push/v1#send-to-topic',
        },
        {
          title: 'Register Device',
          href: '/docs/push/v1#register-device',
        },
        {
          title: 'List Devices',
          href: '/docs/push/v1#list-devices',
        },
        {
          title: 'Get Device Details',
          href: '/docs/push/v1#get-device-details',
        },
        {
          title: 'Update Device',
          href: '/docs/push/v1#update-device',
        },
        {
          title: 'Delete Device',
          href: '/docs/push/v1#delete-device',
        },
        {
          title: 'Subscribe to Topic',
          href: '/docs/push/v1#subscribe-to-topic',
        },
        {
          title: 'Unsubscribe from Topic',
          href: '/docs/push/v1#unsubscribe-from-topic',
        },
        {
          title: 'List Device Topics',
          href: '/docs/push/v1#list-device-topics',
        },
        {
          title: 'Get Analytics',
          href: '/docs/push/v1#get-analytics',
        },
        {
          title: 'Error Codes',
          href: '/docs/push/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/push/v1#rate-limits',
        },
        {
          title: 'Webhooks',
          href: '/docs/push/v1#webhooks',
        },
        {
          title: 'SDKs',
          href: '/docs/push/v1#sdks',
        },
        {
          title: 'Testing',
          href: '/docs/push/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/push/v1#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/push/v1#support',
        },
      ],
    },
  ],

  'voice/overview': [
    {
      title: 'Voice API Overview',
      href: '/docs/voice/overview',
      pages: [
        {
          title: 'Why Choose Sendexa Voice?',
          href: '/docs/voice/overview#why-choose-sendexa-voice',
        },
        {
          title: 'Key Features',
          href: '/docs/voice/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/voice/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/voice/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/voice/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/voice/overview#api-endpoints-summary',
        },
        {
          title: 'Call Flow Architecture',
          href: '/docs/voice/overview#call-flow-architecture',
        },
        {
          title: 'Voice Pricing',
          href: '/docs/voice/overview#voice-pricing',
        },
        {
          title: 'Supported Countries',
          href: '/docs/voice/overview#supported-countries',
        },
        {
          title: 'VoiceXML (Voice Markup)',
          href: '/docs/voice/overview#voicexml-voice-markup',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/voice/overview#common-use-cases',
        },
        {
          title: 'Text-to-Speech (TTS)',
          href: '/docs/voice/overview#text-to-speech-tts',
        },
        {
          title: 'Call Events & Webhooks',
          href: '/docs/voice/overview#call-events--webhooks',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/overview#best-practices',
        },
        {
          title: 'Call Recording',
          href: '/docs/voice/overview#call-recording',
        },
        {
          title: 'Analytics & Reporting',
          href: '/docs/voice/overview#analytics--reporting',
        },
        {
          title: 'Testing',
          href: '/docs/voice/overview#testing',
        },
        {
          title: 'SDKs & Libraries',
          href: '/docs/voice/overview#sdks--libraries',
        },
        {
          title: 'Rate Limits',
          href: '/docs/voice/overview#rate-limits',
        },
        {
          title: 'Support',
          href: '/docs/voice/overview#support',
        },
      ],
    },
  ],

  'voice/make-call': [
    {
      title: 'Make a Voice Call',
      href: '/docs/voice/make-call',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/voice/make-call#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/voice/make-call#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/voice/make-call#request-parameters',
        },
        {
          title: 'Parameter Details',
          href: '/docs/voice/make-call#parameter-details',
        },
        {
          title: 'Response Format',
          href: '/docs/voice/make-call#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/voice/make-call#code-examples',
        },
        {
          title: 'VoiceXML Examples',
          href: '/docs/voice/make-call#voicexml-examples',
        },
        {
          title: 'Advanced Use Cases',
          href: '/docs/voice/make-call#advanced-use-cases',
        },
        {
          title: 'Error Handling',
          href: '/docs/voice/make-call#error-handling',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/make-call#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/voice/make-call#testing',
        },
      ],
    },
  ],

  'voice/broadcast': [
    {
      title: 'Voice Call Broadcasting',
      href: '/docs/voice/broadcast',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/voice/broadcast#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/voice/broadcast#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/voice/broadcast#request-parameters',
        },
        {
          title: 'Parameter Details',
          href: '/docs/voice/broadcast#parameter-details',
        },
        {
          title: 'Response Format',
          href: '/docs/voice/broadcast#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/voice/broadcast#code-examples',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/voice/broadcast#common-use-cases',
        },
        {
          title: 'Batch Processing',
          href: '/docs/voice/broadcast#batch-processing',
        },
        {
          title: 'Monitor Broadcast Status',
          href: '/docs/voice/broadcast#monitor-broadcast-status',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/broadcast#best-practices',
        },
        {
          title: 'Error Handling',
          href: '/docs/voice/broadcast#error-handling',
        },
        {
          title: 'Testing',
          href: '/docs/voice/broadcast#testing',
        },
      ],
    },
  ],

  'voice/tts': [
    {
      title: 'Text-to-Speech (TTS)',
      href: '/docs/voice/tts',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/voice/tts#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/voice/tts#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/voice/tts#request-parameters',
        },
        {
          title: 'Parameter Details',
          href: '/docs/voice/tts#parameter-details',
        },
        {
          title: 'Response Format',
          href: '/docs/voice/tts#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/voice/tts#code-examples',
        },
        {
          title: 'TTS in VoiceXML',
          href: '/docs/voice/tts#tts-in-voicexml',
        },
        {
          title: 'SSML Support',
          href: '/docs/voice/tts#ssml-support',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/voice/tts#common-use-cases',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/tts#best-practices',
        },
        {
          title: 'Caching & Performance',
          href: '/docs/voice/tts#caching--performance',
        },
        {
          title: 'Error Handling',
          href: '/docs/voice/tts#error-handling',
        },
        {
          title: 'Testing',
          href: '/docs/voice/tts#testing',
        },
      ],
    },
  ],

  'voice/ivr': [
    {
      title: 'Interactive Voice Response (IVR)',
      href: '/docs/voice/ivr',
      pages: [
        {
          title: 'Overview',
          href: '/docs/voice/ivr#overview',
        },
        {
          title: 'VoiceXML Basics',
          href: '/docs/voice/ivr#voicexml-basics',
        },
        {
          title: 'Simple IVR Menu',
          href: '/docs/voice/ivr#simple-ivr-menu',
        },
        {
          title: 'Advanced IVR Patterns',
          href: '/docs/voice/ivr#advanced-ivr-patterns',
        },
        {
          title: 'Voice Recording',
          href: '/docs/voice/ivr#voice-recording',
        },
        {
          title: 'Call Forwarding & Routing',
          href: '/docs/voice/ivr#call-forwarding--routing',
        },
        {
          title: 'Advanced Features',
          href: '/docs/voice/ivr#advanced-features',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/ivr#best-practices',
        },
        {
          title: 'Testing IVR Flows',
          href: '/docs/voice/ivr#testing-ivr-flows',
        },
        {
          title: 'Complete IVR Example',
          href: '/docs/voice/ivr#complete-ivr-example',
        },
      ],
    },
  ],

  'voice/webhooks': [
    {
      title: 'Voice Call Events & Webhooks',
      href: '/docs/voice/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/voice/webhooks#overview',
        },
        {
          title: 'Webhook Events',
          href: '/docs/voice/webhooks#webhook-events',
        },
        {
          title: 'Webhook Payload',
          href: '/docs/voice/webhooks#webhook-payload',
        },
        {
          title: 'Configuration',
          href: '/docs/voice/webhooks#configuration',
        },
        {
          title: 'Implementing Webhook Handlers',
          href: '/docs/voice/webhooks#implementing-webhook-handlers',
        },
        {
          title: 'Security',
          href: '/docs/voice/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/voice/webhooks#retry-policy',
        },
        {
          title: 'Testing Webhooks',
          href: '/docs/voice/webhooks#testing-webhooks',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/voice/webhooks#common-use-cases',
        },
        {
          title: 'Monitoring & Debugging',
          href: '/docs/voice/webhooks#monitoring--debugging',
        },
        {
          title: 'Best Practices Checklist',
          href: '/docs/voice/webhooks#best-practices-checklist',
        },
      ],
    },
  ],

  'voice/v1': [
    {
      title: 'Voice API v1 Reference',
      href: '/docs/voice/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/voice/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/voice/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/voice/v1#endpoints-overview',
        },
        {
          title: 'Make a Call',
          href: '/docs/voice/v1#make-a-call',
        },
        {
          title: 'Broadcast Voice Message',
          href: '/docs/voice/v1#broadcast-voice-message',
        },
        {
          title: 'Text-to-Speech',
          href: '/docs/voice/v1#text-to-speech',
        },
        {
          title: 'Get Call Details',
          href: '/docs/voice/v1#get-call-details',
        },
        {
          title: 'List Calls',
          href: '/docs/voice/v1#list-calls',
        },
        {
          title: 'Get Call Recording',
          href: '/docs/voice/v1#get-call-recording',
        },
        {
          title: 'Get Broadcast Details',
          href: '/docs/voice/v1#get-broadcast-details',
        },
        {
          title: 'List Phone Numbers',
          href: '/docs/voice/v1#list-phone-numbers',
        },
        {
          title: 'Purchase Phone Number',
          href: '/docs/voice/v1#purchase-phone-number',
        },
        {
          title: 'VoiceXML Reference',
          href: '/docs/voice/v1#voicexml-reference',
        },
        {
          title: 'Error Codes',
          href: '/docs/voice/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/voice/v1#rate-limits',
        },
        {
          title: 'Webhooks',
          href: '/docs/voice/v1#webhooks',
        },
        {
          title: 'SDKs',
          href: '/docs/voice/v1#sdks',
        },
        {
          title: 'Testing',
          href: '/docs/voice/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/voice/v1#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/voice/v1#support',
        },
      ],
    },
  ],

  'email/overview': [
    {
      title: 'Email API Overview',
      href: '/docs/email/overview',
      pages: [
        {
          title: 'Why Choose Sendexa Email?',
          href: '/docs/email/overview#why-choose-sendexa-email',
        },
        { title: 'Key Features', href: '/docs/email/overview#key-features' },
        {
          title: 'Getting Started',
          href: '/docs/email/overview#getting-started',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/email/overview#common-use-cases',
        },
        {
          title: 'Email Lifecycle',
          href: '/docs/email/overview#email-lifecycle',
        },
        {
          title: 'Domain Verification',
          href: '/docs/email/overview#domain-verification',
        },
        { title: 'Rate Limits', href: '/docs/email/overview#rate-limits' },
        {
          title: 'Best Practices',
          href: '/docs/email/overview#best-practices',
        },
      ],
    },
  ],
  'email/send': [
    {
      title: 'Send Email',
      href: '/docs/email/send',
      pages: [
        { title: 'Quick Start', href: '/docs/email/send#quick-start' },
        { title: 'Endpoint', href: '/docs/email/send#endpoint' },
        {
          title: 'Request Parameters',
          href: '/docs/email/send#request-parameters',
        },
        { title: 'Code Examples', href: '/docs/email/send#code-examples' },
        {
          title: 'Advanced Features',
          href: '/docs/email/send#advanced-features',
        },
        { title: 'Batch Sending', href: '/docs/email/send#batch-sending' },
        { title: 'Error Responses', href: '/docs/email/send#error-responses' },
        { title: 'Best Practices', href: '/docs/email/send#best-practices' },
      ],
    },
  ],
  'email/templates': [
    {
      title: 'Email Templates',
      href: '/docs/email/templates',
      pages: [
        { title: 'Overview', href: '/docs/email/templates#overview' },
        {
          title: 'Create Template',
          href: '/docs/email/templates#create-template',
        },
        {
          title: 'List Templates',
          href: '/docs/email/templates#list-templates',
        },
        {
          title: 'Update Template',
          href: '/docs/email/templates#update-template',
        },
        {
          title: 'Template Variables',
          href: '/docs/email/templates#template-variables',
        },
        { title: 'Code Examples', href: '/docs/email/templates#code-examples' },
        {
          title: 'Template Examples',
          href: '/docs/email/templates#template-examples',
        },
        {
          title: 'Best Practices',
          href: '/docs/email/templates#template-best-practices',
        },
      ],
    },
  ],
  'email/attachments': [
    {
      title: 'Email Attachments',
      href: '/docs/email/attachments',
      pages: [
        {
          title: 'Quick Example',
          href: '/docs/email/attachments#quick-example',
        },
        {
          title: 'Attachment Format',
          href: '/docs/email/attachments#attachment-format',
        },
        {
          title: 'Supported File Types',
          href: '/docs/email/attachments#supported-file-types',
        },
        {
          title: 'Code Examples',
          href: '/docs/email/attachments#code-examples',
        },
        {
          title: 'Inline Images',
          href: '/docs/email/attachments#inline-images',
        },
        {
          title: 'Multiple Attachments',
          href: '/docs/email/attachments#multiple-attachments',
        },
        {
          title: 'Best Practices',
          href: '/docs/email/attachments#best-practices',
        },
      ],
    },
  ],
  'email/webhooks': [
    {
      title: 'Email Webhooks',
      href: '/docs/email/webhooks',
      pages: [
        {
          title: 'Webhook Events',
          href: '/docs/email/webhooks#webhook-events',
        },
        { title: 'Configuration', href: '/docs/email/webhooks#configuration' },
        {
          title: 'Webhook Handler Example',
          href: '/docs/email/webhooks#webhook-handler-example',
        },
      ],
    },
  ],
  'email/v1': [
    {
      title: 'Email API v1 Reference',
      href: '/docs/email/v1',
      pages: [
        { title: 'Base URL', href: '/docs/email/v1#base-url' },
        { title: 'Authentication', href: '/docs/email/v1#authentication' },
        { title: 'Endpoints', href: '/docs/email/v1#endpoints' },
        { title: 'Rate Limits', href: '/docs/email/v1#rate-limits' },
        { title: 'Error Codes', href: '/docs/email/v1#error-codes' },
        { title: 'SDKs', href: '/docs/email/v1#sdks' },
      ],
    },
  ],

  'whatsapp/overview': [
    {
      title: 'WhatsApp API Overview',
      href: '/docs/whatsapp/overview',
      pages: [
        {
          title: 'Why Choose Sendexa WhatsApp?',
          href: '/docs/whatsapp/overview#why-choose-sendexa-whatsapp',
        },
        {
          title: 'Key Features',
          href: '/docs/whatsapp/overview#key-features',
        },
        {
          title: 'Getting Started',
          href: '/docs/whatsapp/overview#getting-started',
        },
        {
          title: 'Base URL',
          href: '/docs/whatsapp/overview#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/whatsapp/overview#authentication',
        },
        {
          title: 'API Endpoints Summary',
          href: '/docs/whatsapp/overview#api-endpoints-summary',
        },
        {
          title: 'Message Pricing',
          href: '/docs/whatsapp/overview#message-pricing',
        },
        {
          title: 'Message Types',
          href: '/docs/whatsapp/overview#message-types',
        },
        {
          title: 'Conversation Windows',
          href: '/docs/whatsapp/overview#conversation-windows',
        },
        {
          title: 'Supported Countries',
          href: '/docs/whatsapp/overview#supported-countries',
        },
        {
          title: 'Common Use Cases',
          href: '/docs/whatsapp/overview#common-use-cases',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/overview#best-practices',
        },
        {
          title: 'Testing',
          href: '/docs/whatsapp/overview#testing',
        },
        {
          title: 'WhatsApp Business Requirements',
          href: '/docs/whatsapp/overview#whatsapp-business-requirements',
        },
        {
          title: 'Rate Limits',
          href: '/docs/whatsapp/overview#rate-limits',
        },
        {
          title: 'SDKs & Libraries',
          href: '/docs/whatsapp/overview#sdks--libraries',
        },
        {
          title: 'Support',
          href: '/docs/whatsapp/overview#support',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/overview#next-steps',
        },
      ],
    },
  ],
  'whatsapp/send': [
    {
      title: 'Send WhatsApp Messages',
      href: '/docs/whatsapp/send',
      pages: [
        {
          title: 'Quick Start',
          href: '/docs/whatsapp/send#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/whatsapp/send#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/whatsapp/send#request-parameters',
        },
        {
          title: 'Text Messages',
          href: '/docs/whatsapp/send#text-messages',
        },
        {
          title: 'Media Messages',
          href: '/docs/whatsapp/send#media-messages',
        },
        {
          title: 'Template Messages',
          href: '/docs/whatsapp/send#template-messages',
        },
        {
          title: 'Interactive Messages',
          href: '/docs/whatsapp/send#interactive-messages',
        },
        {
          title: 'Location Messages',
          href: '/docs/whatsapp/send#location-messages',
        },
        {
          title: 'Contact Messages',
          href: '/docs/whatsapp/send#contact-messages',
        },
        {
          title: 'Reply Context',
          href: '/docs/whatsapp/send#reply-context',
        },
        {
          title: 'Media Upload',
          href: '/docs/whatsapp/send#media-upload',
        },
        {
          title: 'Response Format',
          href: '/docs/whatsapp/send#response-format',
        },
        {
          title: 'Code Examples',
          href: '/docs/whatsapp/send#code-examples',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/send#best-practices',
        },
        {
          title: 'Common Errors',
          href: '/docs/whatsapp/send#common-errors',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/send#next-steps',
        },
      ],
    },
  ],
  'whatsapp/broadcasts': [
    {
      title: 'WhatsApp Broadcasts',
      href: '/docs/whatsapp/broadcasts',
      pages: [
        {
          title: 'Overview',
          href: '/docs/whatsapp/broadcasts#overview',
        },
        {
          title: 'Quick Start',
          href: '/docs/whatsapp/broadcasts#quick-start',
        },
        {
          title: 'Endpoint',
          href: '/docs/whatsapp/broadcasts#endpoint',
        },
        {
          title: 'Request Parameters',
          href: '/docs/whatsapp/broadcasts#request-parameters',
        },
        {
          title: 'Response Format',
          href: '/docs/whatsapp/broadcasts#response-format',
        },
        {
          title: 'Get Broadcast Status',
          href: '/docs/whatsapp/broadcasts#get-broadcast-status',
        },
        {
          title: 'Broadcast with Contact Segments',
          href: '/docs/whatsapp/broadcasts#broadcast-with-contact-segments',
        },
        {
          title: 'Scheduled Broadcasts',
          href: '/docs/whatsapp/broadcasts#scheduled-broadcasts',
        },
        {
          title: 'List Broadcasts',
          href: '/docs/whatsapp/broadcasts#list-broadcasts',
        },
        {
          title: 'Cancel Scheduled Broadcast',
          href: '/docs/whatsapp/broadcasts#cancel-scheduled-broadcast',
        },
        {
          title: 'Broadcast Recipients',
          href: '/docs/whatsapp/broadcasts#broadcast-recipients',
        },
        {
          title: 'Code Examples',
          href: '/docs/whatsapp/broadcasts#code-examples',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/broadcasts#best-practices',
        },
        {
          title: 'Analytics & Reporting',
          href: '/docs/whatsapp/broadcasts#analytics--reporting',
        },
        {
          title: 'Common Errors',
          href: '/docs/whatsapp/broadcasts#common-errors',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/broadcasts#next-steps',
        },
      ],
    },
  ],
  'whatsapp/contacts': [
    {
      title: 'WhatsApp Contacts',
      href: '/docs/whatsapp/contacts',
      pages: [
        {
          title: 'Overview',
          href: '/docs/whatsapp/contacts#overview',
        },
        {
          title: 'Quick Start',
          href: '/docs/whatsapp/contacts#quick-start',
        },
        {
          title: 'Endpoints',
          href: '/docs/whatsapp/contacts#endpoints',
        },
        {
          title: 'Request Parameters',
          href: '/docs/whatsapp/contacts#request-parameters',
        },
        {
          title: 'Get Contact',
          href: '/docs/whatsapp/contacts#get-contact',
        },
        {
          title: 'Update Contact',
          href: '/docs/whatsapp/contacts#update-contact',
        },
        {
          title: 'Delete Contact',
          href: '/docs/whatsapp/contacts#delete-contact',
        },
        {
          title: 'List Contacts',
          href: '/docs/whatsapp/contacts#list-contacts',
        },
        {
          title: 'Bulk Operations',
          href: '/docs/whatsapp/contacts#bulk-operations',
        },
        {
          title: 'Tag Management',
          href: '/docs/whatsapp/contacts#tag-management',
        },
        {
          title: 'Code Examples',
          href: '/docs/whatsapp/contacts#code-examples',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/contacts#best-practices',
        },
        {
          title: 'Contact Segmentation Examples',
          href: '/docs/whatsapp/contacts#contact-segmentation-examples',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/contacts#next-steps',
        },
      ],
    },
  ],
  'whatsapp/templates': [
    {
      title: 'WhatsApp Message Templates',
      href: '/docs/whatsapp/templates',
      pages: [
        {
          title: 'Overview',
          href: '/docs/whatsapp/templates#overview',
        },
        {
          title: 'Quick Start',
          href: '/docs/whatsapp/templates#quick-start',
        },
        {
          title: 'Template Structure',
          href: '/docs/whatsapp/templates#template-structure',
        },
        {
          title: 'Create Template',
          href: '/docs/whatsapp/templates#create-template',
        },
        {
          title: 'Template Status',
          href: '/docs/whatsapp/templates#template-status',
        },
        {
          title: 'Get Template',
          href: '/docs/whatsapp/templates#get-template',
        },
        {
          title: 'List Templates',
          href: '/docs/whatsapp/templates#list-templates',
        },
        {
          title: 'Update Template',
          href: '/docs/whatsapp/templates#update-template',
        },
        {
          title: 'Delete Template',
          href: '/docs/whatsapp/templates#delete-template',
        },
        {
          title: 'Template Best Practices',
          href: '/docs/whatsapp/templates#template-best-practices',
        },
        {
          title: 'Common Template Examples',
          href: '/docs/whatsapp/templates#common-template-examples',
        },
        {
          title: 'Approval Process',
          href: '/docs/whatsapp/templates#approval-process',
        },
        {
          title: 'Quality Scores',
          href: '/docs/whatsapp/templates#quality-scores',
        },
        {
          title: 'Code Examples',
          href: '/docs/whatsapp/templates#code-examples',
        },
        {
          title: 'Troubleshooting',
          href: '/docs/whatsapp/templates#troubleshooting',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/templates#next-steps',
        },
      ],
    },
  ],
  'whatsapp/webhooks': [
    {
      title: 'WhatsApp Webhooks',
      href: '/docs/whatsapp/webhooks',
      pages: [
        {
          title: 'Overview',
          href: '/docs/whatsapp/webhooks#overview',
        },
        {
          title: 'Webhook Events',
          href: '/docs/whatsapp/webhooks#webhook-events',
        },
        {
          title: 'Configuration',
          href: '/docs/whatsapp/webhooks#configuration',
        },
        {
          title: 'Implementation',
          href: '/docs/whatsapp/webhooks#implementation',
        },
        {
          title: 'Security',
          href: '/docs/whatsapp/webhooks#security',
        },
        {
          title: 'Retry Policy',
          href: '/docs/whatsapp/webhooks#retry-policy',
        },
        {
          title: 'Testing',
          href: '/docs/whatsapp/webhooks#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/webhooks#best-practices',
        },
        {
          title: 'Common Errors',
          href: '/docs/whatsapp/webhooks#common-errors',
        },
        {
          title: 'Next Steps',
          href: '/docs/whatsapp/webhooks#next-steps',
        },
      ],
    },
  ],
  'whatsapp/v1': [
    {
      title: 'WhatsApp API v1 Reference',
      href: '/docs/whatsapp/v1',
      pages: [
        {
          title: 'Base URL',
          href: '/docs/whatsapp/v1#base-url',
        },
        {
          title: 'Authentication',
          href: '/docs/whatsapp/v1#authentication',
        },
        {
          title: 'Endpoints Overview',
          href: '/docs/whatsapp/v1#endpoints-overview',
        },
        {
          title: 'Send Message',
          href: '/docs/whatsapp/v1#send-message',
        },
        {
          title: 'Broadcasts',
          href: '/docs/whatsapp/v1#broadcasts',
        },
        {
          title: 'Contacts',
          href: '/docs/whatsapp/v1#contacts',
        },
        {
          title: 'Templates',
          href: '/docs/whatsapp/v1#templates',
        },
        {
          title: 'Media',
          href: '/docs/whatsapp/v1#media',
        },
        {
          title: 'Error Codes',
          href: '/docs/whatsapp/v1#error-codes',
        },
        {
          title: 'Rate Limits',
          href: '/docs/whatsapp/v1#rate-limits',
        },
        {
          title: 'Message Types',
          href: '/docs/whatsapp/v1#message-types',
        },
        {
          title: 'Webhooks',
          href: '/docs/whatsapp/v1#webhooks',
        },
        {
          title: 'SDKs',
          href: '/docs/whatsapp/v1#sdks',
        },
        {
          title: 'Testing',
          href: '/docs/whatsapp/v1#testing',
        },
        {
          title: 'Best Practices',
          href: '/docs/whatsapp/v1#best-practices',
        },
        {
          title: 'Support',
          href: '/docs/whatsapp/v1#support',
        },
        {
          title: 'Changelog',
          href: '/docs/whatsapp/v1#changelog',
        },
      ],
    },
  ],
  'compliance/overview': [
    {
      title: 'Compliance Overview',
      href: '/docs/compliance/overview',
      pages: [
        {
          title: 'Importance of Compliance',
          href: '/docs/compliance/overview#importance-of-compliance',
        },
        {
          title: 'Regulatory Requirements',
          href: '/docs/compliance/overview#regulatory-requirements',
        },
        {
          title: 'Best Practices',
          href: '/docs/compliance/overview#best-practices',
        },
      ],
    },
  ],
'changelog': [
  {
    title: 'Changelog',
    href: '/docs/changelog',
    pages: [
      {
        title: '2025',
        href: '/docs/changelog#2025',
      },
      {
        title: 'August 2025',
        href: '/docs/changelog#august-2025',
      },
      {
        title: 'July 2025',
        href: '/docs/changelog#july-2025',
      },
      {
        title: 'June 2025',
        href: '/docs/changelog#june-2025',
      },
      {
        title: 'May 2025',
        href: '/docs/changelog#may-2025',
      },
      {
        title: 'April 2025',
        href: '/docs/changelog#april-2025',
      },
      {
        title: 'Breaking Changes',
        href: '/docs/changelog#breaking-changes',
      },
      {
        title: 'Deprecation Notices',
        href: '/docs/changelog#deprecation-notices',
      },
      {
        title: 'Upcoming Features',
        href: '/docs/changelog#upcoming-features',
      },
      {
        title: 'Platform Status',
        href: '/docs/changelog#platform-status',
      },
      {
        title: 'Feedback & Support',
        href: '/docs/changelog#feedback--support',
      },
    ],
  },
],

};
