import getStoreDetails from "../store/store";

export function getArrWords() {
  const store = getStoreDetails();

  return store.arrWords;
}

export function addArrToLocal() {

      saveState(
        getArrWords()
      );
    
}

export const loadState = () => { 
    try { 
      const serializedState = localStorage.getItem('state'); 
      if (serializedState === null) { 
        return getArrWords(); 
      } 
      return JSON.parse(serializedState)!; 
    } catch (err) { 
      return undefined; 
    } 
  };

export const saveState = (state:any) => { 
    try { 
      const serializedState = JSON.stringify (state); 
      localStorage.setItem ('state', serializedState); 
    } catch(e:any) { 
        console.log(e);
    } 
  };

