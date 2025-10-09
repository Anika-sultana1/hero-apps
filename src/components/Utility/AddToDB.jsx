import { toast } from "react-toastify"
const getStoredApp = ()=> {
    const storedAppSTR = localStorage.getItem("InstalledApp")
    if(storedAppSTR){
        const storedAppData = JSON.parse(storedAppSTR)
        return storedAppData;
    }
    else{
        return [];
    }
}

const addToStoredDB = id => {
    const storedAppData = getStoredApp()
    if(storedAppData.includes(id)){
        toast("App already Installed")
    }
    else{
        storedAppData.push(id)
        const data = JSON.stringify(storedAppData)
        localStorage.setItem("InstalledApp", data)
    }
}

const removeFromStoredDB = (id) => {
  const installedApps = getStoredApp();
  const stringId = String(id);
  const remainingApps = installedApps.filter(storedId => storedId !== stringId);
  const remainingAppsSRT =  JSON.stringify(remainingApps)
  localStorage.setItem("InstalledApp",remainingAppsSRT);
};



export {addToStoredDB,getStoredApp, removeFromStoredDB}




















