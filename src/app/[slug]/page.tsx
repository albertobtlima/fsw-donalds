import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMetholdOption from "./components/consumption-methold-option";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    return notFound;
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 pt-24">
      {/* Logo e titulo */}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant?.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-semibold">{restaurant.name}</h2>
      </div>

      {/* Bem vindo */}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecendo praticidade e sabor em cada detalhe!
        </p>
      </div>

      {/* Opções de consumo */}
      <div className="grid grid-cols-2 gap-4 pt-14">
        <ConsumptionMetholdOption
          buttonText="Para comer aqui"
          imageUrl="/dine_in.png"
          ImageAlt="Comer aqui"
          option="DINE_IN"
          slug="slug"
        />
        <ConsumptionMetholdOption
          buttonText="Para levar"
          imageUrl="/takeaway.png"
          ImageAlt="Para levar"
          option="TAKEAWAY"
          slug="slug"
        />
      </div>
    </div>
  );
};

export default RestaurantPage;
