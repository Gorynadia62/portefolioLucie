app.get("/Galerie", (req, res) => {
  res.render("page/ Galerie");
});
app.get("/A propos", (req, res) => {
  res.render("page/ A propos");
});

app.get("/contacter", (req, res) => {
  res.render("pages/contacter");
});

app.get("/", async (req, res) => {
  try {
    const imagesData = await images;
    res.render("pages/masonry", { images: imagesData });
  } catch (err) {
    console.log(err);
    res.render("pages/masonry", { images: [] });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
