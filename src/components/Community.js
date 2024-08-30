import Image from "next/image";

const Card = ({ imgSrc, title, text1, text2, text3 }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <Image
        src={imgSrc} 
    
        width={50}
        height={50}
        alt={`${title} image`}
     
        className="mx-auto"

      />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-loose" > {text1} {text2} {text3}</p>

    </div>
  );
};

const Community = () => {
  return (
    <section className="container mx-auto px-16 lg:px-32" id ="Community">
    
              
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-2 lg:gap-16 text-center mx-auto">
        
        <Card imgSrc="/community/1.svg" title="Jobs" text1="Join Us if you're Interested"   />
        <Card imgSrc="/community/2.svg" title="Chat Communication" text2="Remaining to add!!" />
        <Card imgSrc="/community/3.svg" title="Github Access" text3="Remaining to add!" />
     
      </div>
      
    </section>
  );
};

export default Community;
