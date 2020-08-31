import BaseDB from "./BaseDatabase";
import Post, { PostType } from "../model/Post";

export default class PostsDB extends BaseDB {
  private static TABLE_NAME = "Post_Labook";

  private toModel(dbResult?: any): Post | undefined {
    return (
      dbResult &&
      new Post(
        dbResult.id,
        dbResult.photo,
        dbResult.description,
        dbResult.user_id
      )
    );
  }

  public async createPost(post: Post): Promise<void> {
    await this.getConnection()
      .insert({
        id: post.getId(),
        photo: post.getPhoto(),
        description: post.getDescription(),
        user_id: post.getUserId(),
      })
      .into(PostsDB.TABLE_NAME);
    this.destroyConnection();
  }

  public async getPostById(postId: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(PostsDB.TABLE_NAME)
      .where({ id: postId });

    this.destroyConnection();
    return result[0];
  }

  public async deletePostById(id: string): Promise<any> {
    await this.getConnection().delete().from(PostsDB.TABLE_NAME).where({ id });
  }
}
