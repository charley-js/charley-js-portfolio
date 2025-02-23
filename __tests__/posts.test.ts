import { GET } from "../app/api/blog/route";
import { seed } from "../database/seed";
import { Post } from "../database/models/post";
import { string } from "yup";

beforeAll(async () => {
  await seed();
});

afterAll(async () => {
  await seed();
});

describe("GET /api/blog", () => {
  test("GET:200 - Responds with array of all blog posts", async () => {
    const response = await GET();
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body.data.length).toBe(1);
    body.data.forEach((post: Post) => {
      expect(post).toMatchObject({
        _id: expect.any(String),
        title: expect.any(String),
        content: expect.any(String),
        author: expect.any(String),
        created_at: expect.any(String),
        updated_at: expect.any(String),
        __v: expect.any(Number),
      });
      if (post.image) {
        expect(post.image).toEqual(expect.any(String));
      }
      if (post.collection) {
        expect(post.collection).toEqual(expect.any(String));
      }
      if (post.num !== undefined) {
        expect(post.num).toEqual(expect.any(Number));
      }
    });
  });
});
