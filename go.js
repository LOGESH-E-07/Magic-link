export default function handler(req, res) {
  const urls = [
    "https://www.amazon.in/s?k=office+bag+for+men&rh=p_78:B0GF29D8Q6&ref=nb_sb__noss_2",
    "https://www.amazon.in/s?k=laptop+bags+for+man&rh=p_78:B0GF29D8Q6&ref=nb_sb__noss_2",
    "https://www.amazon.in/s?k=messenger+bag+for+men&rh=p_78:B0GF29D8Q6&ref=nb_sb__noss_2"
  ];
  const random = urls[Math.floor(Math.random()*urls.length)];
  res.writeHead(302,{
    Location: random,
    "Cache-Control":"no-store"
  });
  res.end();
}
