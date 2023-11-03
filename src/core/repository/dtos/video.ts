type UploadVideoRepositoryParams = {
  uid: string;
  ownerAddress: string;
  filename: string;
};

type UploadVideoParams = {
  ownerAddress: string;
  filename: string;
};

type UpdateVideoRepositoryParams = {
  name: string;
  slug: string;
  price: number;
  pricePerMinute: number;
  description: string;
  moduleUid: string;
};

type FindByUidVideoRepositoryParams = {
  uid: string;
};

type UpdateVideoParams = UpdateVideoRepositoryParams &
  FindByUidVideoRepositoryParams;

type FindByUidVideoParams = FindByUidVideoRepositoryParams;

type FindAllByModuleUidRepositoryParams = {
  moduleUid: string;
};

type FindAllByModuleUidParams = FindAllByModuleUidRepositoryParams;
