function createMedalTable(medals) {
  let obj = {};

  for (let i = 0; i < medals.length; i++) {
    let podium = medals[i].podium;
    for (let j = 0; j < podium.length; j++) {
      let [position, country] = podium[j].split(".");
      position = Number(position);
      if (position === 3) {
        position = 1;
      } else if (position === 1) {
        position = 3;
      }
      if (obj.hasOwnProperty(country)) {
        obj[country] = obj[country] + position;
      } else obj[country] = position;
    }
  }
  return obj;
}

describe("Medal Table Generator", () => {
  // Test function, please do not edit
  it("creates correct data structure ", () => {
    // Input data
    const medals = [
      {
        sport: "cycling",
        podium: ["1.China", "2.Germany", "3.ROC"],
      },
      {
        sport: "fencing",
        podium: ["1.ROC", "2.France", "3.Italy"],
      },
      {
        sport: "high jump",
        podium: ["1.Italy", "1.Qatar", "3.Belarus"],
      },
      {
        sport: "swimming",
        podium: ["1.USA", "2.France", "3.Brazil"],
      },
    ];

    // Expected output data
    const medalTable = {
      Italy: 4,
      France: 4,
      ROC: 4,
      USA: 3,
      Qatar: 3,
      China: 3,
      Germany: 2,
      Brazil: 1,
      Belarus: 1,
    };

    const actualResult = createMedalTable(medals);
    expect(actualResult).toMatchObject(medalTable);
  });
});
