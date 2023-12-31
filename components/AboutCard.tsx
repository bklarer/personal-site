import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AboutCard = () => {
  return (
    <Card className="w-full mb-[100px]">
      <CardContent className="mt-6">
        <div className="md:flex">
          <div className="flex-1 text-center border border-border h-[400px]"></div>
          <div className="flex-1 text-center md:mt-0 mt-4">About me</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
