import { v4 as uuid } from "uuid";
import moduleRepository from "../repository/module";

const create = async (createParams: CreateModuleParams) => {
  const moduleUid = uuid();
  const createRepositoryParams: CreateModuleRepositoryParams = {
    uid: moduleUid,
    ...createParams,
  };

  try {
    const module = await moduleRepository.create(createRepositoryParams);

    return module;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to create module");
  }
};

const findAll = async () => {
  try {
    const modules = await moduleRepository.findAll();

    return modules;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to findAll modules");
  }
};

const findByUid = async (findByUidParams: FindByUidParams) => {
  try {
    const module = await moduleRepository.findByUid(findByUidParams);

    return module;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to findByUid module");
  }
};

export default {
  create,
  findAll,
  findByUid,
};
