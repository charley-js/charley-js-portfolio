import { connect } from "./connection";
import postModel from "./models/post";
import projectModel from "./models/project";
import posts from "./data/posts";
import projects from "./data/projects";

export async function seed() {
  try {
    await connect();
    await seedPosts();
    await seedProjects();
    console.log("Seeding successful.");
  } catch (error) {
    console.error("Error during seeding : ", (error as Error).message);
    throw error;
  }
}

async function seedPosts() {
  try {
    await postModel.deleteMany({});
    const result = await postModel.insertMany(posts);
    console.log(`${result.length} post(s) seeded succesfully.`);
  } catch (error) {
    console.error("Error whilst seeding Posts : ", (error as Error).message);
    throw error;
  }
}

async function seedProjects() {
  try {
    await projectModel.deleteMany({});
    const result = await projectModel.insertMany(projects);
    console.log(`${result.length} project(s) seeded succesfully.`);
  } catch (error) {
    console.error("Error whilst seeding Projects : ", (error as Error).message);
    throw error;
  }
}
