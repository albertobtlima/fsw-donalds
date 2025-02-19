import { notFound } from "next/navigation";

import { db } from "@/lib/prisma";

import RestaurantCategories from "./components/categories";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethold: string }>;
}

const isConsumptionMetholdValid = (consumptionMethold: string) => {
  return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethold.toUpperCase());
};

const RestaurantMenuPage = async ({
  params,
  searchParams,
}: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethold } = await searchParams;

  if (!isConsumptionMetholdValid(consumptionMethold)) {
    return notFound();
  }

  const restaurant = await db.restaurant.findUnique({
    where: { slug },
    include: { menuCategories: { include: { products: true } } },
  });

  if (!restaurant) {
    return notFound();
  }

  return (
    <div>
      <div className="relative h-[250px] w-full">
        <RestaurantHeader restaurant={restaurant} />
        <RestaurantCategories restaurant={restaurant} />
      </div>
    </div>
  );
};

export default RestaurantMenuPage;
