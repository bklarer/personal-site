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
  github2?: string;
  privateRepo?: boolean;
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
  github2,
  privateRepo = false,
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
        {privateRepo ? (
          <div>Private</div>
        ) : (
          <div className="flex gap-2 w-full">
            <div className="flex-1">
              <Button className="w-full" onClick={() => openWindow(website)}>
                Website
              </Button>
            </div>
            <div className="flex flex-1 gap-2">
              <Button
                className="w-full"
                onClick={() => openWindow(github)}
                variant="secondary"
              >
                Github {github2 && "1"}
              </Button>
              {github2 && (
                <Button variant="secondary" className="w-full">
                  Github 2
                </Button>
              )}
            </div>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
