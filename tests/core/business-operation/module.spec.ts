import moduleBO from "../../../src/core/business-operation/module";
import moduleRepository from "../../../src/core/repository/module";
import Module from "../../../src/core/repository/models/Module";
import {
  ModuleCreateParamsMock,
  ModuleFindByUidMock,
  ModuleMock,
} from "../../fixture/module";

describe("ModuleBusinessOperation", () => {
  describe("create()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should create a new module", async () => {
      jest
        .spyOn(moduleRepository, "create")
        .mockResolvedValueOnce(ModuleMock as Module);
      const module = await moduleBO.create(ModuleCreateParamsMock);

      expect(module).toEqual(ModuleMock);
    });

    it("Should throw error trying to create module", async () => {
      jest.spyOn(moduleRepository, "create").mockRejectedValueOnce(Error);

      try {
        await moduleBO.create(ModuleCreateParamsMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to create module"));
      }
    });
  });

  describe("findAll()", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("Should findAll modules", async () => {
      jest
        .spyOn(moduleRepository, "findAll")
        .mockResolvedValueOnce([ModuleMock as Module]);

      const modules = await moduleBO.findAll();

      expect(modules).toEqual([ModuleMock]);
    });

    it("Should throw error trying to findAll modules", async () => {
      jest.spyOn(moduleRepository, "findAll").mockRejectedValueOnce(Error);

      try {
        await moduleBO.findAll();
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to findAll modules"));
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

      const module = await moduleBO.findByUid(ModuleFindByUidMock);

      expect(module).toEqual(ModuleMock);
    });

    it("Should find zero module", async () => {
      jest.spyOn(moduleRepository, "findByUid").mockResolvedValueOnce(null);

      const module = await moduleBO.findByUid(ModuleFindByUidMock);

      expect(module).toBeNull;
    });

    it("Should throw error trying to findByUid modules", async () => {
      jest.spyOn(moduleRepository, "findByUid").mockRejectedValueOnce(Error);

      try {
        await moduleBO.findByUid(ModuleFindByUidMock);
      } catch (error) {
        expect(error).toEqual(new Error("Error trying to findByUid module"));
      }
    });
  });
});
