import Image from "next/image";

const teamMembers = [
  {
    name: "Natalia Begert",
    image: "/natalka.jpg",
    instagram: "https://www.instagram.com/nvtssss/",
  },
  {
    name: "Wiktor Niedbalski",
    image: "/wiktorek.png",
    instagram: "https://www.instagram.com/fatcat066/",
  },
  {
    name: "Franciszek Pawlak",
    image: "/franiu.png",
    instagram: "https://www.instagram.com/franekdzbanekpawlak/",
  },
];

export function TeamSection() {
  return (
    <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-16">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-green-500/5 blur-[120px]"
        aria-hidden="true"
      />

      <h2 className="mb-16 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl animate-blur-in">
        <span className="bg-linear-to-r from-white via-neutral-300 to-neutral-500 bg-clip-text text-transparent">
          Nasz zespół
        </span>
      </h2>

      <div className="flex flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
        {teamMembers.map((member, index) => (
          <AvatarCard
            key={member.name}
            name={member.name}
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
}: {
  name: string;
  image: string;
  instagram: string;
  delay: string;
}) {
  return (
    <a
      href={instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 animate-fade-in-up cursor-pointer"
      style={{ animationDelay: delay, animationFillMode: 'both' }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-full bg-green-500/20 blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          aria-hidden="true"
        />

        <div className="relative h-28 w-28 overflow-hidden rounded-full border border-neutral-700/50 shadow-2xl transition-all duration-500 group-hover:border-green-500/30 group-hover:scale-105 sm:h-32 sm:w-32 md:h-36 md:w-36">
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
          className="absolute -inset-1 rounded-full border border-neutral-700/30 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-inset-2"
          aria-hidden="true"
        />
      </div>

      <span className="text-lg font-medium tracking-wide text-white transition-colors duration-300 group-hover:text-green-300 sm:text-xl">
        {name}
      </span>
    </a>
  );
}
