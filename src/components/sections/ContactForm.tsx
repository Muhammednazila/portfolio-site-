import { useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { site } from "@/data/site";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
  botcheck: string; // honeypot — humans never see or fill this
};

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY: FormValues = { name: "", email: "", subject: "", message: "", botcheck: "" };

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message is a little short — add a bit more detail.";
  }
  return errors;
}

const fieldBase =
  "w-full rounded-lg border bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/50 transition-colors focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-60";

function fieldClass(hasError: boolean): string {
  return cn(
    fieldBase,
    hasError
      ? "border-red-500/60 focus:border-red-500/60 focus:ring-red-500/20"
      : "border-white/10 focus:border-accent",
  );
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const isSubmitting = status === "submitting";

  function update<K extends keyof FormValues>(key: K, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
    // Clear a field's error the moment the user starts correcting it.
    setErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key as keyof FieldErrors];
      return next;
    });
    setStatus((s) => (s === "error" ? "idle" : s));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return; // hard guard against duplicate submissions

    // Honeypot: a real visitor can't fill this, so a value means it's a bot.
    // Fail silently with a "success" so the bot gets no useful signal.
    if (values.botcheck.trim() !== "") {
      setStatus("success");
      setValues(EMPTY);
      return;
    }

    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setServerError(
        "The contact form isn't configured yet. Please email me directly in the meantime.",
      );
      return;
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "Portfolio Contact Form",
          subject:
            values.subject.trim() ||
            `New portfolio message from ${values.name.trim()}`,
          name: values.name.trim(),
          email: values.email.trim(),
          replyto: values.email.trim(),
          message: values.message.trim(),
          botcheck: "",
        }),
      });

      const data: { success?: boolean; message?: string } = await response
        .json()
        .catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setValues(EMPTY);
        setErrors({});
      } else {
        setStatus("error");
        setServerError(
          data.message ||
            "Your message couldn't be sent. Please try again in a moment.",
        );
      }
    } catch {
      setStatus("error");
      setServerError(
        "A network error stopped your message from sending. Check your connection and try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
        <span className="flex size-12 items-center justify-center rounded-full bg-success/15 text-success">
          <CheckCircle2 className="size-6" />
        </span>
        <h3 className="mt-4 text-lg font-semibold text-foreground">
          Message sent — thank you!
        </h3>
        <p className="mt-1.5 max-w-sm text-sm text-muted">
          Your message has landed in my inbox. I'll get back to you as soon as I
          can.
        </p>
        <Button
          variant="secondary"
          size="sm"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="relative space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={fieldClass(Boolean(errors.name))}
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Email <span className="text-accent">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={fieldClass(Boolean(errors.email))}
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-subject"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          placeholder="What's this about? (optional)"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          disabled={isSubmitting}
          className={fieldClass(false)}
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="mb-1.5 block text-sm font-medium text-foreground"
        >
          Message <span className="text-accent">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          placeholder="Tell me about your project, role, or idea…"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(fieldClass(Boolean(errors.message)), "min-h-32 resize-y")}
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — visually hidden, off the tab order, ignored by humans. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="contact-botcheck">Leave this field empty</label>
        <input
          id="contact-botcheck"
          name="botcheck"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.botcheck}
          onChange={(e) => update("botcheck", e.target.value)}
        />
      </div>

      {status === "error" && serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <Send className="size-4" />
            </>
          )}
        </Button>
        <p className="text-xs text-muted">
          Prefer email?{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-accent transition-colors hover:text-accent-hover"
          >
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}
