import SpeakerCard from "@/components/SpeakerCard";

const speakers = [
  {
    name: "Mr. Sayambar Roy Chowdhury",
    designation: "CEO, Cake Solutions",
  },
  {
    name: "Mr. Megh Deb",
    designation: "Founder, TJP",
  },
  {
    name: "Mr. Subham Mani",
    designation: "CEO, Bewaafa inc.",
  },
  {
    name: "Mr. Ronit Bose",
    designation: "Girl's favourite",
  },
];

const page = () => {
  return (
    <>
      <div className="px-6 mt-6 mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {speakers.map((s) => {
          return <SpeakerCard key={s.name} {...s} />;
        })}
      </div>
    </>
  );
};

export default page;
