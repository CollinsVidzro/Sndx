import { redirect } from "next/navigation";

export default function SignInPage() {
  // Redirect to /signin/magic-link
  redirect("https://app.sendexa.co/login");
}