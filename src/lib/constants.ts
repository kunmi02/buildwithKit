export const BRAND_NAME = "Faceless Blueprint";
export const PRODUCT_NAME = "Faceless Blueprint";
export const PRODUCT_FILENAME = "Faceless-Blueprint-Complete.pdf";
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://selar.com/64z7171o14";
export const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "facelessblueprints@gmail.com";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
export const TIKTOK_PIXEL_ID =
  process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "D8MT5H3C77UDGOQMADAG";

/** Sections included inside the single merged PDF download. */
export const productSections = [
  { name: "Start Here", detail: "Your launch path in order" },
  { name: "Pick Your Niche", detail: "Choose your direction tonight" },
  { name: "Personal Finance Blueprint", detail: "Full channel pack" },
  { name: "History & Mystery Blueprint", detail: "Full channel pack" },
  { name: "Horror Narration Blueprint", detail: "Full channel pack" },
  { name: "Motivation Blueprint", detail: "Full channel pack" },
  { name: "Tech News Blueprint", detail: "Full channel pack" },
  { name: "Health & Wellness Blueprint", detail: "Full channel pack" },
  { name: "Cooking Blueprint", detail: "Full channel pack" },
  { name: "Science Education Blueprint", detail: "Full channel pack" },
  { name: "Meditation & Sleep Blueprint", detail: "Full channel pack" },
  { name: "Gaming News Blueprint", detail: "Full channel pack" },
  { name: "Setup Prompt Pack", detail: "Copy-paste AI prompts" },
  { name: "30-Day Publish Calendar", detail: "First month mapped out" },
  { name: "Clipping Mastery Bonus", detail: "Short-form repurposing guide" },
];
