import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import fs from "fs";

import videoBO from "../core/business-operation/video";
import path from "path";

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

const streamVideo = async (req: Request, res: Response) => {
  const range = req.headers.range as string;
  const { videoId } = req.params;

  if (!range) {
    res.status(400).send("Requires Range header");
  }
  const videoPath = path.join(__dirname, "..", "..", "uploads", videoId);
  const videoSize = fs.statSync(videoPath).size;
  const CHUNK_SIZE = 10 ** 6;
  const start = Number(range.replace(/\D/g, ""));
  const end = Math.min(start + CHUNK_SIZE, videoSize - 1);
  const contentLength = end - start + 1;

  const headers = {
    "Content-Range": `bytes ${start}-${end}/${videoSize}`,
    "Accept-Ranges": "bytes",
    "Content-Length": contentLength,
    "Content-Type": "video/mp4",
  };

  res.writeHead(206, headers);
  const videoStream = fs.createReadStream(videoPath, { start, end });

  videoStream.pipe(res);
};

export default {
  uploadVideo,
  findByUid,
  update,
  findAllByModuleUid,
  streamVideo,
};
