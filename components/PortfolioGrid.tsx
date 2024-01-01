import PortfolioCard from "@/components/PortfolioCard";

const PortfolioGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
};

export default PortfolioGrid;
