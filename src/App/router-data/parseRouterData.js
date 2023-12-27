const getParsedRouterDataItem = (itemData) => {
  const { linkLabel, ...routerData } = itemData;

  return routerData;
};

export const getParsedRouterDataList = (routerMetaDataList) => {
  return routerMetaDataList.map((item) => getParsedRouterDataItem(item));
};
