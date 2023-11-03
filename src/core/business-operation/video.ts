import { v4 as uuid } from "uuid";

import videoRepository from "../repository/video";

const uploadVideo = async (uploadVideoParams: UploadVideoParams) => {
  const uploadVideoRepositoryParams = {
    uid: uuid(),
    ...uploadVideoParams,
  };

  try {
    const video = await videoRepository.upload(uploadVideoRepositoryParams);

    return video;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to upload video");
  }
};

const findByUid = async (findByUidParams: FindByUidVideoParams) => {
  try {
    const video = await videoRepository.findByUid(findByUidParams);

    return video;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to findByUid video");
  }
};

const update = async (updateVideoParams: UpdateVideoParams) => {
  try {
    const findByUidParams = {
      uid: updateVideoParams.uid,
    } as FindByUidVideoParams;
    const video = await findByUid(findByUidParams);

    if (!video) throw new Error("Video not found");

    const updatedVideo = await videoRepository.update(video, updateVideoParams);

    return updatedVideo;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to update video");
  }
};

const findAllByModuleUid = async (
  findAllByModuleUidParams: FindAllByModuleUidParams
) => {
  try {
    const videos = await videoRepository.findAllByModuleUid(
      findAllByModuleUidParams
    );

    return videos;
  } catch (error) {
    console.log("Error: ", error);
    throw new Error("Error trying to findAllByModuleUid videos");
  }
};

export default {
  uploadVideo,
  findByUid,
  update,
  findAllByModuleUid,
};
