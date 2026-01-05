// NOTE: updated by assistant to apply section-wide background/overlay and remove duplicate layer

import React from "react";

const ServicesSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background for the entire section under the header */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-[url('/background1.png')] bg-cover bg-center opacity-50"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-white/30" aria-hidden="true" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Serviciile noastre
          </h2>
          <p className="mt-3 max-w-2xl text-base text-gray-700">
            Descoperă cum te putem ajuta să îți atingi obiectivele.
          </p>
        </div>

        {/* Grid wrapper WITHOUT additional/duplicate background layer */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Cards (kept as-is; adjust content/components to match your existing implementation) */}
          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Meditații</h3>
            <p className="mt-2 text-sm text-gray-700">
              Lecții personalizate pentru gimnaziu și liceu.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Pregătire examene</h3>
            <p className="mt-2 text-sm text-gray-700">
              Bacalaureat, Evaluare Națională și admitere.
            </p>
          </div>

          <div className="rounded-2xl bg-white/70 backdrop-blur p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-semibold text-gray-900">Plan de învățare</h3>
            <p className="mt-2 text-sm text-gray-700">
              Structură, exerciții și feedback constant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
