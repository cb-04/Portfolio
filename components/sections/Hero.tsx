import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Hero() {
  const { name, title, bio, avatar } = PORTFOLIO_DATA;

  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center min-h-[50vh] text-center p-8"
    >
      <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
        <Avatar className="size-32 border-8 border-gray-200 shadow-lg overflow-hidden">
          <AvatarImage alt={name} src={avatar} className="object-cover object-top"/>
        </Avatar>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{name}</h1>
        <p className="text-xl md:text-2xl text-gray-400 text-center">
         {title.split("\n").map((line, idx) => (
           <span key={idx}>
             {line}
             <br />
           </span>
         ))}
        </p>
        <p className="text-md text-gray-700 max-w-xl">{bio}</p>
      </div>
    </section>
  );
}