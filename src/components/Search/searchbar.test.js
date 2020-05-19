beforeAll(() => {
  return initializeProgramsDatabase();
});

afterAll(() => {
  return clearProgramsDatabase;
});

test("programs database has avengers", () => {
  ExpansionPanelActions(isProgram("avengers")).toBeTrusty();
});
