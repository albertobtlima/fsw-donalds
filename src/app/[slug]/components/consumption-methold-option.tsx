import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMetholdOptionProps {
  imageUrl: string;
  ImageAlt: string;
  buttonText: string;
  option: ConsumptionMethod;
  slug: string;
}

const ConsumptionMetholdOption = ({
  imageUrl,
  ImageAlt,
  buttonText,
  option,
  slug,
}: ConsumptionMetholdOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            src={imageUrl}
            fill
            alt={ImageAlt}
            className="object-contain"
          />
        </div>

        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethold=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ConsumptionMetholdOption;
