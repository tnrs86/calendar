import Model from './model';

describe('Тестирование методов класса Model', ()=> {
  describe('Тестирование метода monthGenerator, генерирующего набор дат, попадающих в текущее отображение. При тестировании сравниваются\
  первое и последнее значения возвращаемого методом результата', ()=> {
    let ansvers = [ {dayCount: 35, date: new Date, ansver: [30, 3]},   
      {dayCount: 35, date: new Date(2020, 10, 10), ansver: [26, 29]},
      {dayCount: 35, date: new Date(2020, 1, 5), ansver: [27, 1]},
      {dayCount: 42, date: new Date(2020, 10, 5), ansver: [26, 6]},
      {dayCount: 42, date: new Date(2020, 7, 5), ansver: [27, 6]},
    ]

    ansvers.forEach((ansver, i) => {
      let testModel = new Model('selectDay', ansver.dayCount, new Date())
      test('Тест ' + (i + 1), ()=> {
        let result = testModel.monthGenerator(ansver.date);
  
        expect(ansver.ansver).toEqual([result[0], result[result.length - 1]]);
      })
    })

  })


}
)