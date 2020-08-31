import PostsDB from "../src/database/PostDatabase";
import Post from "../src/model/Post";
import dotenv from "dotenv";
dotenv.config();

/* 6 e 7 */

const postDatabase = new PostsDB();

test("Create Post", async () => {
  try {
    const post = new Post("123456789", "url.com", "Foto", "Foto");

    await postDatabase.createPost(post);

    const postFromDb = await postDatabase.getPostById(post.id);

    expect(postFromDb).not.toBe(undefined);
    expect(postFromDb).toEqual({
      id: "123456789",
      photo: "url.com",
      description: "Foto",
      userId: "345",
    });
  } catch (error) {
    expect(error).not.toBe(undefined);
  }
});

afterAll(async () => {
  await postDatabase.deletePostById("id do post");
  await postDatabase.destroyConnection();
});
