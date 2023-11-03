import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import videoBO from "../core/business-operation/video";

const uploadVideo = async (req: Request, res: Response) => {
  const file = req?.file;
  const body = req.body;

  if (!file) return res.status(StatusCodes.BAD_REQUEST).send();

  const uploadVideoParams = {
    filename: file.filename,
    ...body,
  } as UploadVideoParams;

  const video = await videoBO.uploadVideo(uploadVideoParams);

  return res.status(StatusCodes.CREATED).send(video);
};

const findByUid = async (req: Request, res: Response) => {
  const params = req.params;

  const findByUidParams = {
    ...params,
  } as FindByUidVideoParams;

  const video = await videoBO.findByUid(findByUidParams);

  return res.status(StatusCodes.OK).send(video);
};

const update = async (req: Request, res: Response) => {
  const params = req.params;
  const body = req.body;

  const updateParams = {
    ...params,
    ...body,
  } as UpdateVideoParams;

  const video = await videoBO.update(updateParams);

  return res.status(StatusCodes.OK).send(video);
};

const findAllByModuleUid = async (req: Request, res: Response) => {
  const params = req.params;

  const findAllByModuleUidParams = {
    ...params,
  } as FindAllByModuleUidParams;

  const videos = await videoBO.findAllByModuleUid(findAllByModuleUidParams);

  return res.status(StatusCodes.OK).send(videos);
};

export default {
  uploadVideo,
  findByUid,
  update,
  findAllByModuleUid,
};
