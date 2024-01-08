"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface PortfolioProps {
  title: string;
  description: string;
  image: string;
  username: string | null;
  password: string | null;
  notes: string;
  alt: string;
  website: string;
  github: string;
}

const PortfolioCard = ({
  title,
  description,
  image,
  username,
  password,
  notes,
  alt,
  website,
  github,
}: PortfolioProps) => {
  const openWindow = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <Card className="flex flex-col">
      {" "}
      <CardHeader className="text-center">
        <CardTitle className="uppercase">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>{" "}
      </CardHeader>
      <CardContent>
        <div className="relative aspect-[4/3]">
          <Image src={image} alt={alt} fill={true} objectFit="cover" />
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <p>Test Username: {username ? username : "None"}</p>
          <p>Test Password: {password ? password : "None"}</p>
          <p>Notes: {notes}</p>
        </div>
      </CardContent>
      <CardFooter className="mt-auto">
        {" "}
        <div className="flex gap-2 w-full">
          {" "}
          <Button onClick={() => openWindow(website)} className="flex-1">
            Website
          </Button>{" "}
          <Button
            onClick={() => openWindow(github)}
            variant="secondary"
            className="flex-1"
          >
            Github
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
