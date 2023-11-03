import Module from "./models/Module";
import Video from "./models/Video";

const create = (createParams: CreateModuleRepositoryParams) =>
  Module.create(createParams);

const findAll = () =>
  Module.findAll({
    include: [
      {
        model: Video,
        as: "videos",
      },
    ],
  });

const findByUid = (findOneParams: FindOneModuleRepositoryParams) =>
  Module.findOne({
    where: findOneParams,
    include: [
      {
        model: Video,
        as: "videos",
      },
    ],
  });

export default {
  create,
  findAll,
  findByUid,
};
