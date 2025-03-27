export interface CreateAboutDto {
  title: String;
  description: String;
  is_active: Boolean;
}

export interface AboutDto {
  _id: String;
  title: String;
  description: String;
  is_active: Boolean;
}

export interface UpdateAboutDto {
  _id: String;
  title: String;
  description: String;
  is_active: Boolean;
}
