export enum PostType {
  NORMAL = "normal",
  EVENTO = "evento",
}

export const toUserType = (value: string): PostType => {
  switch (value) {
    case "normal":
      return PostType.NORMAL;
    case "evento":
      return PostType.EVENTO;
    default:
      return PostType.NORMAL;
  }
};

export default class Post {
  constructor(
    public id: string,
    public photo: string,
    public description: string,
    public userId: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public getPhoto(): string {
    return this.photo;
  }

  public getDescription(): String {
    return this.description;
  }

  public getUserId(): string {
    return this.userId;
  }
}
