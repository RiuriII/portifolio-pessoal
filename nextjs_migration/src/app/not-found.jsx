"use client";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-dvh w-full items-center justify-center space-x-2 bg-amber-200 p-4 max-md:flex-col-reverse max-md:space-x-0">
      <div className="flex max-w-[650px] flex-col items-start justify-center space-y-6 max-md:mt-10">
        <h1 className="text-left text-5xl font-bold capitalize text-blue max-md:text-5xl">
          Oops! 🫠 <br />
          Página não encontrada
        </h1>
        <p className="text-left text-xl text-gray-600">
          A página que você está procurando não foi encontrada{" "}
          <Link href="/" className="underline">
            Clique aqui
          </Link>{" "}
          para voltar para a página inicial
        </p>
      </div>
      <div className="flex max-h-[600px] max-w-[600px] items-center justify-center max-md:max-w-full">
        <Image
          src="/images/cat_404.png"
          alt="Cat 404"
          className="h-full w-full object-cover"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}
