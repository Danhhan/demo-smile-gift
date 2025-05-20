import AboutPreview from "@/components/sections/AboutPreview";
import DonationSection from "@/components/sections/DonationSection";
import FeaturedPrograms from "@/components/sections/FeaturedPrograms";
import GalleryPreview from "@/components/sections/GalleryPreview";
import Hero from "@/components/sections/Hero";
import ImpactStats from "@/components/sections/ImpactStats";
import NewsPreview from "@/components/sections/NewsPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VolunteerCTA from "@/components/sections/VolunteerCTA";

export default function Home() {
	return (
		<>
			<Hero />

			<AboutPreview />

			<ImpactStats />

			<FeaturedPrograms />

			<GalleryPreview />

			<TestimonialsSection />

			<NewsPreview />

			<div className="bg-primary-50 py-20">
				<div className="absolute inset-0 opacity-10 bg-pattern-leaves"></div>
				<div className="container-custom">
					<div className="grid md:grid-cols-2 gap-10">
						<VolunteerCTA />
						<DonationSection />
					</div>
				</div>
			</div>
		</>
	);
}
