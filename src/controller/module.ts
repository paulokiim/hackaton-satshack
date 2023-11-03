import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import moduleBO from "../core/business-operation/module";

const create = async (req: Request, res: Response) => {
  const body = req.body;

  const createParams = {
    ...body,
  } as CreateModuleParams;

  const module = await moduleBO.create(createParams);

  return res.status(StatusCodes.CREATED).send(module);
};

const findAll = async (req: Request, res: Response) => {
  const modules = await moduleBO.findAll();

  return res.status(StatusCodes.OK).send(modules);
};

const findByUid = async (req: Request, res: Response) => {
  const queryParams = req.params;
  const findByUidParams = {
    ...queryParams,
  } as FindByUidParams;

  const module = await moduleBO.findByUid(findByUidParams);

  return res.status(StatusCodes.OK).send(module);
};

export default {
  create,
  findAll,
  findByUid,
};
