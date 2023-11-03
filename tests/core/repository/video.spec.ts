import Video from "../../../src/core/repository/models/Video";
import videoRepository from "../../../src/core/repository/video";
import {
  VideoFindByUidRepositoryParamsMock,
  VideoMock,
  VideoUpdateRepositoryParamsMock,
  VideoUploadRepositoryParamsMock,
  VideoFindByModuleUidRepositoryParamsMock,
  VideoUploadedMock,
} from "../../fixture/video";

describe("VideoRepository", () => {
  describe("upload()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should upload a video", async () => {
      jest
        .spyOn(videoRepository, "upload")
        .mockResolvedValueOnce(VideoUploadedMock as Video);

      const uploadedVideo = await videoRepository.upload(
        VideoUploadRepositoryParamsMock
      );

      expect(uploadedVideo).toEqual(VideoUploadedMock);
    });

    it("Should throw error trying to create module", async () => {
      jest.spyOn(videoRepository, "upload").mockRejectedValueOnce(Error);

      try {
        await videoRepository.upload(VideoUploadRepositoryParamsMock);
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });

  describe("update()", () => {
    let uploadedVideo: Video;
    beforeAll(async () => {
      uploadedVideo = await videoRepository.upload(
        VideoUploadRepositoryParamsMock
      );
    });

    afterEach(() => {
      jest.restoreAllMocks();
    });

    afterAll(async () => {
      await uploadedVideo.destroy();
    });

    it("Should update video", async () => {
      jest
        .spyOn(videoRepository, "update")
        .mockResolvedValueOnce(VideoMock as Video);

      const video = await videoRepository.update(
        uploadedVideo,
        VideoUpdateRepositoryParamsMock
      );

      expect(video).toEqual(VideoUpdateRepositoryParamsMock);
    });

    it("Should throw error trying to update video", async () => {
      jest.spyOn(videoRepository, "update").mockRejectedValueOnce(Error);

      try {
        await videoRepository.update(
          uploadedVideo,
          VideoUpdateRepositoryParamsMock
        );
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });

  describe("findByUid()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should get one video", async () => {
      jest
        .spyOn(videoRepository, "findByUid")
        .mockResolvedValueOnce(VideoMock as Video);

      const video = await videoRepository.findByUid(
        VideoFindByUidRepositoryParamsMock
      );

      expect(video).toEqual(VideoMock);
    });

    it("Should get zero video", async () => {
      jest.spyOn(videoRepository, "findByUid").mockResolvedValueOnce(null);

      const video = await videoRepository.findByUid(
        VideoFindByUidRepositoryParamsMock
      );

      expect(video).toBeNull;
    });

    it("Should throw error trying to findByUid video", async () => {
      jest.spyOn(videoRepository, "findByUid").mockRejectedValueOnce(Error);

      try {
        await videoRepository.findByUid(VideoFindByUidRepositoryParamsMock);
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });

  describe("findAllByModuleUid", () => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    it("Should find all videos", async () => {
      jest
        .spyOn(videoRepository, "findAllByModuleUid")
        .mockResolvedValueOnce([VideoMock as Video]);

      const videos = await videoRepository.findAllByModuleUid(
        VideoFindByModuleUidRepositoryParamsMock
      );

      expect(videos).toEqual([VideoMock]);
    });

    it("Should find zero videos", async () => {
      jest
        .spyOn(videoRepository, "findAllByModuleUid")
        .mockResolvedValueOnce([]);

      const videos = await videoRepository.findAllByModuleUid(
        VideoFindByModuleUidRepositoryParamsMock
      );

      expect(videos).toEqual([]);
    });

    it("Should throw error", async () => {
      jest
        .spyOn(videoRepository, "findAllByModuleUid")
        .mockRejectedValueOnce(Error);

      try {
        await videoRepository.findAllByModuleUid(
          VideoFindByModuleUidRepositoryParamsMock
        );
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });
});
