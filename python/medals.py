medalResults = [
    {
        "sport": "cycling",
        "podium": ["1.China", "2.Germany", "3.ROC"]
    },
    {
        "sport": "fencing",
        "podium": ["1.ROC", "2.France", "3.Italy"]
    },
    {
        "sport": "high jump",
        "podium": ["1.Italy", "1.Qatar", "3.Belarus"]
    },
    {
        "sport": "swimming",
        "podium": ["1.USA", "2.France", "3.Brazil"]
    }
]

def createMedalTable(results):
    # Use the results object above to create a medal table
    # The winner gets 3 points, second place 2 points and third place 1 point
    table = {}   
    for x in results:
        podium = x["podium"]
        for y in podium:
            position, country = y.split(".")
            position = int(position)
            if position == 3:
                position = 1
            elif position == 1:
                position = 3
            table[country] = table.get(country, 0) + position
    
    return table


def test_function():
    #This it the test function, please don't change me
    medalTable = createMedalTable(medalResults)
    print(medalTable)
    expectedTable = {
        "Italy": 4,
        "France": 4,
        "ROC": 4,
        "USA": 3,
        "Qatar": 3,
        "China": 3,
        "Germany": 2,
        "Brazil": 1,
        "Belarus": 1,
    }
    assert medalTable == expectedTable
    
test_function()