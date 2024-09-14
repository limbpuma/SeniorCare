import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as createAstro } from './astro/server_CC3nx09E.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './texts_uLfmKLwa.mjs';

const $$Astro = createAstro();
const $$DiscoverIcons = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DiscoverIcons;
  const features = [
    { icon: "bed", title: "Comfortable Living Spaces", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "01" },
    { icon: "utensils", title: "Nutritious Dining Options", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "02" },
    { icon: "shield-alt", title: "Safety and Security Measures", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "03" },
    { icon: "seedling", title: "Memory Care Services", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "04" },
    { icon: "ambulance", title: "Transportation Assistance", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "05" },
    { icon: "heart", title: "Emotional and Spiritual Support", description: "Aenean viverra cursus ipsum. Etiam vitae aliquet lorem ultricies eget massa.", number: "06" }
  ];
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`features py-12 sm:py-16 bg-soft-orange ${className}`, "class")}> <div class="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8"> <div class="text-center mb-12"> <h5 class="text-deep-blue font-ag-sub-heading text-ag-sub-heading mb-2">Senior Living</h5> <h2 class="text-deep-blue font-ag-h3 md:text-ag-h3 text-ag-h4 mb-4">Discover Our Unique Offerings</h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${features.map((feature, index) => renderTemplate`<div${addAttribute(`relative p-6 rounded-lg   ${index === 1 ? "bg-soft-beige " : "bg-soft-orange hover:bg-soft-beige transition duration-300"} shadow-md hover:shadow-lg transition-shadow duration-300 `, "class")}> <div class="flex flex-col mb-4"> <div class="text-black mb-4"> ${renderComponent($$result, "Icon", $$Icon, { "socials": [feature.icon], "size": "large" })} </div> <h3 class="text-deep-blue font-ag-h5 text-ag-h5 mb-2">${feature.title}</h3> <p class="text-black text-ag-body-text font-ag-body-text">${feature.description}</p> </div> <div class="absolute top-4 right-4 text-soft-blue text-ag-h1 opacity-20">${feature.number}</div> </div>`)} </div> </div> </section>`;
}, "E:/Lim/Developer/Projects/seniorCare/src/components/common/DiscoverIcons.astro", void 0);

export { $$DiscoverIcons as $ };
