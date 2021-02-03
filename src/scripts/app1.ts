import Model from "./model/model";
import Presenter from "./presenter/presenter";
import View from "./view/view"


let myCalendar = function(rootHTML: HTMLElement, selectType: DateSelector, dayCount: number, startDate?: Date) {
  let view = new View(rootHTML);
  let model = new Model(selectType, dayCount, startDate);
  let presenter = new Presenter(model, view);
  presenter.init();
}

export default myCalendar;