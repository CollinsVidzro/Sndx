import { redirect } from "next/navigation";

export default function SignUpPage() {
  // Redirect to /signin/magic-link
  redirect("https://app.sendexa.co/signup");
}