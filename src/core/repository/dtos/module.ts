type CreateModuleRepositoryParams = {
  uid: string;
  name: string;
  ownerAddress: string;
  price: number;
  description?: string;
  videos?: Array<string>;
};

type CreateModuleParams = {
  name: string;
  ownerAddress: string;
  price: number;
  description?: string;
};

type FindOneModuleRepositoryParams = {
  uid: string;
};

type FindByUidParams = FindOneModuleRepositoryParams;
