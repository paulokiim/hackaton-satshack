import Video from "../../../src/core/repository/models/Video";
import videoRepository from "../../../src/core/repository/video";
import videoBO from "../../../src/core/business-operation/video";
import {
  VideoFindByUidParamsMock,
  VideoMock,
  VideoUpdateParamsMock,
  VideoUploadParamsMock,
  VideoUploadedMock,
} from "../../fixture/video";

describe("VideoBusinessOperation", () => {
  describe("uploadVideo()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should upload a video", async () => {
      jest
        .spyOn(videoRepository, "upload")
        .mockResolvedValueOnce(VideoUploadedMock as Video);

      const video = await videoBO.uploadVideo(VideoUploadParamsMock);

      expect(video).toEqual(VideoUploadedMock);
    });

    it("Should throw error trying to upload video", async () => {
      jest.spyOn(videoRepository, "upload").mockRejectedValueOnce(Error);

      try {
        await videoBO.uploadVideo(VideoUploadParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to upload video"));
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
        .mockResolvedValueOnce(VideoUploadedMock as Video);

      const video = await videoBO.findByUid(VideoFindByUidParamsMock);

      expect(video).toEqual(VideoUploadedMock);
    });

    it("Should get zero video", async () => {
      jest.spyOn(videoRepository, "findByUid").mockResolvedValueOnce(null);

      const video = await videoBO.findByUid(VideoFindByUidParamsMock);

      expect(video).toBeNull;
    });

    it("Should throw error trying to findByUid video", async () => {
      jest.spyOn(videoRepository, "findByUid").mockRejectedValueOnce(Error);

      try {
        await videoBO.findByUid(VideoFindByUidParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to findByUid video"));
      }
    });
  });

  describe("update()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should update video", async () => {
      jest
        .spyOn(videoRepository, "findByUid")
        .mockResolvedValueOnce(VideoUploadedMock as Video);

      jest
        .spyOn(videoRepository, "update")
        .mockResolvedValueOnce(VideoMock as Video);

      const video = await videoBO.update(VideoUpdateParamsMock);

      expect(video).toEqual(VideoMock);
    });

    it("Should not find a video", async () => {
      jest.spyOn(videoRepository, "findByUid").mockResolvedValueOnce(null);

      try {
        await videoBO.update(VideoUpdateParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to update video"));
      }
    });

    it("Should throw error trying to update video", async () => {
      jest
        .spyOn(videoRepository, "findByUid")
        .mockResolvedValueOnce(VideoUploadedMock as Video);

      jest.spyOn(videoRepository, "update").mockRejectedValueOnce(Error);

      try {
        await videoBO.update(VideoUpdateParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to update video"));
      }
    });
  });
});
