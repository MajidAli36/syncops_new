"use client";
import { ParallaxProvider } from 'react-scroll-parallax';
import ProductsHero from './ProductsHero';
import FeaturedProducts from './FeaturedProducts';
import ProductIntegrations from './ProductIntegrations';
import ProductComparison from './ProductComparison';
import MetricsBar from '../../components/MetricsBar';
import FinalCTA from '../../components/FinalCTA';
import TechnologyStackCards from '../../components/TechnologyStackCards';
export default function ProductsClient() {
  return (
    <ParallaxProvider>
      <main className="min-h-screen">
        {/* Hero */}
        <section data-gsap-section className="bg-brand-navy text-white">
          <div data-gsap-stagger>
            <ProductsHero />
          </div>
        </section>

        {/* Metrics (light) */}
        <section data-gsap-section className="bg-white py-16">
          <div data-gsap-stagger>
            <MetricsBar />
          </div>
        </section>

        {/* Featured Products */}
        <section data-gsap-section className="bg-white py-20">
          <div data-gsap-stagger>
            <FeaturedProducts />
          </div>
        </section>

        {/* Integrations (light gray) */}
        <section data-gsap-section className="bg-gray-50 py-20">
          <div data-gsap-stagger>
            <ProductIntegrations />
          </div>
        </section>

        {/* Comparison (dark) */}
        <section data-gsap-section className="bg-brand-navy text-white py-20">
          <div data-gsap-stagger>
            <ProductComparison />
          </div>
        </section>

        {/* Technologies (light) */}
        <section data-gsap-section>
          <div data-gsap-stagger>
            <TechnologyStackCards />
          </div>
        </section>

        {/* Final CTA (brand gradient) */}
        <section data-gsap-section>
          <div data-gsap-stagger>
            <FinalCTA />
          </div>
        </section>
      </main>
    </ParallaxProvider>
  );
}


