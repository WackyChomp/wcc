import Image from "next/image";
import ActualCarousel from "@/components/ActualCarousel";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="">
      <section className="bg-amber-950 flex flex-col gap-7 mt-8">
        <h1 className="text-red-500 text-4xl font-bold">Home Page</h1>
      </section>

      <ActualCarousel />

      <section className="bg-amber-950 flex flex-col gap-7 mt-8">
        <h1 className="text-blue-500 text-4xl font-bold">Section # </h1>
      </section>

      <section className="bg-amber-950 flex flex-col gap-7 mt-8">
        <h1 className="text-green-500 text-4xl font-bold">Section # </h1>
      </section>

      <FAQ />
    </div>
  );
}
