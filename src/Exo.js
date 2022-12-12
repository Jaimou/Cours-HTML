const Exo = () => {
  // Consigne : créez un composant (ou plusieurs), appelez le depuis App.jsx et affichez les articles
  // Pour cela, utilisez un .map() sur le tableau articles
  // N'affichez que les articles qui sont "publiés"
  // Utilisez les bons éléments du DOM 5 (h1, h2, p, img, a, ul ,li, etc..)

  const articles = [
    {
      title: "Titre de l'article 1",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 1",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 1",
      isPublished: true,
    },
    {
      title: "Titre de l'article 2",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 2",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 2",
      isPublished: false,
    },
    {
      title: "Titre de l'article 3",
      image: "https://www.slate.fr/sites/default/files/styles/1200x680/public/animaux_traditions_culturelles.jpg",
      subtitle: "Sous-titre de l'article 3",
      date: new Date("2021-01-01"),
      content: "Contenu de l'article 3",
      isPublished: true,
    },
  ];

  return (
    <div>
      <ul>
        <article>

          {articles.map((article, index) => {
            if(article.isPublished)

            return (
              <li>
                <h1>{article.title}</h1>
                <img src={article.image}/>
                <h2>{article.subtitle}</h2>
                <p>{article.date.toDateString()}</p>
                <p>{article.content}</p>
              </li>
            )
            
          })}

        </article>
      </ul>
    </div>
  )
}

export default Exo;