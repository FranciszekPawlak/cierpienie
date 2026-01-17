import Image from "next/image";

const teamMembers = [
  {
    name: "Natalia Begert",
    description: "Pilates Mommy",
    image: "/natalka.jpg",
    instagram: "https://www.instagram.com/nvtssss/",
  },
  {
    name: "Wiktor Niedbalski",
    description: "Trener",
    image: "/wiktorek.png",
    instagram: "https://www.instagram.com/fatcat066/",
  },
  {
    name: "Franciszek Pawlak",
    description: "Debil",
    image: "/franiu.png",
    instagram: "https://www.instagram.com/franekdzbanekpawlak/",
  },
];

export function TeamSection() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div
        className="-translate-x-1/2 -translate-y-1/2 pointer-events-none absolute top-1/2 left-1/2 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <h2 className="mb-16 animate-blur-in font-bold text-3xl text-white tracking-tight sm:text-4xl md:text-5xl">
        <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Nasz zespół
        </span>
      </h2>

      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
        {teamMembers.map((member, index) => (
          <AvatarCard
            key={member.name}
            name={member.name}
            description={member.description}
            image={member.image}
            instagram={member.instagram}
            delay={`${0.2 + index * 0.15}s`}
          />
        ))}
      </div>
    </section>
  );
}

function AvatarCard({
  name,
  image,
  instagram,
  delay,
  description,
}: {
  name: string;
  image: string;
  instagram: string;
  delay: string;
  description: string;
}) {
  return (
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex animate-fade-in-up cursor-pointer flex-col items-center gap-4"
      style={{ animationDelay: delay, animationFillMode: "both" }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full bg-green-500/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-neutral-700/50 shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-green-500/30 sm:h-32 sm:w-32 md:h-36 md:w-36">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
          />
          <div
            className="absolute inset-0 rounded-full bg-linear-to-br from-green-500/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            aria-hidden="true"
          />
        </div>

        <div
          className="-inset-1 group-hover:-inset-2 absolute rounded-full border border-neutral-700/30 opacity-0 transition-all duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="font-medium text-white text-xl tracking-wide transition-colors duration-300 group-hover:text-green-400 sm:text-2xl">
          {name}
        </span>
        <span className="text-neutral-400 text-sm uppercase tracking-wider transition-colors duration-300 group-hover:text-green-400">
          {description}
        </span>
      </div>
    </a>
  );
}
