/// <reference path="../app.d.ts" />
class Model {
  currentMonth: Date;
  currentData: Date | dateRange;
  
  constructor(public selectType: DateSelector, public dayCount: number, startDate?: Date) {
    if (!startDate) startDate = new Date();
    
    this.currentMonth = startDate;

    if (selectType == 'selectDay') {
      this.currentData = startDate;
    } else {
      this.currentData = {startDate: startDate} as dateRange
    }
  }

  monthGenerator(currentDate?: Date, shift :number = 0, firstDayOfWeek?: number): number[] { //tested
    
    if (!currentDate) {
      // if ( this.currentData instanceof Date) {
      //   currentDate = this.currentData

      // } else {
      //   currentDate = this.currentData.startDate
      // }
      currentDate = this.currentMonth;
    }
    
    let result: number[] = [];
    let year: number = currentDate.getFullYear();
    let month: number = currentDate.getMonth() + shift;
    let firstDayOfMonth: number = new Date(year, month, 1).getDay();
    firstDayOfMonth = firstDayOfMonth == 0 ? 6 : firstDayOfMonth - 1;
    let currentMonthDayCount = new Date(year, month + 1, 0).getDate();
    let prevMonthDayCount = new Date(year, month, 0).getDate();
    
    for (let i = 1; i <= this.dayCount; i++) {
      if (i <= firstDayOfMonth) {
        result.push(prevMonthDayCount - firstDayOfMonth + i)
      } else {

        if (currentMonthDayCount + firstDayOfMonth >= i) {
          result.push(i - firstDayOfMonth)

        } else {
          result.push(i - currentMonthDayCount - firstDayOfMonth)
        }

      }
    }
    return result
  }

  setCurrentData(shiftMonth?: number) {
    if ( this.currentData  instanceof Date) {
      let currentMonth = this.currentMonth.getMonth();      
      this.currentMonth.setMonth(currentMonth + shiftMonth);
    }

  }

  getCurrentDate() {
    return this.currentData;
  }

  getCurrentMonth() {
    return this.currentMonth;
  }

  getSelectType(): DateSelector {
    return this.selectType
  }

}

export default Model;