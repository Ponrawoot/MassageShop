import Image from "next/image";

export default function ShopCard({ shopName, imgSrc }: { shopName: string; imgSrc: string }) {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
      <div className="w-full h-[70%] relative rounded-lg border-slate-400">
        <Image
          src={imgSrc}
          alt="Shop Picture"
          height={400}
          width={400}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="w-full h-[15%] p-[10px]">{shopName}</div>
    </div>
  );
}
