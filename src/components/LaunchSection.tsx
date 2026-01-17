import { GlowEffect } from "./GlowEffect";
import { GradientHeading } from "./GradientHeading";
import { NewsletterForm } from "./NewsletterForm";
import { StatusBadge } from "./StatusBadge";

export function LaunchSection() {
  return (
    <section
      id="newsletter"
      className="relative flex min-h-screen flex-col items-center justify-center py-24"
    >
      <GlowEffect size="lg" position="center" blur="lg" />
      <GlowEffect
        size="md"
        color="emerald"
        position="top-left"
        blur="md"
        className="top-1/3 h-[300px] w-[300px]"
      />

      <StatusBadge text="Pierwszy event wkrótce" />

      <GradientHeading className="mb-6 text-center">
        Startujemy na wiosnę
      </GradientHeading>

      <p
        className="max-w-md animate-fade-in-up text-center text-lg text-neutral-400 sm:text-xl"
        style={{ animationDelay: "0.2s" }}
      >
        Zapisz się, żeby nie przegapić pierwszego wydarzenia!
      </p>

      <div
        className="my-12 w-full max-w-md animate-fade-in-up"
        style={{ animationDelay: "0.25s" }}
      >
        <NewsletterForm />
      </div>
    </section>
  );
}
