import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SEOHead } from "@/components/SEOHead";
import NotFound from "./NotFound";

const servicesData: Record<string, any> = {
  "ai-seo": {
    title: "AI Search Engine Optimization",
    h1: "AI Search Engine Optimization Services",
    intro: "Sowa Marketing Agency builds high-converting ai search engine optimization campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom ai search engine optimization strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom AI Search Engine Optimization Strategy","description":"We build your ai search engine optimization plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical AI Search Engine Optimization Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your ai search engine optimization campaign. You can focus on running your business while we build your growth engine."},{"title":"Local AI Search Engine Optimization Optimization","description":"You need to own your backyard before expanding. We optimize your ai search engine optimization assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for AI Search Engine Optimization","description":"Data drives every decision we make. We track exactly how your ai search engine optimization campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our ai search engine optimization captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional ai search engine optimization services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "voice-ai-agents": {
    title: "Voice AI Agents",
    h1: "Voice AI Agents Services",
    intro: "Sowa Marketing Agency builds high-converting voice ai agents campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom voice ai agents strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Voice AI Agents Strategy","description":"We build your voice ai agents plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Voice AI Agents Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your voice ai agents campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Voice AI Agents Optimization","description":"You need to own your backyard before expanding. We optimize your voice ai agents assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Voice AI Agents","description":"Data drives every decision we make. We track exactly how your voice ai agents campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our voice ai agents captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional voice ai agents services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "chat-ai-agents": {
    title: "Chat AI Agents",
    h1: "Chat AI Agents Services",
    intro: "Sowa Marketing Agency builds high-converting chat ai agents campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom chat ai agents strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Chat AI Agents Strategy","description":"We build your chat ai agents plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Chat AI Agents Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your chat ai agents campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Chat AI Agents Optimization","description":"You need to own your backyard before expanding. We optimize your chat ai agents assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Chat AI Agents","description":"Data drives every decision we make. We track exactly how your chat ai agents campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our chat ai agents captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional chat ai agents services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "review-management": {
    title: "Review Management",
    h1: "Review Management Services",
    intro: "Sowa Marketing Agency builds high-converting review management campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom review management strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Review Management Strategy","description":"We build your review management plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Review Management Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your review management campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Review Management Optimization","description":"You need to own your backyard before expanding. We optimize your review management assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Review Management","description":"Data drives every decision we make. We track exactly how your review management campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our review management captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional review management services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "crm-and-hosting": {
    title: "CRM and Hosting",
    h1: "CRM and Hosting Services",
    intro: "Sowa Marketing Agency builds high-converting crm and hosting campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom crm and hosting strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom CRM and Hosting Strategy","description":"We build your crm and hosting plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical CRM and Hosting Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your crm and hosting campaign. You can focus on running your business while we build your growth engine."},{"title":"Local CRM and Hosting Optimization","description":"You need to own your backyard before expanding. We optimize your crm and hosting assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for CRM and Hosting","description":"Data drives every decision we make. We track exactly how your crm and hosting campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our crm and hosting captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional crm and hosting services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "google-business-profile": {
    title: "Google Business Profile",
    h1: "Google Business Profile Services",
    intro: "Sowa Marketing Agency builds high-converting google business profile campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom google business profile strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Google Business Profile Strategy","description":"We build your google business profile plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Google Business Profile Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your google business profile campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Google Business Profile Optimization","description":"You need to own your backyard before expanding. We optimize your google business profile assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Google Business Profile","description":"Data drives every decision we make. We track exactly how your google business profile campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our google business profile captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional google business profile services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "website-design": {
    title: "Website Design",
    h1: "Website Design Services",
    intro: "Sowa Marketing Agency builds high-converting website design campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom website design strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Website Design Strategy","description":"We build your website design plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Website Design Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your website design campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Website Design Optimization","description":"You need to own your backyard before expanding. We optimize your website design assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Website Design","description":"Data drives every decision we make. We track exactly how your website design campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our website design captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional website design services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "seo": {
    title: "Search Engine Optimization",
    h1: "Search Engine Optimization Services",
    intro: "Sowa Marketing Agency builds high-converting search engine optimization campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom search engine optimization strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Search Engine Optimization Strategy","description":"We build your search engine optimization plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Search Engine Optimization Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your search engine optimization campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Search Engine Optimization Optimization","description":"You need to own your backyard before expanding. We optimize your search engine optimization assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Search Engine Optimization","description":"Data drives every decision we make. We track exactly how your search engine optimization campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our search engine optimization captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional search engine optimization services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "public-relations": {
    title: "Public Relations",
    h1: "Public Relations Services",
    intro: "Sowa Marketing Agency builds high-converting public relations campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom public relations strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Public Relations Strategy","description":"We build your public relations plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Public Relations Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your public relations campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Public Relations Optimization","description":"You need to own your backyard before expanding. We optimize your public relations assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Public Relations","description":"Data drives every decision we make. We track exactly how your public relations campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our public relations captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional public relations services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "conversational-ai-agents": {
    title: "Conversational AI Agents",
    h1: "Conversational AI Agents Services",
    intro: "Sowa Marketing Agency builds high-converting conversational ai agents campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom conversational ai agents strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Conversational AI Agents Strategy","description":"We build your conversational ai agents plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Conversational AI Agents Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your conversational ai agents campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Conversational AI Agents Optimization","description":"You need to own your backyard before expanding. We optimize your conversational ai agents assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Conversational AI Agents","description":"Data drives every decision we make. We track exactly how your conversational ai agents campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our conversational ai agents captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional conversational ai agents services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "linkedin-ghostwriting": {
    title: "LinkedIn Ghostwriting",
    h1: "LinkedIn Ghostwriting Services",
    intro: "Sowa Marketing Agency builds high-converting linkedin ghostwriting campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom linkedin ghostwriting strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom LinkedIn Ghostwriting Strategy","description":"We build your linkedin ghostwriting plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical LinkedIn Ghostwriting Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your linkedin ghostwriting campaign. You can focus on running your business while we build your growth engine."},{"title":"Local LinkedIn Ghostwriting Optimization","description":"You need to own your backyard before expanding. We optimize your linkedin ghostwriting assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for LinkedIn Ghostwriting","description":"Data drives every decision we make. We track exactly how your linkedin ghostwriting campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our linkedin ghostwriting captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional linkedin ghostwriting services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "ai-mass-social-media-posting": {
    title: "AI Mass Social Media Posting",
    h1: "AI Mass Social Media Posting Services",
    intro: "Sowa Marketing Agency builds high-converting ai mass social media posting campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom ai mass social media posting strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom AI Mass Social Media Posting Strategy","description":"We build your ai mass social media posting plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical AI Mass Social Media Posting Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your ai mass social media posting campaign. You can focus on running your business while we build your growth engine."},{"title":"Local AI Mass Social Media Posting Optimization","description":"You need to own your backyard before expanding. We optimize your ai mass social media posting assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for AI Mass Social Media Posting","description":"Data drives every decision we make. We track exactly how your ai mass social media posting campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our ai mass social media posting captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional ai mass social media posting services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "email-marketing": {
    title: "Email Marketing",
    h1: "Email Marketing Services",
    intro: "Sowa Marketing Agency builds high-converting email marketing campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom email marketing strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Email Marketing Strategy","description":"We build your email marketing plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Email Marketing Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your email marketing campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Email Marketing Optimization","description":"You need to own your backyard before expanding. We optimize your email marketing assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Email Marketing","description":"Data drives every decision we make. We track exactly how your email marketing campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our email marketing captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional email marketing services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "content-assistance": {
    title: "Content Assistance",
    h1: "Content Assistance Services",
    intro: "Sowa Marketing Agency builds high-converting content assistance campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom content assistance strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Content Assistance Strategy","description":"We build your content assistance plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Content Assistance Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your content assistance campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Content Assistance Optimization","description":"You need to own your backyard before expanding. We optimize your content assistance assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Content Assistance","description":"Data drives every decision we make. We track exactly how your content assistance campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our content assistance captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional content assistance services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
  "ad-management": {
    title: "Ad Management",
    h1: "Ad Management Services",
    intro: "Sowa Marketing Agency builds high-converting ad management campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.",
    servicesInclude: ["Custom ad management strategy for the market","Technical audits and foundation repair","Local Rhode Island competitor analysis","Performance tracking and lead attribution","Direct integration with your sales process","Ongoing optimization for regional dominance"],
    coreOfferings: [{"title":"Custom Ad Management Strategy","description":"We build your ad management plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI."},{"title":"Technical Ad Management Implementation","description":"A great plan means nothing without flawless execution. Our team handles the entire technical setup for your ad management campaign. You can focus on running your business while we build your growth engine."},{"title":"Local Ad Management Optimization","description":"You need to own your backyard before expanding. We optimize your ad management assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors."},{"title":"Performance Tracking for Ad Management","description":"Data drives every decision we make. We track exactly how your ad management campaign performs down to the dollar. You always know exactly what your marketing budget yields."}],
    whyNeed: [{"pain":"Losing leads to local competitors?","solution":"Our ad management captures high-intent traffic before they call anyone else."},{"pain":"Wasting time on manual tasks?","solution":"We streamline your workflows so you can focus on closing deals."},{"pain":"Unsure of your marketing ROI?","solution":"We provide clear metrics tying our work directly to your revenue."},{"pain":"Outdated digital presence?","solution":"We modernize your brand to build immediate trust with buyers."}],
    closing: "Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional ad management services designed to generate real business growth. Take the first step and contact us today to secure your digital future.",
    image: "https://vibe.filesafe.space/1778622835347500334/assets/eb6b3c3d-7f1c-483d-9528-519690d141fc.png"
  },
};

const generateFallbackContent = (title: string) => {
  const kw = title.toLowerCase();
  const h1 = `${title} Services`;
  return {
    title,
    h1,
    intro: `Sowa Marketing Agency builds high-converting ${kw} campaigns that drive direct revenue. You need a search presence that actually brings in buyers, not just traffic. We build digital assets that dominate the Rhode Island market and scale your operations.`,
    servicesInclude: [
      `Custom ${kw} strategy for the market`,
      `Technical audits and foundation repair`,
      `Local Rhode Island competitor analysis`,
      `Performance tracking and lead attribution`,
      `Direct integration with your sales process`,
      `Ongoing optimization for regional dominance`
    ],
    coreOfferings: [
      {
        title: `Custom ${title} Strategy`,
        description: `We build your ${kw} plan around your exact buyers. You get a clear roadmap that targets high-value clients across New England. We focus strictly on actions that produce measurable ROI.`
      },
      {
        title: `Technical ${title} Implementation`,
        description: `A great plan means nothing without flawless execution. Our team handles the entire technical setup for your ${kw} campaign. You can focus on running your business while we build your growth engine.`
      },
      {
        title: `Local ${title} Optimization`,
        description: `You need to own your backyard before expanding. We optimize your ${kw} assets specifically for surrounding areas. This approach captures high-intent local buyers before they find your competitors.`
      },
      {
        title: `Performance Tracking for ${title}`,
        description: `Data drives every decision we make. We track exactly how your ${kw} campaign performs down to the dollar. You always know exactly what your marketing budget yields.`
      }
    ],
    whyNeed: [
      { pain: "Losing leads to local competitors?", solution: `Our ${kw} captures high-intent traffic before they call anyone else.` },
      { pain: "Wasting time on manual tasks?", solution: `We streamline your workflows so you can focus on closing deals.` },
      { pain: "Unsure of your marketing ROI?", solution: `We provide clear metrics tying our work directly to your revenue.` },
      { pain: "Outdated digital presence?", solution: `We modernize your brand to build immediate trust with buyers.` }
    ],
    closing: `Stop losing ground to competitors and start capturing the local market. Sowa Marketing Agency provides professional ${kw} services designed to generate real business growth. Take the first step and contact us today to secure your digital future.`,
    image: "https://vibe.filesafe.space/1778622835347500334/assets/ba9edb02-1db9-42f6-a47c-d39ade1d3301.png"
  };
};

export default function ServicePage() {
  const { serviceId } = useParams();
  
  if (!serviceId) return <NotFound />;

  const service = servicesData[serviceId] || generateFallbackContent(serviceId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '));

  return (
    <div className="flex flex-col min-h-screen bg-background pt-24 pb-16">
      <SEOHead
        title={`${service.h1} | Sowa Marketing Agency`}
        description={service.intro.substring(0, 155)}
        canonical={`https://sowaagency.com/services/${serviceId}`}
      />
      
      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0"></div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{service.h1}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              {service.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl space-y-16">
          
          <div className="my-8 relative overflow-hidden rounded-2xl border border-border/50">
            <img 
              src={service.image} 
              alt={`${service.title} Services`} 
              className="w-full aspect-[21/9] object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-6">Our {service.title} Services Include:</h2>
            <ul className="space-y-4 ml-2">
              {service.servicesInclude.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-12">
            {service.coreOfferings.map((offering: any, i: number) => (
              <div key={i}>
                <h2 className="text-2xl font-bold mb-4">{offering.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{offering.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Why You Need Professional {service.title}</h2>
            <ul className="space-y-6">
              {service.whyNeed.map((item: any, i: number) => (
                <li key={i} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="flex items-center gap-2 font-bold text-lg min-w-[250px]">
                    <div className="w-2 h-2 rounded-full bg-destructive shrink-0"></div>
                    {item.pain}
                  </div>
                  <div className="text-lg text-muted-foreground sm:border-l sm:border-border sm:pl-4">
                    {item.solution}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center bg-primary/5 border border-primary/20 rounded-2xl p-10">
            <p className="text-xl mb-8 font-medium">{service.closing}</p>
            <Button size="lg" className="rounded-full px-10 text-lg h-14" asChild>
              <Link to="/contact">
                Contact Sowa Marketing Agency <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>

        </div>
      </section>

      {/* Footer Links */}
      <section className="border-t border-border pt-8 pb-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-muted-foreground mb-4">Proudly Serving:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Rhode Island</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Cranston, RI</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Warwick, RI</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Pawtucket, RI</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">North Kingstown, RI</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Boston, MA</Link> | <Link to="/locations" className="text-primary hover:underline whitespace-nowrap">Worcester, MA</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
