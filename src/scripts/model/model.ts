/// <reference path="../app.d.ts" />
class Model {
  // currentMonth: Date;
  currentDate: Date;
  currentRange: dateRange;
  selectType: DateSelector;

  // firstDisplayedDay
  constructor(selectType: DateSelector, public dayCount: number, startDate?: Date) {
    if (!startDate) startDate = new Date();
    
    this.selectType = selectType;
    if (selectType == 'selectRange') this.currentRange = {startDate: undefined, endDate: undefined}

    this.currentDate = startDate;

  } 

  setCurrentDate(currentDate: Date) {
    if (this.selectType == 'selectDay') {
      this.currentDate = currentDate;
    } else {      
      if (!this.currentRange.startDate || this.currentRange.endDate) {
        this.currentRange.startDate = currentDate;
        this.currentRange.endDate = undefined;
      } else {
        this.currentRange.endDate = currentDate;
      }
    }
  }

  getCurrentDate(): Date | dateRange {
    if (this.selectType == 'selectDay') {
      return this.currentDate;
    } else {
      return this.currentRange;
    }
  }

  // getCurrentMonth() {
  //   return this.currentMonth;
  // }

  getSelectType(): DateSelector {
    return this.selectType
  }

}

export default Model;