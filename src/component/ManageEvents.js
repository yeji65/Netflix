const ManageEvents = ({ match, history }) => {
    const dispatch = useDispatch();

    const { count, page, items } = useSelector(
      ({ event }) => ({
        count: event.count,
        page: event.page,
        itemts: event.items,
      }),
      shallowEqual
    );
  
    useEffect(() => {
      dispatch(MovieAction.getMovies());
    }, [])

    const setPage = useCallback(
        (page) => {
          dispatch(MovieAction.getMovies(page));
        },
        [dispatch]
      );
      
    return (
        <div>
            <EventList events={items} match={match}/>
            <Movies page={page} count={count} setPage={setPage}/>
        </div>
    );
};

export default ManageEvents;