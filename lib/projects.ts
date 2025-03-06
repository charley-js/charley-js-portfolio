import { connect } from "../database/connection";
import projectModel from "../database/models/project";

export async function getCurrentProject() {
  await connect();
  return projectModel.findOne({ status: "in progress" });
}
