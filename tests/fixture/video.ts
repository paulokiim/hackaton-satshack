export const VideoUploadedMock = {
  uid: "fake-uid",
  filename: "fake-filename",
  ownerAddress: "fake-address",
};

export const VideoMock = {
  ...VideoUploadedMock,
  name: "fake-name",
  slug: "fake-slug",
  price: 10.0,
  pricePerMinute: 2.0,
  description: "fake-description",
  moduleUid: "fake-module-uid",
};

export const VideoUploadRepositoryParamsMock = VideoUploadedMock;

export const VideoUploadParamsMock = {
  filename: "fake-filename",
  ownerAddress: "fake-address",
};

export const VideoFindByUidRepositoryParamsMock = {
  uid: "fake-uid",
};

export const VideoFindByUidParamsMock = VideoFindByUidRepositoryParamsMock;

export const VideoUpdateRepositoryParamsMock = VideoMock;

export const VideoUpdateParamsMock = VideoUpdateRepositoryParamsMock;
