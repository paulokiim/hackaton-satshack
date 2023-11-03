import moduleRepository from "../../../src/core/repository/module";
import Module from "../../../src/core/repository/models/Module";
import {
  ModuleCreateRepositoryParamsMock,
  ModuleFindByUidMock,
  ModuleMock,
} from "../../fixture/module";

describe("moduleRepository", () => {
  describe("create()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should create a module", async () => {
      jest
        .spyOn(moduleRepository, "create")
        .mockResolvedValueOnce(ModuleMock as Module);

      const module = await moduleRepository.create(
        ModuleCreateRepositoryParamsMock
      );

      expect(module).toEqual(ModuleMock);
    });

    it("Should throw error trying to create module", async () => {
      jest.spyOn(moduleRepository, "create").mockRejectedValueOnce(Error);

      try {
        await moduleRepository.create(ModuleCreateRepositoryParamsMock);
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });

  describe("findAll", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should findAll modules", async () => {
      jest
        .spyOn(moduleRepository, "findAll")
        .mockResolvedValueOnce([ModuleMock as Module]);

      const modules = await moduleRepository.findAll();

      expect(modules).toEqual([ModuleMock]);
    });

    it("Should throw error trying to findAll module", async () => {
      jest.spyOn(moduleRepository, "findAll").mockRejectedValueOnce(Error);

      try {
        await moduleRepository.findAll();
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });

  describe("findByUid", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should find one module", async () => {
      jest
        .spyOn(moduleRepository, "findByUid")
        .mockResolvedValueOnce(ModuleMock as Module);

      const module = await moduleRepository.findByUid(ModuleFindByUidMock);

      expect(module).toEqual(ModuleMock);
    });

    it("Should find zero module", async () => {
      jest.spyOn(moduleRepository, "findByUid").mockResolvedValueOnce(null);

      const module = await moduleRepository.findByUid(ModuleFindByUidMock);

      expect(module).toBeNull;
    });

    it("Should throw error trying to findByUid module", async () => {
      jest.spyOn(moduleRepository, "findByUid").mockRejectedValueOnce(Error);

      try {
        await moduleRepository.findByUid(ModuleFindByUidMock);
      } catch (error) {
        expect(error).toEqual(Error);
      }
    });
  });
});
