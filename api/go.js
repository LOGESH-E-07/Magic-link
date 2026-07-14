export default function handler(req, res) {
  const urls = [
    "https://www.amazon.in/s?k=laptop+bags+for+man&rh=p_78%3AB0GF29D8Q6&ref=nb_sb_noss",
    "https://www.amazon.in/s?k=laptop+messenger+bag+for+men&rh=p_78%3AB0GF29D8Q6&ref=nb_sb_noss",
    "https://www.amazon.in/s?k=office+bag+for+men&rh=p_78%3AB0GF29D8Q6&ref=nb_sb_noss"
  ];

  const randomUrl = urls[Math.floor(Math.random() * urls.length)];

  res.writeHead(302, {
    Location: randomUrl,
    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
    Pragma: "no-cache",
    Expires: "0"
  });

  res.end();
}
