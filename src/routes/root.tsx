import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { profileUser } from "../app/features/userSlice"
import { useAppDispatch } from "../app/hook/hook"
import { ReduxType } from "../../types"



const Layout = () => {
  const user = useSelector((state: ReduxType) => state.user)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const storeUser = async () => {
        await dispatch(profileUser(user.token));
    };

    // Appel initial pour le chargement de la page
    storeUser();

    // Fonction pour gérer les changements de localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'token' && event.newValue) {
        storeUser(); // Rappel si le token est mis à jour
      }
    };

    // Ajouter l'écouteur d'événements pour les changements de localStorage
    window.addEventListener('storage', handleStorageChange);

    // Nettoyer l'écouteur d'événements lors du démontage
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [dispatch, user.token]);
  return (
    <div className="h-screen">
      <div className="flex flex-col h-full">
        <div className="flex-grow">
        <Navbar firstName={user.firstName}/>
          <Outlet/>
        </div>
        <footer className="w-full z-50 py-6 font-light text-center border-t border-gray-400 bottom-0 bg-white">Copyright 2020 Argent Bank</footer>
      </div>
    </div>
  )
}

export default Layout