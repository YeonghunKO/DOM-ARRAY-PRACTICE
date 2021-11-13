const LOCAL_STORAGE_KEYWORD = 'SHOPPING LISTS';

const STATE_TYPE = {
  name: ['string'],
  price: ['number'],
};

const errorMessage = type => {
  return `${type} 에서 에러 발생`;
};
export { LOCAL_STORAGE_KEYWORD, STATE_TYPE, errorMessage };
