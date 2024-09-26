import Image from "next/image";
import Link from "next/link";

const Hepurplection = () => {
  return (
    <section
      className="text-center flex flex-col gap-10 sm:gap-20 items-center justify-center h-full mt-28 sm:mt-32 md:mt-44"
      id="home"
    >
      <div className="md:w-2/3 lg:w-1/2 container px-5 md:px-16 mx-auto">
        <h1 className="capitalize flex flex-col gap-2 md:gap-5 text-3xl sm:text-4xl md:text-[3.2rem] 2xl:text-6xl font-bold">
          <p>Code,Create,Captivate:</p>
          <p>Unlock your virtual presence with us</p>
          <p> </p>
        </h1>
        <p className="text-lg leading-normal sm:leading-loose my-4 md:my-6">
          Transforming Visions into Pixels.We provide all kind of Graphic 
          related, Digital Marketing work also we take Web Development projects.
        </p>
        <button className="md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-purple-600 hover:border-purple-600 hover:bg-transparent hover:text-purple-600 rounded-full">
          <Link href={"#services"}>
            Explore
          </Link>
        </button>
      </div>
      <div className="w-full relative">
        <div className="before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[url('/herobg1.png')] before:bg-left-bottom before:bg-contain before:bg-no-repeat before:-z-50 after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-[url('/herobg2.png')] after:bg-right after:bg-contain after:bg-no-repeat after:-z-50">
          <Image
            src={"/hero.png"}
            width={1100}
            height={500}
            alt="hero Image"
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hepurplection;
