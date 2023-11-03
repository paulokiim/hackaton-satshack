import Video from "./models/Video";

const upload = (uploadVideoParams: UploadVideoRepositoryParams) =>
  Video.create(uploadVideoParams);

const update = (
  video: Video,
  updateVideoParams: UpdateVideoRepositoryParams
) => {
  video.set(updateVideoParams);
  return video.save();
};

const findByUid = (findByUidParams: FindByUidVideoRepositoryParams) =>
  Video.findOne({
    where: findByUidParams,
  });

const findAllByModuleUid = (
  findAllByModuleUidParams: FindAllByModuleUidRepositoryParams
) => Video.findAll({ where: findAllByModuleUidParams });

export default {
  upload,
  update,
  findByUid,
  findAllByModuleUid,
};
