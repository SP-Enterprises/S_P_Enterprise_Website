import Image from "next/image";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const TeamCard = ({ imgSrc, name, title, instagram, github, linkedin }) => {
  return (
    <div className="relative flex flex-col gap-1 md:hover:shadow-lg rounded-xl md:py-10 team-card md:cursor-pointer">
      <Image
        src={imgSrc}
        width={130}
        height={130}
        alt="team member"
        className="drop-shadow-2xl w-20 sm:w-32 md:mb-5 mb-3 rounded-full border-2 border-purple-500 mx-auto"
      />
      <h2 className="text-base sm:text-xl font-semibold text-center">{name}</h2>
      <p className="text-center sm:text-base text-sm">{title}</p>
      <div className="flex md:flex-col gap-3 md:absolute md:bottom-12 md:right-8 md:translate-y-10 icons md:transition-all md:duration-500 md:opacity-0 mx-auto md:mx-0 md:text-purple-600">
        {instagram && (
          <Link target="_blank" href={instagram}>
            <InstagramIcon className="text-xl hover:text-purple-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {github && (
          <Link target="_blank" href={github}>
            <GitHubIcon className="text-xl hover:text-purple-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
        {linkedin && (
          <Link target="_blank" href={linkedin}>
            <LinkedInIcon className="text-xl hover:text-purple-600 cursor-pointer md:hover:text-gray-500" />
          </Link>
        )}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 lg:px-24" id="our team">
      <span className="service-name text-center">OUR TEAM</span>
      <h2 className="title text-center md:w-1/2 mx-auto">
        The most qualified and talented individuals
      </h2>

      <div className="mx-auto grid grid-cols-2 lg:grid-cols-3 gap-y-8 sm:gap-8 mt-16">
        <TeamCard
          imgSrc={"/team/1.png"}
          name="Samir Pathan"
          title="CEO and Founder"
          instagram="https://www.instagram.com/sam.eer1910?igsh=emltdWc1MWU5cHdh&utm_source=qr"
          github="https://github.com/SP-Enterprises"
          linkedin="https://www.linkedin.com/in/samir-khan-b28363207/"
        />
        <TeamCard
          imgSrc={"/team/2.png"}
          name="Uvesh Khan"
          title="Graphic Designer | UI / UX"
          instagram="https://www.instagram.com/uvxxsh?igsh=ODZreHVzeml4Y3pq"
          github="https://github.com/"
          linkedin="https://www.linkedin.com/in/uvesh-khan-031547221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />
        <TeamCard
          imgSrc={"/team/3.png"}
          name="Obaid Arab"
          title="Web Designer | Wordpress Developer"
          instagram="https://www.instagram.com/_o.b__1412._/"
          github="https://github.com/"
          linkedin="https://www.linkedin.com/in/obaid-arab/"
        />
      </div>
    </section>
  );
};

export default Team;
