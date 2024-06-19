class ArticleViewModel {
  constructor(article) {
    this.id = article.id;
    this.title = article.title;
    this.subtitle = article.subtitle;
    this.content = article.content;
    this.photo = article.photo;
    this.isPublished = article.isPublished;
    this.authorId = article.userId; // foreign key as authorId
    // Diğer gerekli alanlar
  }

  // Veritabanı modelinden view modele dönüşüm
  static toViewModel(article) {
    return new ArticleViewModel(article);
  }

  static toViewModels(articles) {
    return articles.map(article => new ArticleViewModel(article));
  }

  // View modelden veritabanı modeline dönüşüm
  static toDatabaseModel(viewModel) {
    return {
      id: viewModel.id,
      title: viewModel.title,
      subtitle: viewModel.subtitle,
      content: viewModel.content,
      photo: viewModel.photo,
      isPublished: viewModel.isPublished,
      userId: viewModel.authorId, // foreign key as userId
      // Diğer gerekli alanlar
    };
  }

  static toDatabaseModels(viewModels) {
    return viewModels.map(viewModel => ArticleViewModel.toDatabaseModel(viewModel));
  }
}

module.exports = ArticleViewModel;
