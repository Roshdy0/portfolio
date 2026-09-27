import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	const baseUrl = "https://portfolio-blush-theta-7kv6gy2k7x.vercel.app/";

	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
