const getRoute = {
  DETAIL: (id: string, isNew: boolean) => {
    return `/character/${id}${isNew ? 'n' : ''}`;
  },
};

export default getRoute;
