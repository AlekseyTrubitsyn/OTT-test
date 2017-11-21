export const FILTER_CARRIERS = 'FILTER_CARRIERS';
export const FILTER_CARRIERS_ALL = 'FILTER_CARRIERS_ALL';
export const FILTER_DAY_TIME = 'FILTER_DAY_TIME';

export function filterCarriers(title) {
  if (title === '' || title === 'ALL' || title === 'Все авиакомпании') {
    return {
      type: FILTER_CARRIERS_ALL,
      filterName: title
    }
  }

  return {
    type: FILTER_CARRIERS,
    filterName: title
  }
}

export function setDaytimeFilter(value) {
  return {
    type: FILTER_DAY_TIME,
    isOn: value
  }
}
