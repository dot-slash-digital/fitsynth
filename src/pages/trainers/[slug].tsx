import { FC, Fragment, useMemo } from "react";
import { useRouter } from "next/router";

import { Footer, Head, Navbar } from "@/components";
import {
  About,
  Header,
  Info,
  Reviews,
  SpecialsAndDeals,
} from "@/components/trainers";
import content from "@/content";

const Trainer: FC = () => {
  const router = useRouter();

  const querySlug = router.query.slug;
  const slug = Array.isArray(querySlug) || !querySlug ? "" : querySlug;

  const currentTrainer = content.trainers.find(
    (trainer) => trainer.id === slug
  );

  const averageRating = useMemo(() => {
    const reviews = currentTrainer?.reviews || [];

    if (!reviews.length) {
      return 0;
    }

    return (
      reviews
        .map(({ rating }) => rating)
        .reduce((total, current) => current + total) / reviews.length
    );
  }, [currentTrainer?.reviews]);

  if (!currentTrainer) {
    return <Fragment />;
  }

  const { about, header, info, reviews, specialsAndDeals } = currentTrainer;

  return (
    <>
      <Head description={about.content} hide title={header.name} />
      <Navbar />
      <Header {...header} rating={averageRating} reviewCount={reviews.length} />
      <Info {...info} />
      <About {...about} />
      <SpecialsAndDeals cards={specialsAndDeals} />
      <Reviews cards={reviews} />
      <Footer />
    </>
  );
};

export default Trainer;
