const express = require("express");
const app = express();
const PORT = 3000;
const newsData = [
  {
    id: 1,
    title: "New Tech Innovations in 2024",
    description:
      "The year 2024 is seeing a surge in innovative tech solutions...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Global Economic Growth",
    description: "Economies around the world are showing signs of recovery...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Climate Change and its Impact",
    description: "The effects of climate change are becoming more evident...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "Breakthroughs in Medical Research",
    description:
      "Medical researchers have made significant progress in curing...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Space Exploration Advancements",
    description: "Recent advancements in space exploration have opened new...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 6,
    title: "Artificial Intelligence in Healthcare",
    description:
      "AI is transforming healthcare by improving diagnostics and treatment...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 7,
    title: "Electric Vehicles on the Rise",
    description:
      "The popularity of electric vehicles is growing as technology improves...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 8,
    title: "Cybersecurity Threats in 2024",
    description:
      "Cybersecurity remains a top concern with new threats emerging daily...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 9,
    title: "The Future of Work Post-Pandemic",
    description:
      "The workplace is evolving with more remote and hybrid work options...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 10,
    title: "Advances in Renewable Energy",
    description:
      "Renewable energy technologies are becoming more efficient and widespread...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 11,
    title: "Quantum Computing Breakthroughs",
    description:
      "Quantum computing is making strides towards practical applications...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 12,
    title: "The Impact of Social Media on Society",
    description:
      "Social media continues to shape public opinion and social interactions...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 13,
    title: "Global Supply Chain Disruptions",
    description:
      "Supply chain issues are affecting industries worldwide, causing delays...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 14,
    title: "Innovations in Education Technology",
    description:
      "EdTech is revolutionizing the way we learn, making education more accessible...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 15,
    title: "Space Tourism Takes Off",
    description:
      "Space tourism is no longer a dream, with several companies offering trips...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 16,
    title: "The Rise of the Metaverse",
    description:
      "The metaverse is expanding, offering new opportunities for virtual experiences...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 17,
    title: "Global Climate Agreements",
    description:
      "Nations are coming together to create agreements aimed at combating climate change...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 18,
    title: "Mental Health Awareness in 2024",
    description:
      "Mental health is becoming a priority with more resources available for support...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 19,
    title: "The Growth of the Gig Economy",
    description:
      "The gig economy is growing, providing more flexible work options for people...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 20,
    title: "Blockchain Beyond Cryptocurrency",
    description:
      "Blockchain technology is finding new applications beyond just cryptocurrencies...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 21,
    title: "The Role of 5G in Connectivity",
    description:
      "5G technology is enhancing connectivity and enabling new technological advancements...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 22,
    title: "Global Health Initiatives",
    description:
      "International efforts are being made to improve global health standards...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 23,
    title: "The Future of Urban Mobility",
    description:
      "Urban mobility is being reimagined with innovations in public transport...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 24,
    title: "Artificial Intelligence in Daily Life",
    description:
      "AI is becoming more integrated into our daily routines, making tasks easier...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 25,
    title: "The Impact of Automation on Jobs",
    description:
      "Automation is changing the job market, leading to shifts in employment trends...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 26,
    title: "New Developments in Biotechnology",
    description:
      "Biotechnology is advancing with new treatments and innovations in healthcare...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 27,
    title: "Sustainable Living Trends",
    description:
      "Sustainable living is gaining popularity as more people adopt eco-friendly practices...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 28,
    title: "The Impact of Globalization",
    description:
      "Globalization continues to shape economies and cultures around the world...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 29,
    title: "Technological Innovations in Agriculture",
    description:
      "Agriculture is benefiting from new technologies that improve efficiency...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 30,
    title: "The Future of Wearable Technology",
    description:
      "Wearable technology is evolving, offering new health and lifestyle benefits...",
    image: "https://picsum.photos/200/300",
  },
];
const topNewsData = [
  {
    id: 1,
    title: "Global Leaders Meet for Climate Summit",
    description:
      "World leaders are gathering to discuss urgent climate issues...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    title: "Major Breakthrough in Cancer Research",
    description:
      "Scientists have discovered a new treatment that shows promise...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    title: "Economy Shows Strong Recovery Signs",
    description: "The global economy is bouncing back faster than expected...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    title: "Advancements in AI Technology",
    description:
      "AI continues to revolutionize industries with groundbreaking applications...",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    title: "Historic Space Mission Success",
    description:
      "A historic space mission has successfully landed on Mars, marking a new era in exploration...",
    image: "https://picsum.photos/200/300",
  },
];
// Dummy news data

app.get("/api/news", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const paginatedNews = paginate(newsData, page, limit);
  const totalCount = newsData.length;
  res.json({
    count: totalCount,
    data: paginatedNews,
  });
});

app.get("/api/top/news", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const paginatedTopNews = paginate(topNewsData, page, limit);
  res.json(paginatedTopNews);
});

function paginate(array, page, limit) {
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  return array.slice(startIndex, endIndex);
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
