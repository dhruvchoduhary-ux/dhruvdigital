export const BUSINESS_NAME = "Dhruv Digital Solutions";

export const BUSINESS_PHONE_DISPLAY = "+91-9220828644"; // Shown on the website
export const BUSINESS_PHONE_TEL = "+919220828644"; // Used in tel: links

export const WHATSAPP_NUMBER_INTERNATIONAL = "919220828644"; // Without +

export const BUSINESS_EMAIL = "dhruvchoduhary@gmail.com";

export const BUSINESS_ADDRESS = "Ahmedabad, Gujarat, India";

export const BUSINESS_HOURS = "Mon - Sat, 9:30 AM - 7:00 PM IST";

const viteEnv: any = (import.meta as any).env || {};

export const API_BASE_URL: string = viteEnv.VITE_API_BASE_URL || "http://localhost:4000";

export const GOOGLE_ANALYTICS_ID: string = viteEnv.VITE_GA_ID || "";
