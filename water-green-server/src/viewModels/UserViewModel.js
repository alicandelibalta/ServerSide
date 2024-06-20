class UserViewModel {
  constructor(user) {
    this.id = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.password = user.password;
    this.email = user.email;
    this.role = user.role;
    this.country = user.country;
    this.city = user.city;
    this.birthday = user.birthday;
    this.gender = user.gender;
    this.isActive = user.isActive;
    // Parola gibi hassas bilgileri burada dahil etmiyoruz.
  }

  // Veritabanı modelinden view modele dönüşüm
  static toViewModel(user) {
    return new UserViewModel(user);
  }

  static toViewModels(users) {
    return users.map((user) => new UserViewModel(user));
  }

  // View modelden veritabanı modeline dönüşüm
  static toDatabaseModel(viewModel) {
    return {
      id: viewModel.id,
      firstName: viewModel.firstName,
      lastName: viewModel.lastName,
      email: viewModel.email,
      password: viewModel.password,
      role: viewModel.role,
      country: viewModel.country,
      city: viewModel.city,
      birthday: viewModel.birthday,
      gender: viewModel.gender,
      isActive: viewModel.isActive,
      // Parola gibi hassas bilgileri burada dahil etmiyoruz.
    };
  }

  static toDatabaseModels(viewModels) {
    return viewModels.map((viewModel) =>
      UserViewModel.toDatabaseModel(viewModel)
    );
  }
}

module.exports = UserViewModel;
