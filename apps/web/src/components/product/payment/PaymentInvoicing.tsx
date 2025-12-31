// components/product/payment/PaymentInvoicing.tsx
"use client";
import { motion } from "framer-motion";
import { 
  FileText, Mail, Download, Clock,
  Globe, Calculator, Bell, CheckCircle
} from "lucide-react";

const invoicingFeatures = [
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Custom Templates",
    description: "Branded invoice templates",
    details: "Add logos, colors, and custom fields"
  },
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Automated Delivery",
    description: "Schedule invoice delivery",
    details: "Email, WhatsApp, or postal mail"
  },
  {
    icon: <Download className="h-5 w-5" />,
    title: "Multiple Formats",
    description: "Export in any format",
    details: "PDF, HTML, CSV, or API"
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Scheduled Invoices",
    description: "Recurring invoices",
    details: "Daily, weekly, monthly, or custom"
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Multi-Currency",
    description: "Global invoicing",
    details: "100+ currencies with auto-conversion"
  },
  {
    icon: <Calculator className="h-5 w-5" />,
    title: "Tax Automation",
    description: "Automatic tax calculation",
    details: "VAT, GST, sales tax worldwide"
  },
  {
    icon: <Bell className="h-5 w-5" />,
    title: "Payment Reminders",
    description: "Automated follow-ups",
    details: "Custom reminder schedules"
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: "Payment Tracking",
    description: "Real-time status",
    details: "Track payments and outstanding"
  }
];

const invoiceWorkflow = [
  {
    step: "1",
    title: "Create Invoice",
    description: "Generate invoice with line items",
    icon: <FileText className="h-5 w-5" />
  },
  {
    step: "2",
    title: "Send to Customer",
    description: "Deliver via email, SMS, or link",
    icon: <Mail className="h-5 w-5" />
  },
  {
    step: "3",
    title: "Customer Pays",
    description: "Multiple payment options",
    icon: <CheckCircle className="h-5 w-5" />
  },
  {
    step: "4",
    title: "Automated Reconciliation",
    description: "Match payments to invoices",
    icon: <Calculator className="h-5 w-5" />
  }
];

export default function PaymentInvoicing() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e5e7eb 1px, transparent 1px),
              linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 mb-4">
            <FileText className="h-4 w-4 text-emerald-600" />
            <span className="text-sm font-semibold text-emerald-700">
              INVOICING & BILLING
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Invoicing Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Create, send, and track professional invoices with automated 
            billing and payment reconciliation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {invoicingFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="p-6 bg-white border border-gray-200 rounded-xl hover:border-emerald-200 transition-all h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 mb-4">
                  <div className="text-emerald-600">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {feature.description}
                </p>
                <p className="text-xs text-gray-500">
                  {feature.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workflow */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Automated Invoice Workflow
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {invoiceWorkflow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="p-6 bg-white border border-gray-200 rounded-xl h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50">
                      <div className="text-emerald-600 font-bold">{step.step}</div>
                    </div>
                    <div className="text-emerald-600">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
                
                {index < invoiceWorkflow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 w-4 h-0.5 bg-emerald-200 transform translate-x-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Invoice Example */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="p-8 bg-white rounded-2xl border border-gray-200 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Professional Invoice Example
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Invoice Number</div>
                  <div className="font-semibold text-gray-900">INV-2024-001</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Date</div>
                  <div className="font-semibold text-gray-900">Jan 15, 2024</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Amount</div>
                  <div className="font-semibold text-gray-900">$1,499.00</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-500 mb-1">Status</div>
                  <div className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                    <CheckCircle className="h-3 w-3" />
                    Paid
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="text-sm text-gray-500 mb-2">Pay with</div>
              <div className="flex gap-2">
                <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  Credit Card
                </div>
                <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  Bank Transfer
                </div>
                <div className="px-3 py-2 bg-gray-50 rounded-lg text-sm font-medium text-gray-700">
                  PayPal
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}