import { Dispatch } from 'redux';

//import { menuSlice.actions } from './ui-slice';
import { menuActions } from './menuSlice';

const url = "https://digital-menu-7d340-default-rtdb.europe-west1.firebasedatabase.app/menus.json";

export const fetchMenusData = () => {
  return async (dispatch: Dispatch) => {
    const fetchData = async () => {
        console.log("Trying to fetch data 1")
      const response = await fetch(
        url
      );

      if (!response.ok) {
        throw new Error('Could not fetch menu data!');
      }

      const data = await response.json();

      return data;
    };

    try {
        //Replace existing data or load new one
      const menusData = await fetchData();
      console.log("fetched data:", menusData)
      dispatch(
          //TODO change with dynamic value (menusData)
          //Somehow also this object {hello: "world"} isn't saved in state
        menuActions.replaceMenus(menusData)
        //menuActions.printIntrada()
      );
    } catch (error) {
        //Handle errors
      /*dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      );*/
      console.log("Error!")
    }
  };
};